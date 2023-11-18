<script setup lang="ts">
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";

import { defineProps } from "vue";

const props = defineProps<{
    dummies?: number;
    cardMinWidth?: string;
}>();
</script>

<template>
    <div>
        <section :class="$style.CardGallery">
            <slot />
            <FeaturesGalleryCard
                dummy
                name=""
                :class="$style.CardGallery_dummy"
                v-for="_ in Array.from({ length: props.dummies ?? 0 })"
            ></FeaturesGalleryCard>
        </section>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

@CardGalleryGap: @gap*2;

.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: stretch;
    width: calc(100% + @CardGalleryGap);

    > * {
        margin: @CardGalleryGap*0.5;
    }

    margin: @CardGalleryGap*-0.5;
}

.CardGallery_dummy {
    margin-top: @CardGalleryGap*-0.5;
}
</style>
