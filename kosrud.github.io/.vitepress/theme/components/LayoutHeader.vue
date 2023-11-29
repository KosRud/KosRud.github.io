<script lang="ts" setup>
import { useData } from "vitepress";

import LayoutTopNav from "./LayoutTopNav.vue";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();
</script>

<template>
    <header :class="$style.Header">
        <a
            :class="$style.SiteTitleContainer"
            href="/"
        >
            <div>
                <span :class="$style.SiteTitle"> {{ site.title }}</span>
                <span :class="$style.SiteDescription">
                    {{ site.description }}</span
                >
            </div>
        </a>
        <LayoutTopNav />
    </header>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.Header {
    background-color: @color-background-dark;
    display: flex;
    gap: @gap;

    height: @Header-height;
}

.Header_navLink___active:link {
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

.SiteTitleContainer,
.SiteTitleContainer:link,
.SiteTitleContainer:visited {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: @color-white;
    width: @SideNav-width;
    line-height: 1;
    position: relative;
    text-decoration-line: inherit;

    &::before {
        content: "";
        height: 1.5em;
        width: 1.5em;
        background-image: url("/assets/icons/home/icon.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: @gap;
        margin-left: 0rem;
    }
}

.SiteTitle {
    width: max-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.SiteDescription {
    width: max-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
}

/*
	Font-size
\*----------------------------------*/

.SiteTitle {
    font-size: @size-xl;
}

.SiteDescription {
    font-size: @size-s;
}

/*
	Font-family
\*----------------------------------*/

.Header {
    font-family: @font-ui;
}

.SiteTitleContainer {
    font-family: @font-hero;
}

/*
	UI shadows
\*----------------------------------*/

.Header {
    box-shadow: @shadow;
}
</style>
