<script setup lang="ts">
import LayoutError404 from "./LayoutError404.vue";
import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";

import type { ComponentPublicInstance } from "vue";
import { useData } from "vitepress";

import { useStore } from "./pinia/store";

import { AdaptiveStage } from "./composables/adaptiveStages";

const store = useStore();
const { page } = useData();
</script>

<template>
    <main
        :class="[
            $style.Main,
            store.adaptiveStage == AdaptiveStage.full
                ? $style.Main___full
                : $style.Main___compact,
        ]"
    >
        <header :class="$style.CurrentLocation">
            <YouAreHere />
        </header>
        <LayoutError404 v-if="page.isNotFound" />

        <MarkdownWrapper
            :class="$style.Markdown"
            v-else
        >
            <Content
                :ref="(component: ComponentPublicInstance | null) => {
					store.pageContent = component;
				}
				"
            />
        </MarkdownWrapper>
    </main>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.CurrentLocation {
    margin-bottom: @gap*2;
}

.Main {
    max-width: @content-width + @Main-padding-horizontal*2; // account for padding

    padding: @Header-to-Content-gap @Main-padding-horizontal;
    background-color: @color-white;

    > * {
        margin-left: auto;
        margin-right: auto;
        max-width: @content-width;
    }
}

.Main___compact {
    max-width: none;
    padding-left: @gap;
    padding-right: @gap;
}

.Main___full {
    margin-left: @NavPages-width;
    margin-right: @Toc-to-Main-gap + @Toc-width;

    border-right: @border-width-s solid @color-border;
    border-left: @border-width-s solid @color-border;
}
</style>
