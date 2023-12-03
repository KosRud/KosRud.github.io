<script lang="ts" setup>
import { useData, useRoute } from "vitepress";

import LayoutNavSideItem from "./LayoutNavSideItem.vue";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch } from "./composables/urlMatch";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();
const route = useRoute();

const navFull = site.value.themeConfig.nav;

const props = defineProps<{ topLevel?: boolean }>();

const navSide = (() => {
    const navItems =
        site.value.themeConfig.nav.find((navItem) => {
            return urlMatch(route.path, navItem.url).inside;
        })?.children ?? [];
    return navItems;
})();

const topLevelNavTitle = (() => {
    return (
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(route.path, navItem.url);
            return match.inside;
        })?.title ?? ""
    );
})();
</script>

<template>
    <nav :class="$style.NavSide">
        <h2 :class="$style.NavSide_title">{{ topLevelNavTitle }}/</h2>
        <ul :class="$style.NavSide_itemList">
            <LayoutNavSideItem
                :nav-item="navItem"
                v-for="navItem in navFull"
                v-if="props.topLevel"
            />
            <LayoutNavSideItem
                :nav-item="navItem"
                v-for="navItem in navSide"
                v-else
            />
        </ul>
    </nav>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavSide {
    width: @NavSide-width;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow-y: auto;
    padding-top: @Toc-to-Main-gap;
    gap: @gap;

    visibility: v-bind("navSide.length == 0 ? 'hidden' : 'visible'");
}

.NavSide_title {
    flex: 0 0 max-content;

    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
}

.NavSide_itemList {
    flex: 1 1;

    padding-left: @gap;
}

/*
	Font-size
\*----------------------------------*/

.NavSide_title {
    font-size: @size-l;
}

/*
	Font-family
\*----------------------------------*/

.NavSide_title {
    font-family: @font-ui;
}
</style>
