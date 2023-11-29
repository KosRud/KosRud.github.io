<script lang="ts" setup>
import { computed } from "vue";

import type { NavItem } from "../ThemeConfig";
import { useIsTocItemOpen } from "./composables/isTocItemOpen";

const props = defineProps<{ navItem: NavItem; level?: number }>();

const level = computed(() => props.level ?? 0);
const isOpen = useIsTocItemOpen(props.navItem.url);
</script>

<template>
    <li :class="$style.NavItem">
        <a
            :href="props.navItem.url"
            :class="$style.NavItem_title"
            >{{ props.navItem.title }}</a
        >
        <ul v-if="isOpen">
            <LayoutSideNavItem
                :level="level + 1"
                :nav-item="child"
                v-for="child in props.navItem.children"
            />
            <template v-if="level < 2">
                <LayoutSideNavItem
                    :level="level + 1"
                    :nav-item="{
                        title: 'Some page',
                        url: '#',
                        children: [],
                    }"
                    v-for="_ in 5"
                />
            </template>
        </ul>
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavItem {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: @NavItem-padding-vertical;
    padding-bottom: @NavItem-padding-vertical;

    &::before {
        // remove marker from <li>
        content: none;
    }
}

.NavItem_title,
.NavItem_title:link,
.NavItem_title:visited {
    color: @color-black;
    text-decoration: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: calc(@gap * v-bind(level));

    &::before {
        content: "";
        height: 1em;
        width: 1em;
        background-image: url("/assets/icons/chevron-right.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: @gap*0.25;
        // visibility: hidden;
    }

    &:hover {
        color: @color-primary;
        font-weight: bold;
    }
}
</style>
