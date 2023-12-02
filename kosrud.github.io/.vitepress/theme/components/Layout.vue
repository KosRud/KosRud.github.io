<script setup lang="ts">
import { ComponentPublicInstance, getCurrentInstance } from "vue";
import type { ThemeConfig } from "../ThemeConfig";

import { useStore } from "./pinia/store";
import { useData } from "vitepress";

import LayoutOverlay from "./LayoutOverlay.vue";
import LayoutError404 from "./LayoutError404.vue";
import LayoutMainDoc from "./LayoutMainDoc.vue";

import { createPinia } from "pinia";

// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter } = useData<ThemeConfig>();

getCurrentInstance()?.appContext.app.use(createPinia());
const store = useStore();
store.init();
</script>

<template>
    <div :class="$style.Layout">
        <main
            :class="[$style.Main, $style.Main___doc]"
            v-if="page.isNotFound"
        >
            <LayoutError404 />
        </main>
        <LayoutMainDoc
            :class="[$style.Main, $style.Main___doc]"
            v-else-if="!frontmatter.hero"
        />
        <main
            v-else
            :class="[$style.Main, $style.Main___hero]"
        >
            <Content />
        </main>

        <LayoutOverlay />

        <div
            :class="$style.VisibleRectMarker"
            :ref="(element: Element | ComponentPublicInstance | null) => {
			store.visibleRect = element as Element;
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
    position: relative;
    z-index: 0; // establish a stacking context
}

.Main___doc {
    flex-grow: 1;
    margin-top: @Header-height;
    margin-left: @NavSide-width;
    margin-right: @Toc-to-Main-gap + @Toc-width;

    max-width: @content-width + @Toc-to-Main-gap*2; // account for padding

    padding: @Toc-to-Main-gap;
    background-color: @color-white;
    border-right: @width-s solid @color-border;
    border-left: @width-s solid @color-border;

    // box-shadow: @shadow-s;
}

.Main___hero {
    flex-grow: 1;
    margin-top: @Header-height;

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
</style>
