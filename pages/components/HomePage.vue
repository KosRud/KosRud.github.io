<script setup lang="ts">
import MarkdownWrapperVue from "../../.vitepress/theme/MarkdownWrapper.vue";
import FeaturesGallery from "./FeaturesGallery.vue";

const props = defineProps<{ dummyFeatures?: number }>();
</script>

<template>
    <div :class="$style.HomePage">
        <section :class="$style.Hero">
            <img
                :class="$style.Hero_photo"
                src="/assets/icons/photo/icon.svg"
            />
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
            <section>
                <MarkdownWrapperVue>
                    <div :class="$style.Strict">
                        <slot name="Bio" />
                    </div>
                </MarkdownWrapperVue>
            </section>
            <FeaturesGallery
                :dummies="props.dummyFeatures"
                :card-min-width="'300rem'"
            >
                <slot name="Features"
            /></FeaturesGallery>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";

.Strict {
    font-family: @font-strict;
}

.HomePage {
    height: 100%;
    display: flex;
    flex-direction: column;

    overflow-y: auto;
}

.Hero {
    flex: 0 0 auto;
    position: sticky;
    top: 0rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-hero;

    background-color: @color-primary-muted;
    box-shadow: 0rem 0rem 100rem inset #0004;
}

.Hero_photo {
    height: @gap*10;

    background-color: #bbe;
    border-radius: @gap*0.5;
    box-shadow: @shadow-l;

    padding: @gap*2;
}

.SiteNameContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
    line-height: 1.2;
    margin: @gap*6;
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
    min-height: max-content;

    padding: @gap*4;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-inverted;
    background-color: @color-white;

    text-align: justify;

    & > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 1200rem;
        height: max-content;
        margin-bottom: @gap*4;
    }
}

/*
	Z-index
\*----------------------------------*/

.ContentWrapper {
    z-index: 1;
}
</style>
