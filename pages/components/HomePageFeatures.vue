<script setup lang="ts">
import FeaturesGallery from "./FeaturesGallery.vue";
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";
</script>

<template>
    <FeaturesGallery :dummies="8">
        <FeaturesGalleryCard
            name="Programming languages"
            :icon-url="'/assets/icons/programming/icon.svg'"
        >
            <div :class="$style.Feature_content">
                C#, HLSL, TypeScript, Python, Cython, C++
            </div>
        </FeaturesGalleryCard>
        <FeaturesGalleryCard
            name="Communication"
            :icon-url="'/assets/icons/communication/icon.svg'"
        >
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>English</td>
                            <td>C1 (Advanced)</td>
                        </tr>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                        <tr>
                            <td>Russian</td>
                            <td>native</td>
                        </tr>
                        <tr>
                            <td>Slovak</td>
                            <td>basic</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGalleryCard>
        <FeaturesGalleryCard
            name="Technologies"
            :icon-url="'/assets/icons/software/icon.svg'"
        >
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Game engine</td>
                            <td>Unity</td>
                        </tr>
                        <tr>
                            <td>Frontend</td>
                            <td>React, Vue</td>
                        </tr>
                        <tr>
                            <td>Backend</td>
                            <td>Node, Fastify</td>
                        </tr>
                        <tr>
                            <td>Documentation</td>
                            <td>Doxygen, TypeDoc</td>
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
        <FeaturesGalleryCard name="Education">
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
        <FeaturesGalleryCard name="Experience">
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

    table {
        margin-left: auto;
        margin-right: auto;

        td {
            &:nth-child(1) {
                font-weight: @weight-bold;
                text-align: right;
            }

            &:not(:last-child) {
                border-right: @gap*2 solid transparent;
            }
        }
    }
}
</style>
