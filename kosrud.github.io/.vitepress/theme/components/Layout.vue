<script setup lang="ts">
import LayoutOverlay from "./LayoutOverlay.vue";
import LayoutMainDoc from "./LayoutMainDoc.vue";

import { useStoreService } from "./pinia/store";
import { ComponentPublicInstance, getCurrentInstance, ref, Ref } from "vue";
import { useData } from "vitepress";
import { createPinia } from "pinia";

import { ThemeConfig } from "../ThemeConfig";
import { useDarkModeEnforce } from "./composables/darkMode";
import {
    useAdaptivePreference,
    AdaptiveStage,
} from "./composables/adaptiveStages";
import { pxToRem } from "./composables/unitConverter";
import { useResizeObserver } from "./composables/resizeObserver";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData<ThemeConfig>();

getCurrentInstance()?.appContext.app.use(createPinia());
const store = useStoreService();
const adaptivePreference = useAdaptivePreference();
const adaptiveThresholdRem = 1200;

const containerElement: Ref<Element | null> = ref(null);

useDarkModeEnforce(false);

useResizeObserver(
    () => {
        if (!containerElement.value) {
            console.error("Layout container element ref not set");
            return;
        }

        const width = containerElement.value.clientWidth;

        adaptivePreference.value.requestedStage =
            pxToRem(width) >= adaptiveThresholdRem
                ? AdaptiveStage.full
                : AdaptiveStage.compact;
    },
    () => document.querySelector("html"),
    true
);
</script>

<template>
    <div
        :class="$style.Layout"
        :ref="(element) => {containerElement = element as HTMLElement}"
    >
        <LayoutOverlay :class="$style.Overlay" />

        <LayoutMainDoc
            :class="[
                $style.Main,
                $style.Main___doc,
                store.isMobileNavAnythingOpen
                    ? $style.Main___nonInteractive
                    : '',
            ]"
            v-if="!frontmatter.hero"
        />
        <main
            v-else
            :class="[
                $style.Main,
                $style.Main___hero,
                store.isMobileNavAnythingOpen
                    ? $style.Main___nonInteractive
                    : '',
            ]"
        >
            <Content />
        </main>

        <div
            aria-hidden="true"
            :class="$style.VisibleRectMarker"
            :ref="(element: Element | ComponentPublicInstance | null) => {
			store.VisibleAreaMarker = element as Element;
		}
			"
        ></div>
    </div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.VisibleRectMarker {
    pointer-events: none;
    position: fixed;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
    top: @Header-height;
}

.Layout {
    width: 100%;
    min-height: 100%;
    background-color: @color-background;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}

.Main {
    margin-top: @Header-height;
}

.Main___doc {
    flex-grow: 1;
}

.Main___hero {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: stretch;

    // vitepress <Content> creates 2 divs
    > div,
    > div > div {
        flex-grow: 1;
        display: flex;
        justify-content: stretch;
    }
}

/*
	Pointer behavior
\*----------------------------------*/

.Main___nonInteractive {
    pointer-events: none;
}

/*
	Z-index
\*----------------------------------*/

.Layout {
    // establish a stacking context
    position: relative;
    z-index: 0;
}

.Overlay {
    // establish a stacking context
    position: fixed;
    z-index: 1;
}

.Main {
    // establish a stacking context
    position: relative;
    z-index: 0;
}
</style>
