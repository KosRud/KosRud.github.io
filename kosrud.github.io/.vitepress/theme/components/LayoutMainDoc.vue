<script setup lang="ts">
import type { ComponentPublicInstance } from "vue";

import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";

import { useStore } from "./pinia/store";

const store = useStore();
</script>

<template>
    <main :class="$style.Main___doc">
        <header :class="$style.CurrentLocation">
            <YouAreHere />
        </header>
        <MarkdownWrapper>
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
</style>
