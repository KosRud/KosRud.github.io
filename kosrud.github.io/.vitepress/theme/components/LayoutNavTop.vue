<script lang="ts" setup>
import { useData } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

import LayoutNavTopItem from "./LayoutNavTopItem.vue";
</script>

<template>
    <nav :class="$style.TopNav">
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

.TopNav {
    > ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: @gap;
        padding-top: @TopNav-gap-vertical;
        padding-bottom: @TopNav-gap-vertical;
    }
}

.NavItem {
    &::before {
        content: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
}

.NavItem_link {
    @navlink-pad: @gap*0.5;

    flex: 1 1 calc(@navlink-pad*2 + 1em);

    &:link,
    &:visited {
        color: @color-white;
        text-decoration: inherit;
    }

    background: @color-primary;
    background-clip: border-box;
    border: @width solid #fff1;
    border-radius: @gap*0.5;
    line-height: 1;
    padding: @navlink-pad;
    min-width: @gap*11;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: @shadow;
    transition: background-color 0.2s;
    transition: border-color 0.5s;

    &:hover {
        background-color: @color-primary-light;
        border-color: @color-highlight;
    }

    &:active {
        transform: translateY(@click-offset);
    }
}

.NavItem_link___active:link {
    position: relative;

    &::after {
        position: absolute;
        content: "";
        left: @gap*0.0;
        right: @gap*0.0;
        bottom: calc(0rem - @gap);
        top: calc(0rem - @TopNav-gap-vertical);
        border-top: @width solid @color-background;
        pointer-events: none;
    }
}
</style>
