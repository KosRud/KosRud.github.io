<script lang="ts" setup>
import { useData, useRoute } from "vitepress";

import LayoutNavSideItem from "./LayoutNavSideItem.vue";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch } from "./composables/urlMatch";
import { computed } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();
const route = useRoute();

const NavMobile = site.value.themeConfig.nav;

const props = defineProps<{ topLevel?: boolean }>();

const navSide = computed(
    () =>
        site.value.themeConfig.nav.find((navItem) => {
            return urlMatch(route.path, navItem.url).inside;
        })?.children ?? []
);

const topLevelNavTitle = computed(
    () =>
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(route.path, navItem.url);
            return match.inside;
        })?.title ?? ""
);
</script>

<template>
    <nav :class="$style.NavSide">
        <template v-if="navSide.length > 0 || topLevel">
            <h2 :class="$style.NavSide_title">
                {{ topLevel ? "Home" : topLevelNavTitle }}/
            </h2>
            <ul :class="$style.NavSide_itemList">
                <LayoutNavSideItem
                    :nav-item="navItem"
                    v-for="navItem in NavMobile"
                    v-if="props.topLevel"
                />
                <LayoutNavSideItem
                    :nav-item="navItem"
                    v-for="navItem in navSide"
                    v-else
                />
            </ul>
        </template>
    </nav>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavSide {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow-y: auto;
    padding-top: @Toc-to-Main-gap;
    gap: @gap;
}

.NavSide_title {
    flex: 0 0 max-content;

    font-weight: bold;
    margin-left: auto;
    margin-right: auto;

    font-family: @font-ui;
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
</style>
