<script lang="ts" setup>
import LayoutNavPagesItem from "./LayoutNavPagesItem.vue";

import { computed } from "vue";
import { useData, useRoute } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch } from "./composables/urlMatch";
import { useOneChildOpen } from "./composables/oneChildOpen";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

const props = defineProps<{ topLevel?: boolean }>();
const route = useRoute();

const navItems = computed(() => {
    if (props.topLevel) {
        return [{ title: "Home", url: "/" }].concat(site.value.themeConfig.nav);
    }

    return (
        site.value.themeConfig.nav.find((navItem) => {
            return urlMatch(route.path, navItem.url).inside;
        })?.children ?? []
    );
});

const title = computed(
    () =>
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(route.path, navItem.url);
            return match.inside;
        })?.title ?? ""
);

const oneChildOpen = useOneChildOpen(navItems.value);
</script>

<template>
    <nav :class="$style.NavSide">
        <template v-if="navItems.length > 0">
            <h2
                :class="$style.NavSide_title"
                v-if="!props.topLevel"
            >
                {{ title }}/
            </h2>
            <ul :class="$style.NavSide_itemList">
                <LayoutNavPagesItem
                    :nav-item="navItem"
                    v-for="(navItem, id) in navItems"
                    :is-open="oneChildOpen.isChildOpen(id)"
                    @nav-item-toggle="oneChildOpen.toggleChild(id)"
                    :level="props.topLevel ? 0 : 1"
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
