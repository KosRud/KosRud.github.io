<script setup lang="ts">
import type { Ref } from "vue";
import type { TocItem } from "./composables/Toc/tocItems";

import { ref, computed, onUpdated } from "vue";
import { useStore } from "./pinia/store";

import scrollIntoViewIfNeeded from "./composables/scrollIntoViewIfNeeded";

const props = defineProps<{
    heading: TocItem;
    level?: number;
}>();

const level = props.level ?? 1;

const isActive = computed(() => {
    const store = useStore();
    return store.activeHeadingId == props.heading.element.id;
});

const tocItem: Ref<Element | null> = ref(null);

onUpdated(() => {
    if (isActive.value) {
        const element = tocItem.value;
        if (!element) {
            return;
        }
        scrollIntoViewIfNeeded(element);
    }
});
</script>

<template>
    <li
        :class="$style.TocItem"
        :ref="(element) => { tocItem = element as Element }"
    >
        <a
            :class="[
                $style.TocItem_link,
                isActive ? $style.TocItem_link___active : '',
            ]"
            :href="`#${props.heading.element.id}`"
        >
            <div :class="$style.TocItem_linkText">
                {{ props.heading.element.textContent }}
            </div>
        </a>
        <ul v-if="props.heading.children.length != 0">
            <LayoutTocItem
                v-for="child in props.heading.children"
                :heading="child"
                :level="level + 1"
            />
        </ul>
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.TocItem {
    display: flex;
    flex-direction: column;

    &::before {
        display: none;
    }
}

.TocItem_link {
    width: 100%;

    border-left: @width solid @color-border;
    padding-left: calc(@gap * v-bind(level));

    padding-top: @NavItem-padding-vertical;
    padding-bottom: @NavItem-padding-vertical;
    padding-right: @gap;

    &:link,
    &:visited {
        color: inherit;
        text-decoration: none;

        &:hover {
            color: @color-primary;

            &:not(.TocItem_link___active) {
                .NavItem___hover();
            }
        }
    }
}

.TocItem_linkText {
    .NavItem_linkText();
}

.TocItem_link___active {
    // background-color: #00000010;
    border-color: @color-primary;
    font-weight: bold;

    transition: background-color 0.1s;
    transition: border-color 0.1s;
    transition: font-weight 0.1s;
}
</style>
