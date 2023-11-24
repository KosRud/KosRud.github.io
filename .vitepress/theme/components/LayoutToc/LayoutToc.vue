<script lang="ts" setup>
import { ComponentPublicInstance, computed, ref } from "vue";

import trackTocItems from "./trackTocItems";
import { trackActiveHeadingId } from "./trackActiveHeadingId";

import LayoutTocItem from "./LayoutTocItem.vue";

const props = defineProps<{ pageContent: ComponentPublicInstance | null }>();

const tocItems = trackTocItems(props.pageContent);
const activeHeadingId = trackActiveHeadingId(tocItems);
</script>

<template>
    {{ tocItems }}
    <div :class="$style.Toc">
        <h2 :class="$style.Toc_title">On this page</h2>
        <nav :class="$style.Toc_content">
            <ul>
                <LayoutTocItem
                    v-for="tocItem in tocItems"
                    :key="tocItem.element.id"
                    :heading="tocItem"
                    :active="activeHeadingId == tocItem.element.id"
                />
            </ul>
            <!-- <pre>{{ JSON.stringify(tocContent, null, 2) }}</pre> -->
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
