<script setup lang="ts">
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";
</script>

<template>
    <section :class="$style.CardGallery">
        <slot />

        <FeaturesGalleryCard
            dummy
            name=""
            v-for="_ in Array.from({ length: 16 })"
        ></FeaturesGalleryCard>
    </section>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap*4;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
}
</style>
