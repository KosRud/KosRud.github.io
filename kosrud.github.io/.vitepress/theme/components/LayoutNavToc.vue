<script lang="ts" setup>
import { useData } from "vitepress";
import { useStore } from "./pinia/store";
import { onMounted, ref } from "vue";

import LayoutNavTocItem from "./LayoutNavTocItem.vue";

const props = defineProps<{ isMobile?: boolean }>();
const emit = defineEmits(["jumpedToItem"]);

const store = useStore();
const { page } = useData();

const isLoaded = ref(false);

onMounted(() => {
    isLoaded.value = true;
});
</script>

<template>
    <div :class="$style.TocWrapper">
        <nav :class="[$style.Toc, props.isMobile ? $style.Toc___mobile : '']">
            <template v-if="store.tocItems.length > 0 && !page.isNotFound">
                <h2 :class="$style.Toc_title">On this page:</h2>
                <nav :class="$style.Toc_content">
                    <ul :class="$style.Toc_itemList">
                        <LayoutNavTocItem
                            v-for="tocItem in store.tocItems"
                            :key="tocItem.element.id"
                            :heading="tocItem"
                            @jumpedToItem="emit('jumpedToItem')"
                            :isTocLoaded="isLoaded"
                        />
                    </ul>
                </nav>
            </template>
        </nav>
    </div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.TocWrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.Toc {
    flex: 1 1 @Aside-width;
    max-width: @Aside-max-width;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap;

    padding-left: @Aside-padding-horizontal;
    padding-right: @Aside-padding-horizontal;
    padding-bottom: @Aside-padding-bottom;
    padding-top: @Aside-padding-top;
}

.Toc_title {
    flex: 0 0 max-content;
    font-weight: bold;
}

.Toc___mobile .Toc_title {
    text-align: center;
}

.Toc_content {
    flex: 1 1;
    overflow-y: auto;
}

.Toc_itemList {
    // align the first item
    // with the first item of navigation panel on the left

    padding-top: .NavItem_text(1) [padding-top] - .NavItem_text___compact()
        [padding-top];

    padding-bottom: @Aside-padding-bottom;
}
/*
	Font-size
\*----------------------------------*/

.Toc_title {
    font-size: @size-l;
}
</style>
