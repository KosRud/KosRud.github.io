<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";

import ThemeConfig from "./ThemeConfig";
import { urlMatch, UrlMatch } from "./UrlMatch.js";

const route = useRoute();
const { site, frontmatter } = useData<ThemeConfig>();

const navItem = computed(() => {
    function tracePath(nav: ThemeConfig["nav"]): ThemeConfig["nav"][number][] {
        for (const navItem of nav) {
            const match = urlMatch(route.path, navItem.url);
            switch (match) {
                case UrlMatch.full:
                    return [navItem];
                case UrlMatch.inside:
                    return [navItem];
                case UrlMatch.no:
                    break;
                default:
                    throw new Error(`Unexpected url match type: ${match}`);
            }
        }

        // navItem was not found

        const improvisedNavitem = {
            title: frontmatter.value.title,
            url: route.path,
        };

        return [improvisedNavitem];
    }

    const navItem = site.value.themeConfig.nav.find((navItem) => {
        const match = urlMatch(route.path, navItem.url);
        return [UrlMatch.inside, UrlMatch.full].includes(match);
    });

    return navItem;
});
</script>

<template>
    <div :class="$style.YouAreHere">
        <span>You are here:</span>
        <span>
            <a href="/">Home</a><span> / </span>
            <a :href="navItem?.url">{{ navItem?.title }}</a>
        </span>
    </div>
</template>

<style module lang="less">
@import "./style/variables/index.less";

.YouAreHere {
    display: flex;
    flex-wrap: wrap;
    gap: @gap;

    font-weight: bold;
}
</style>
