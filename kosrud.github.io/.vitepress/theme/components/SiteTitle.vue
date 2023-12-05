<script setup lang="ts">
import { useData } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();
</script>

<template>
    <a
        :class="$style.SiteTitleContainer"
        href="/"
    >
        <div>
            <span :class="$style.SiteTitle"> {{ site.title }}</span>
            <span :class="$style.SiteDescription"> {{ site.description }}</span>
        </div>
    </a>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.SiteTitleContainer {
    &,
    &:link,
    &:visited {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        padding: 0rem @gap;

        color: @color-white;
        line-height: 1;
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

            transition: transform @duration-s ease-in;
        }

        &:hover::before {
            transform: scale(1.2);
            transition: transform @duration-s ease-out;
        }

        &:active::before {
            transform: scale(1.2) translateY(@click-offset);
            // transition: transform 0s;
        }
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

.SiteTitleContainer {
    font-family: @font-hero;
}

/*
	Transitions
\*----------------------------------*/

.SiteTitleContainer {
    &::before {
        transition: transform @duration-s ease-in;
    }

    &:hover::before {
        transition: transform @duration-s ease-out;
    }
}
</style>
