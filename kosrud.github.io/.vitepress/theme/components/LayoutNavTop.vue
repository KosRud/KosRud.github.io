<script lang="ts" setup>
import { useData } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

import LayoutNavTopItem from "./LayoutNavTopItem.vue";
</script>

<template>
    <nav :class="$style.NavTop">
        <ul>
            <LayoutNavTopItem
                :nav-item="navItem"
                v-for="navItem in site.themeConfig.nav"
            />
        </ul>
    </nav>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavTop {
    > ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: @gap;
        padding-top: @NavTop-gap-vertical;
        padding-bottom: @NavTop-gap-vertical;
    }
}
</style>
