<script lang="ts" setup>
import { useRoute } from "vitepress";

import { NavItem } from "../ThemeConfig";
import { urlMatch } from "./composables/urlMatch";
import { findFirstChildPage } from "./composables/nav";

const route = useRoute();

const props = defineProps<{ navItem: NavItem }>();
</script>

<template>
    <li :class="$style.NavItem">
        <a
            :class="[
                $style.NavItem_link,
                urlMatch(route.path, props.navItem.url).inside
                    ? $style.NavItem_link___active
                    : '',
            ]"
            :href="findFirstChildPage(props.navItem).url"
            >{{ props.navItem.title }}</a
        >
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavItem {
    &::before {
        content: none;
    }

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;

    min-width: @gap*11;
    flex: 0 1 auto;
}

.NavItem_link {
    @navlink-pad: @gap*0.5;

    flex: 1 1 calc(@navlink-pad*2 + 1em);

    text-decoration: inherit;
    &,
    &:link,
    &:visited {
        color: @color-white;
    }

    background: @color-primary;
    background-clip: border-box;
    border: @border-width solid #fff1;
    border-radius: @gap*0.5;
    line-height: 1;
    padding: @navlink-pad;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: @shadow;
    transition: background-color @duration;
    transition: border-color @duration-l;

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
        top: calc(0rem - @NavTop-padding-vertical);
        border-top: @border-width solid @color-background;
        pointer-events: none;
    }
}

/*
	Transitions
\*----------------------------------*/

// .NavItem_link {
//     transition: transform @duration-s ease-out;
// }
</style>
