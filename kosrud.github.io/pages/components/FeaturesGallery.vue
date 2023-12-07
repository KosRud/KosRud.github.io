<script setup lang="ts">
import FeaturesGallery_Card from "./FeaturesGallery_Card.vue";

const props = defineProps<{
    dummies?: number;
    cardMinWidth?: string;
}>();
</script>

<template>
    <!-- surrounding div is necessary to ensure negative margins work properly -->
    <div>
        <div :class="$style.FeaturesGallery">
            <slot />
            <FeaturesGallery_Card
                dummy
                name=""
                :class="$style.FeaturesGallery_dummy"
                v-for="_ in Array.from({ length: props.dummies ?? 0 })"
            ></FeaturesGallery_Card>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";

@CardGalleryGap: @gap*2;

.FeaturesGallery {
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

.FeaturesGallery_dummy {
    margin-top: @CardGalleryGap*-0.5;
}
</style>
