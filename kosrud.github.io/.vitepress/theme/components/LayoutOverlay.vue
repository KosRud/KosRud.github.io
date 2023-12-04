<script lang="ts" setup>
import LayoutToc from "./LayoutToc.vue";
import LayoutNavSide from "./LayoutNavSide.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutNavMobile from "./LayoutNavMobile.vue";

import { useData } from "vitepress";
import { useStore } from "./pinia/store";

import type { ThemeConfig } from "../ThemeConfig";
import { AdaptiveStage } from "./composables/adaptiveStages";

// https://vitepress.dev/reference/runtime-api#usedata
const frontmatter = useData<ThemeConfig>().frontmatter;

const store = useStore();
</script>

<template>
    <div
        :class="[
            $style.Overlay,
            store.isNavMobileOpen ? $style.Overlay___shaded : '',
        ]"
    >
        <LayoutHeader :class="$style.Header" />
        <div
            :class="$style.NavContainer"
            v-if="!frontmatter.hero"
        >
            <LayoutNavSide
                :class="$style.NavSide"
                v-if="store.adaptiveStage == AdaptiveStage.full"
            />
            <div :class="$style.Overlay_spacer"></div>
            <LayoutToc
                :class="$style.Toc"
                v-if="store.adaptiveStage == AdaptiveStage.full"
            />
            <LayoutNavMobile :class="$style.NavMobile" />
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

.Overlay_spacer {
    flex: 0 1 @Main-padding-horizontal * 2 + @content-width + @Toc-to-Main-gap;
}

.Overlay___shaded {
    background-color: mix(@color-black, transparent, 70%);
    // backdrop-filter: blur(2px);
}

.NavContainer {
    flex-grow: 1;
    display: flex;
    justify-content: stretch;

    position: relative; // for NavMobile
}

.Header {
    flex: 0 0 @Header-height;
}

.NavSide {
    width: @NavSide-width;
}

.Toc {
    position: sticky;
    top: 0rem;
    width: @Toc-width;

    padding: @Toc-to-Main-gap @gap;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;
}

.NavMobile {
    position: absolute;

    top: 0rem;
    bottom: 0rem;
    right: 0rem;
    width: 100%;
}

/*
	Transitions
\*----------------------------------*/

.Overlay {
    transition: background-color @duration-s;
}

/*
	Pointer behavior
\*----------------------------------*/

.Overlay {
    pointer-events: none;

    a,
    a:link,
    a:visited {
        user-select: none;
        cursor: pointer;
    }
}

.Toc,
.NavSide,
.NavMobile,
.Header {
    pointer-events: auto;
}
</style>
