<script setup lang="ts">
import { computed } from "vue";
import { useData, useRoute } from "vitepress";

import ThemeConfig from "./ThemeConfig";
import { urlMatch, UrlMatch } from "./UrlMatch.js";

const route = useRoute();
const { site } = useData<ThemeConfig>();

const navItem = computed(() => {
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
