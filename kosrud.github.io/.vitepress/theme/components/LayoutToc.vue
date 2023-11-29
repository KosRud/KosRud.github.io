<script lang="ts" setup>
import type { ComponentPublicInstance } from "vue";

import { useTocItems } from "./composables/Toc/tocItems";
import { useActiveHeadingIdProvider } from "./composables/Toc/activeHeadingId";

import LayoutTocItem from "./LayoutTocItem.vue";

const props = defineProps<{
    pageContent: ComponentPublicInstance | null;
}>();

const tocItems = useTocItems(() => props.pageContent?.$el ?? null);
useActiveHeadingIdProvider(tocItems);
</script>

<template>
    <nav
        :class="$style.Toc"
        v-if="tocItems.length > 0"
    >
        <h2 :class="$style.Toc_title">On this page:</h2>
        <nav :class="$style.Toc_content">
            <ul>
                <LayoutTocItem
                    v-for="tocItem in tocItems"
                    :key="tocItem.element.id"
                    :heading="tocItem"
                />
            </ul>
        </nav>
    </nav>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.Toc {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap;
    color: @color-black-faded;

    // background-color: @color-white;
    // padding: @gap*2;
    // border: @width-s solid @color-border;
    // border-radius: @gap;
    // box-shadow: @shadow-s;
}

.Toc_title {
    flex: 0 0 max-content;
    font-weight: bold;
}

.Toc_content {
    flex: 1 1;
    overflow-y: auto;
}

/*
	Font-size
\*----------------------------------*/

.Toc_title {
    font-size: @size-l;
}
</style>
