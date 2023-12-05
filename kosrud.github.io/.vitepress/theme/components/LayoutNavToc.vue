<script lang="ts" setup>
import { useData } from "vitepress";
import { useStore } from "./pinia/store";

const { page } = useData();

import LayoutNavTocItem from "./LayoutNavTocItem.vue";

const store = useStore();
</script>

<template>
    <nav :class="$style.Toc">
        <template v-if="store.tocItems.length > 0 && !page.isNotFound">
            <h2 :class="$style.Toc_title">On this page:</h2>
            <nav :class="$style.Toc_content">
                <ul :class="$style.Toc_itemList">
                    <LayoutNavTocItem
                        v-for="tocItem in store.tocItems"
                        :key="tocItem.element.id"
                        :heading="tocItem"
                    />
                </ul>
            </nav>
        </template>
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

    // background-color: @color-white;
    // padding: @gap*2;
    // border: @border-width-s solid @color-border;
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
