<script setup lang="ts">
import FeaturesGallery from "./FeaturesGallery.vue";
import FeaturesGallery_Card from "./FeaturesGallery_Card.vue";
</script>

<template>
    <FeaturesGallery
        :dummies="8"
        :card-min-width="'300rem'"
    >
        <FeaturesGallery_Card
            name="Programming languages"
            :icon-url="'/assets/icons/programming/icon.svg'"
        >
            <div :class="$style.Feature_content">
                C#, HLSL, TypeScript, Python, Cython, C++
            </div>
        </FeaturesGallery_Card>
        <FeaturesGallery_Card
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
        </FeaturesGallery_Card>
        <FeaturesGallery_Card
            name="Technologies"
            :icon-url="'/assets/icons/gears/icon.svg'"
        >
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>Game engine</td>
                            <td>Unity</td>
                        </tr>
                        <tr>
                            <td>3D modeling</td>
                            <td>Blender</td>
                        </tr>
                        <tr>
                            <td>Frontend</td>
                            <td>Vue, React</td>
                        </tr>
                        <tr>
                            <td>Backend</td>
                            <td>Fastify (Node.js)</td>
                        </tr>
                        <tr>
                            <td>Documentation</td>
                            <td>Doxygen, TypeDoc</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGallery_Card>

        <FeaturesGallery_Card
            name="Education"
            :icon-url="'/assets/icons/education/icon.svg'"
        >
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
        </FeaturesGallery_Card>
        <FeaturesGallery_Card
            name="Experience"
            :icon-url="'/assets/icons/job/icon.svg'"
        >
            <div :class="$style.Feature_content">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                .NET (C#, C++) developer<br />for
                                <a href="https://risa.com/">RISA Tech, Inc.</a>
                            </td>
                            <td>1 year</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </FeaturesGallery_Card>
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
                font-weight: bold;
                text-align: right;
            }

            &:not(:last-child) {
                border-right: @gap*2 solid transparent;
            }
        }
    }

    h2 {
        font-weight: bold;
    }
}
</style>
