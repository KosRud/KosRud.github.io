<script setup lang="ts">
import FeaturesGallery from "./FeaturesGallery.vue";
import FeaturesGalleryCard from "./FeaturesGalleryCard.vue";
</script>

<template>
    <FeaturesGallery
        :dummies="8"
        :card-min-width="'300rem'"
    >
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
        </FeaturesGalleryCard>

        <FeaturesGalleryCard
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
        </FeaturesGalleryCard>
        <FeaturesGalleryCard
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
        </FeaturesGalleryCard>
        <FeaturesGalleryCard
            name="Published papers"
            :icon-url="'/assets/icons/paper/icon.svg'"
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
        </FeaturesGalleryCard>
    </FeaturesGallery>

    <h2 style="text-align: center; font-weight: bold; font-size: 200%">
        Projects
    </h2>

    <section :class="$style.Feature_content">
        <article :class="$style.Project">
            <h2 :class="$style.Project_title">
                <div :style="$style.Project_titleText">ProTeGe v1</div>
                <section :class="$style.Project_devIcons">
                    <img
                        src="/assets/icons/dev/cpp/icon.svg"
                        alt="c++"
                        title="c++"
                        :class="$style.DevIcon"
                    />
                    <img
                        src="/assets/icons/dev/wxWidgets/icon.svg"
                        alt="wxWidgets"
                        title="wxWidgets"
                        :class="$style.DevIcon"
                    />
                </section>
            </h2>
            <p>Procedural texture generator.</p>
        </article>
        <article :class="$style.Project">
            <h2 :class="$style.Project_title">
                <div :style="$style.Project_titleText">ProTeGe v2</div>
                <section :class="$style.Project_devIcons">
                    <img
                        src="/assets/icons/dev/unity/icon.svg"
                        alt="unity"
                        title="unity"
                        :class="$style.DevIcon"
                        style="transform: scale(1.2)"
                    />
                    <img
                        src="/assets/icons/dev/csharp/icon.svg"
                        alt="csharp"
                        title="csharp"
                        :class="$style.DevIcon"
                    /><img
                        src="/assets/icons/dev/hlsl/icon.svg"
                        alt="csharp"
                        title="csharp"
                        :class="$style.DevIcon"
                    />
                </section>
            </h2>
            <p>
                Procedural texture generator with graph-based UI and real-time
                preview.<br />
            </p>
        </article>
        <article :class="$style.Project">
            <h2 :class="$style.Project_title">
                <div :style="$style.Project_titleText">
                    DQ Skinning for Unity
                </div>
                <section :class="$style.Project_devIcons">
                    <img
                        src="/assets/icons/dev/unity/icon.svg"
                        alt="unity"
                        title="unity"
                        :class="$style.DevIcon"
                        style="transform: scale(1.2)"
                    />
                    <img
                        src="/assets/icons/dev/csharp/icon.svg"
                        alt="csharp"
                        title="csharp"
                        :class="$style.DevIcon"
                    /><img
                        src="/assets/icons/dev/hlsl/icon.svg"
                        alt="csharp"
                        title="csharp"
                        :class="$style.DevIcon"
                    />
                </section>
            </h2>
            <p>
                Implementation of GPU dual quaternion skinning for Unity with a
                novel bulging compensation algorithm and blend shape support.<br />
            </p>
        </article>

        <h2>dice&#8209;pool&#8209;calc</h2>
        <p>Calculate probabilities of arbitrary dice pools efficiently</p>

        <h2>Material clustering benchmark</h2>
        <p>...</p>
    </section>
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

    h2 {
        font-weight: bold;
    }
}

.Project {
    .Project_title {
        display: flex;
        gap: @gap*2;
        align-items: center;
        flex-wrap: wrap;
    }

    .Project_devIcons {
        display: flex;
        gap: @gap*0.5;
    }
}

.DevIcon {
    width: @size*2;
    aspect-ratio: 1;
    vertical-align: bottom;
}
</style>
