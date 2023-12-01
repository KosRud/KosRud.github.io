<script lang="ts" setup>
import { inject, type ComponentPublicInstance } from "vue";

import LayoutToc from "./LayoutToc.vue";
import LayoutNavSide from "./LayoutNavSide.vue";
import LayoutHeader from "./LayoutHeader.vue";

import { useData } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";
import {
    AdaptiveStage,
    symbolAdaptiveStage,
} from "./composables/adaptiveStages";

// https://vitepress.dev/reference/runtime-api#usedata
const frontmatter = useData<ThemeConfig>().frontmatter;

const props = defineProps<{
    pageContent: ComponentPublicInstance | null;
}>();

const adaptiveStage = inject(symbolAdaptiveStage);
</script>

<template>
    <div :class="$style.Overlay">
        <LayoutHeader :class="$style.Header" />
        <div
            :class="$style.NavContainer"
            v-if="!frontmatter.hero && adaptiveStage == AdaptiveStage.full"
        >
            <LayoutNavSide :class="$style.NavSide" />
            <div :class="$style.NavContainer_spacer"></div>
            <LayoutToc
                :class="$style.Toc"
                :page-content="props.pageContent"
            />
        </div>
    </div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.Header {
    flex: 0 0 @Header-height;
}

.NavSide {
    flex-shrink: 0;
}

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
}

.NavContainer_spacer {
    width: @content-width + @Toc-to-Main-gap*3;
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

/*
	Pointer-events
\*----------------------------------*/

.Overlay {
    pointer-events: none;
}

.Toc,
.NavSide,
.Header {
    pointer-events: auto;
}
</style>
