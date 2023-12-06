<script lang="ts" setup>
import LayoutNavItemText from "./LayoutNavItemText.vue";

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
        :class="[
            $style.NavItem,
            isDarkMode ? $style.Dark : '',
            isOpen ? $style.NavItem___open : '',
        ]"
    >
        <a
            :href="$props.navItem.children ? undefined : props.navItem.url"
            :class="[$style.NavItem_link]"
            @click="isOpen = !isOpen"
        >
            <LayoutNavItemText
                :level="level"
                :class="$style.NavItem_linkText"
                :active="isActive"
            >
                {{ props.navItem.title }}
            </LayoutNavItemText>
        </a>
        <Transition
            :enter-from-class="$style.NavItem_childrenContainer___enterFrom"
            :enter-to-class="$style.NavItem_childrenContainer___enterTo"
            :enter-active-class="$style.NavItem_childrenContainer___enterActive"
            :leave-from-class="$style.NavItem_childrenContainer___leaveFrom"
            :leave-to-class="$style.NavItem_childrenContainer___leaveTo"
            :leave-active-class="$style.NavItem_childrenContainer___leaveActive"
        >
            <ul v-if="isOpen">
                <LayoutNavPagesItem
                    :level="level + 1"
                    :nav-item="child"
                    v-for="child in props.navItem.children"
                />
            </ul>
        </Transition>
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

@chevron-size: @size * 0.7;
@chevron-height-multiplier: 0.57143;
@gap-after-chevron: @gap * 0.75;

@leveled-padding: @chevron-size + @gap-after-chevron;

.NavItem {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &::before {
        // remove marker from <li>
        content: none;
    }
}

.NavItem_link {
    text-decoration: inherit;
    &,
    &:link,
    &:visited {
        color: @color-black-faded;
    }

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: calc(@leveled-padding * v-bind(level));

    @chevron-size: @size * 0.7;
    @chevron-height-multiplier: 0.57143;
    @gap-after-chevron: @gap * 0.75;
    @leveled-gap: @gap*0;

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
}

.NavItem___open .NavItem_link::before {
    transform: rotate(90deg) translateX(25%);
}

.NavItem:not(.NavItem___open) .NavItem_link::before {
    transform: none;
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

/*
	Transitions
\*----------------------------------*/

.NavItem_link::before {
    transition: transform @duration;
}

.NavItem_childrenContainer___enterFrom {
    transform: translateX(@leveled-padding * -1);
    opacity: 0%;
}

.NavItem_childrenContainer___enterTo {
    transform: none;
    opacity: 100%;
}

.NavItem_childrenContainer___enterActive {
    transition: transform @duration,
        opacity @duration-s (@duration - @duration-s);
}

.NavItem_childrenContainer___leaveFrom {
    transform: none;
    opacity: 100%;
}

.NavItem_childrenContainer___leaveTo {
    transform: translateX(@leveled-padding * -1);
    opacity: 0%;
}

.NavItem_childrenContainer___leaveActive {
    transition: transform @duration, opacity @duration-s;
}
</style>
