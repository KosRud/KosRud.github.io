<script setup lang="ts">
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";

import { defineProps } from "vue";

const props = defineProps<{
    dummies?: number;
    cardMinWidth?: string;
}>();
</script>

<template>
    <section :class="$style.CardGallery">
        <slot />

        <FeaturesGalleryCard
            dummy
            name=""
            v-for="_ in Array.from({ length: props.dummies ?? 0 })"
        ></FeaturesGalleryCard>
    </section>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap*2;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
}
</style>
