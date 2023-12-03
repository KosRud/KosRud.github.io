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
            :class="$style.NavItem_link"
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
    padding-top: @NavItem-padding-vertical;
    padding-bottom: @NavItem-padding-vertical;

    &::before {
        // remove marker from <li>
        content: none;
    }
}

.NavItem_title,
.NavItem_link:link,
.NavItem_link:visited {
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
        .NavItem___hover();
    }
}

.NavItem_linkText {
    .NavItem_linkText();
}
</style>
