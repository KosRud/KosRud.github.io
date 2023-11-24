<script lang="ts" setup>
import { ComponentPublicInstance, computed, ref } from "vue";

import trackTocItems from "./trackTocItems";
import { trackActiveHeadingId as provideActiveHeadingId } from "./provideActiveHeadingId";

import LayoutTocItem from "./LayoutTocItem.vue";

const props = defineProps<{ pageContent: ComponentPublicInstance | null }>();

const tocItems = trackTocItems(() => props.pageContent);
provideActiveHeadingId(tocItems);
</script>

<template>
    <div :class="$style.Toc">
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
    </div>
</template>

<style lang="less" module>
@import "../../style/variables/index.less";

.Toc {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap;
    color: @color-black-faded;
}

.Toc_title {
    flex-grow: 0;
    font-weight: bold;
}

.Toc_content {
    flex-grow: 1;
    overflow-y: auto;
}
</style>
