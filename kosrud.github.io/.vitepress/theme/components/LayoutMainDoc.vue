<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

import { useStore } from "./pinia/store";

import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";

import { AdaptiveStage } from "./composables/adaptiveStages";

const store = useStore();
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
        <MarkdownWrapper :class="$style.Markdown">
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

    padding: @Toc-to-Main-gap @Main-padding-horizontal;
    background-color: @color-white;

    > * {
        margin-left: auto;
        margin-right: auto;
        max-width: @content-width;
    }
}

.Main___compact {
    max-width: none;
}

.Main___full {
    margin-left: @NavSide-width;
    margin-right: @Toc-to-Main-gap + @Toc-width;

    border-right: @border-width-s solid @color-border;
    border-left: @border-width-s solid @color-border;
}
</style>
