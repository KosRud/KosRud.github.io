<script lang="ts" setup>
import type { Ref } from "vue";

import { watch, inject, ref, onMounted, computed } from "vue";
import { useData } from "vitepress";

import {
    useAdaptivePreference,
    AdaptivePreference,
    AdaptiveStage,
    useAdaptiveStage,
} from "./composables/adaptiveStages";

import { symbolViewportSize } from "./composables/viewportSize";

import type { ThemeConfig } from "../ThemeConfig";

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

import LayoutNavTopItem from "./LayoutNavTopItem.vue";

const itemList: Ref<Element | null> = ref(null);
const adaptivePreference = useAdaptivePreference();
setupAdaptivePreference(adaptivePreference);

const adaptiveStage = useAdaptiveStage();
const visibility = computed(() => {
    return adaptiveStage.value == AdaptiveStage.full ? "visible" : "hidden";
});

function setupAdaptivePreference(adaptivePreference: Ref<AdaptivePreference>) {
    const viewportSize = inject(symbolViewportSize);
    if (!viewportSize) {
        console.error("ViewportSize is nullish");
        return;
    }

    function updateAdaptivePreference() {
        adaptivePreference.value.requestedStage = getAdaptivePreference();
    }

    watch(viewportSize, updateAdaptivePreference);
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
        return AdaptiveStage.collapsed;
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
            <LayoutNavTopItem
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
        padding-top: @NavTop-gap-vertical;
        padding-bottom: @NavTop-gap-vertical;
    }
    visibility: v-bind(visibility);
}
</style>
