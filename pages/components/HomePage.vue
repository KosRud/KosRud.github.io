<script setup>
import HomePageFeatures from "./HomePageFeatures.vue";

const features = [
    { name: "Programming languages" },
    { name: "Technologies" },
    { name: "Communication" },
    { name: "Projects" },
];
</script>

<template>
    <div :class="$style.HomePage">
        <section :class="$style.Hero">
            <div :class="$style.SiteNameContainer">
                <h2 :class="$style.SiteNameContainer_title">
                    Kostiantyn Rudenko
                </h2>
                <h3 :class="$style.SiteNameContainer_subtitle">
                    personal website
                </h3>
            </div>
        </section>
        <div :class="$style.ContentWrapper">
            <section :class="$style.ContentWrapper_content">
                <HomePageFeatures :items="features">
                    <template #default="feature">
                        <h2 :class="$style.Feature_title">
                            {{ feature.name }}
                        </h2>
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
                    </template>
                </HomePageFeatures>
            </section>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.HomePage {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.Hero {
    flex-grow: 0;

    background-color: @color-primary-muted;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-compact;

    box-shadow: 0rem 0rem 100rem inset #0004;
}

.SiteNameContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
    line-height: 1.2;
    margin: @gap*8;
}

.SiteNameContainer_title {
    font-weight: bold;
    font-size: @size-hero;
}

.SiteNameContainer_subtitle {
    font-size: @size-hero-s;
}

.ContentWrapper {
    flex-grow: 1;

    padding: @gap*2;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-inverted;
}

.ContentWrapper_content {
    max-width: 1200rem;
}

.Feature_title {
    font-size: @size-l;
    // font-family: @font-compact;
    font-weight: @weight-bold;
    text-align: center;

    margin-bottom: @gap;
}

.Feature_content {
    flex-grow: 1;

    // background-color: red;

    table {
        width: 100%;
    }
}
</style>
