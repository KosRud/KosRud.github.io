<script lang="ts" setup>
import { computed } from "vue";

import type { NavItem } from "../ThemeConfig";
import { useIsNavItemOpen, useIsNavItemActive } from "./composables/navItem";
import { useDarkModeDetect } from "./composables/darkMode";

const props = defineProps<{ navItem: NavItem; level?: number }>();

const level = computed(() => props.level ?? 0);
const isOpen = useIsNavItemOpen(props.navItem.url);
const isActive = useIsNavItemActive(props.navItem.url);
const isDarkMode = useDarkModeDetect();

const chevronDisplay = props.navItem.children ? "block" : "none";
</script>

<template>
    <li
        :level="level"
        :class="[$style.NavItem, isDarkMode ? $style.Dark : '']"
    >
        <a
            :href="$props.navItem.children ? undefined : props.navItem.url"
            :class="[
                $style.NavItem_link,
                isActive ? $style.NavItem_link___active : '',
            ]"
            @click="isOpen = !isOpen"
        >
            <div :class="$style.NavItem_linkText">
                {{ props.navItem.title }}
            </div>
        </a>
        <ul v-if="isOpen">
            <LayoutNavSideItem
                :level="level + 1"
                :nav-item="child"
                v-for="child in props.navItem.children"
            />
        </ul>
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.NavItem {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &::before {
        // remove marker from <li>
        content: none;
    }
}

.NavItem {
    &[level="0"] .NavItem_linkText {
        &,
        &:link,
        &:visited {
            font-size: @size-l;
        }
    }

    &[level="1"] .NavItem_linkText {
        &,
        &:link,
        &:visited {
            font-size: @size;
        }
    }

    &[level="2"] .NavItem_linkText {
        &,
        &:link,
        &:visited {
            font-size: @size-s;
        }
    }
}

.NavItem_link {
    &,
    &:link,
    &:visited {
        color: @color-black-faded;
        text-decoration: inherit;
    }

    display: flex;
    flex-direction: row;
    align-items: center;

    @chevron-size: @size * 0.7;
    @chevron-height-multiplier: 0.57143;
    @gap-after-chevron: @gap * 0.75;
    @leveled-gap: @gap*0;

    padding-left: calc(
        calc(@chevron-size + @gap-after-chevron + @leveled-gap) * v-bind(level)
    );

    &::before {
        content: "";
        height: @chevron-size;
        width: @chevron-size;
        margin-bottom: 0.1em; // align nicely with the font Iosevka Aile
        background-image: url("/assets/icons/chevron/right.svg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: contain;
        margin-right: calc(@gap-after-chevron - 0.1em);
        margin-left: 0.1em;
        display: v-bind(chevronDisplay);
        vertical-align: top;
    }

    &:hover {
        .NavItem___hover();
    }
}

.NavItem_link___active {
    &,
    &:link,
    &:visited {
        color: @color-black;
    }
    font-weight: bold;
}

.NavItem_linkText {
    .NavItem_linkText();
}

/*
	Dark Mode
\*----------------------------------*/

.Dark {
    .NavItem_link {
        &::before {
            filter: invert();
            opacity: 0.7;
        }
    }
}
</style>
