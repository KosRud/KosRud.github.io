<script lang="ts" setup>
import type { Ref } from "vue";

import { watch, ref, onMounted, computed } from "vue";
import { useData } from "vitepress";
import { useStore } from "./pinia/store";

import {
    AdaptivePreference,
    AdaptiveStage,
    useAdaptivePreference,
} from "./composables/adaptiveStages";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

const store = useStore();

import LayoutHeaderNavItem from "./LayoutHeaderNavItem.vue";

const itemList: Ref<Element | null> = ref(null);
const adaptivePreference = useAdaptivePreference();
setupAdaptivePreference(adaptivePreference);

const visibility = computed(() => {
    return store.adaptiveStage == AdaptiveStage.full ? "visible" : "hidden";
});

function setupAdaptivePreference(adaptivePreference: Ref<AdaptivePreference>) {
    function updateAdaptivePreference() {
        adaptivePreference.value.requestedStage = getAdaptivePreference();
    }

    watch(store.viewportSize, updateAdaptivePreference);
    onMounted(updateAdaptivePreference);
}

function getAdaptivePreference() {
    if (!itemList.value) {
        console.error("Top navigation bar item list not found.");
        return AdaptiveStage.full;
    }

    const lastItem = itemList.value.lastElementChild;
    if (!lastItem) {
        console.warn("Top navigation bar has no items.");
        return AdaptiveStage.full;
    }

    if (
        lastItem.getBoundingClientRect().right >
        itemList.value.getBoundingClientRect().right
    ) {
        return AdaptiveStage.compact;
    }

    return AdaptiveStage.full;
}
</script>

<template>
    <nav :class="$style.NavTop">
        <ul
            :ref="
                (element) => {
                    itemList = element as Element;
                }
            "
        >
            <LayoutHeaderNavItem
                :nav-item="navItem"
                v-for="navItem in site.themeConfig.nav"
            />
        </ul>
    </nav>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.NavTop {
    > ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: @gap;
        padding-top: @NavTop-padding-vertical;
        padding-bottom: @NavTop-padding-vertical;
    }
    visibility: v-bind(visibility);
}
</style>
