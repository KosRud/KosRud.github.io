<script lang="ts" setup>
import { useRoute } from "vitepress";

import { type NavItem } from "../ThemeConfig";
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
@import "../style/mixins/index.less";

.NavItem {
    &::before {
        content: none;
    }

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;

    min-width: 16rem * 9;
    flex: 0 1 auto;
}

.NavItem_link {
    .button();

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
        top: calc(0rem - @HeaderNav-padding-vertical);
        border-top: @border-width solid @color-background;
        pointer-events: none;
    }
}
</style>
