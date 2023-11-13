<script setup lang="ts">
import FeaturesGallery from "./FeaturesGallery.vue";
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";
</script>

<template>
    <FeaturesGallery>
        <FeaturesGalleryCard name="Programming languages">
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGalleryCard>
        <FeaturesGalleryCard name="Technologies">
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGalleryCard>
        <FeaturesGalleryCard name="Communication">
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGalleryCard>
        <FeaturesGalleryCard name="Projects">
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGalleryCard>
    </FeaturesGallery>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.Feature_content {
    flex-grow: 1;

    // background-color: red;

    table {
        width: 100%;
    }
}
</style>
