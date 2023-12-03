<script lang="ts" setup>
import LayoutToc from "./LayoutToc.vue";
import LayoutNavSide from "./LayoutNavSide.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutNavFull from "./LayoutNavFull.vue";

import { useData } from "vitepress";
import { useStore } from "./pinia/store";

import type { ThemeConfig } from "../ThemeConfig";
import { AdaptiveStage } from "./composables/adaptiveStages";

// https://vitepress.dev/reference/runtime-api#usedata
const frontmatter = useData<ThemeConfig>().frontmatter;

const store = useStore();
</script>

<template>
    <div :class="$style.Overlay">
        <LayoutHeader :class="$style.Header" />
        <div
            :class="$style.NavContainer"
            v-if="!frontmatter.hero"
        >
            <LayoutNavSide
                :class="$style.NavSide"
                v-if="store.adaptiveStage == AdaptiveStage.full"
            />
            <div :class="$style.NavContainer_spacer"></div>
            <LayoutToc
                :class="$style.Toc"
                v-if="store.adaptiveStage == AdaptiveStage.full"
            />
            <LayoutNavFull :class="$style.NavFull" />
        </div>
    </div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

/*
	Z-index
\*----------------------------------*/

.Overlay {
    // establish a stacking context
    position: fixed;
    z-index: 0;
}

.Header {
    z-index: 1;
}

.NavContainer {
    z-index: 0;
}

/*
	Main section
\*----------------------------------*/

.Overlay {
    position: fixed;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;

    display: flex;
    flex-direction: column;
}

.NavContainer {
    flex-grow: 1;
    display: flex;

    position: relative; // for NavFull
}

.Header {
    flex: 0 0 @Header-height;
}

.NavSide {
    flex-shrink: 0;
}

.NavContainer_spacer {
    width: @content-width + @Main-width + @Toc-to-Main-gap;
}

.Toc {
    position: sticky;
    top: 0rem;
    flex: 1 0 @Toc-width;
    max-width: max-content;

    padding: @Toc-to-Main-gap @gap;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;
}

.NavFull {
    position: absolute;

    top: 0rem;
    bottom: 0rem;
    right: 0rem;
    width: 100%;
}

/*
	Pointer-events
\*----------------------------------*/

.Overlay {
    pointer-events: none;
}

.Toc,
.NavSide,
.NavFull,
.Header {
    pointer-events: auto;
}
</style>
