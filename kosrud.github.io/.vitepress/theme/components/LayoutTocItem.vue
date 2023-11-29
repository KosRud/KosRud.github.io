<script setup lang="ts">
import type { Ref } from "vue";
import type { TocItem } from "./composables/Toc/tocItems";

import { ref, computed, inject, onUpdated } from "vue";
import { activeHeadingIdSymbol } from "./composables/Toc/activeHeadingId";
import scrollIntoViewIfNeeded from "./composables/scrollIntoViewIfNeeded";

const props = defineProps<{
    heading: TocItem;
    level?: number;
}>();

const level = props.level ?? 1;

const activeHeadingId = inject(activeHeadingIdSymbol);
const isActive = computed(() => {
    return activeHeadingId?.value == props.heading.element.id;
});

const tocItem: Ref<HTMLElement | null> = ref(null);

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
        :ref="(element) => { tocItem = element as HTMLElement }"
    >
        <a
            :class="[
                $style.TocItem_title,
                isActive ? $style.TocItem_title___active : '',
            ]"
            :href="`#${props.heading.element.id}`"
            >{{ props.heading.element.textContent }}
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

.TocItem_title {
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
            .NavItem___hover();
        }
    }
}

.TocItem_title___active {
    // background-color: #00000010;
    border-color: @color-primary;
    font-weight: bold;

    transition: background-color 0.1s;
    transition: border-color 0.1s;
    transition: font-weight 0.1s;
}
</style>
