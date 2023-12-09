<script setup lang="ts">
import type { Ref, ComponentPublicInstance } from "vue";

import { computed, onMounted, onUnmounted, ref } from "vue";

import MarkdownWrapperVue from "../../.vitepress/theme/components/MarkdownWrapper.vue";
import FeaturesGallery from "./FeaturesGallery.vue";

const props = defineProps<{ dummyFeatures?: number }>();

const hero: Ref<Element | null> = ref(null);

const scrollY = ref(0);
const heroBrightness = computed(() => {
    if (!hero.value) {
        return 1;
    }

    return Math.max(1 - (scrollY.value / hero.value.clientHeight) * 0.5, 0);
});

function onScroll() {
    scrollY.value = window.scrollY;
}

onMounted(() => {
    document.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => {
    document.removeEventListener("scroll", onScroll);
});
</script>

<template>
    <div :class="$style.HomePage">
        <section
            :ref="(element: Element | ComponentPublicInstance | null) => {
			hero = element as Element;
		}"
            :class="$style.Hero"
        >
            <img
                :class="$style.Hero_photo"
                src="/assets/photo.png"
            />
            <div :class="$style.Hero_titleContainer">
                <h2 :class="$style.Hero_title">Kostiantyn Rudenko</h2>
                <h3 :class="$style.Hero_subtitle">software engineer</h3>
            </div>
        </section>
        <div :class="$style.ContentWrapper">
            <section>
                <div :class="$style.Bio_container">
                    <picture :class="$style.Bio_photoWrapper">
                        <img
                            :class="$style.Bio_photo"
                            src="/assets/photo.png"
                        />
                    </picture>
                    <slot name="Bio" />
                </div>
            </section>
            <section>
                <FeaturesGallery :dummies="props.dummyFeatures">
                    <div>
                        <slot name="Features" />
                    </div>
                </FeaturesGallery>
            </section>
            <section>
                <div :class="$style.Bio">
                    <slot name="Banners" />
                </div>
            </section>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.HomePage {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
}

.Hero {
    flex: 0 0 auto;
    position: sticky;
    top: @Header-height;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-hero;

    background-color: @color-primary-muted;
    box-shadow: 0rem 0rem 100rem inset #0004;

    filter: brightness(v-bind(heroBrightness));
}

.Hero_titleContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
    line-height: 1.2;
    margin: @gap*2;
}

.Hero_title {
    font-weight: bold;
    font-size: @size-hero;
}

.Hero_subtitle {
    font-size: @size-hero-s;
}

.Hero_photo {
    height: 150rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 0% 30%;
    box-shadow: @shadow-l;
    border-radius: @inf;

    display: none;
}

.Bio_container {
    display: flex;
    flex-direction: row;
    gap: @gap*4;
    justify-content: left;
}

.Bio_photoWrapper {
    height: 200rem;

    border-radius: @gap*0.5;
    box-shadow: @shadow-s;

    display: flex;
    justify-content: stretch;
    align-items: stretch;

    overflow: hidden;
}

.Bio_photo {
    flex: 1 0 0rem;
    transform: scale(1.1) translateY(4%);

    // background-color: #69c;
    border-radius: @gap*0.5;
    // border-radius: @inf;
    box-shadow: @shadow;
    // border: solid @border-width-s @color-border;

    // padding: @gap*2;

    // visibility: hidden;

    object-fit: cover;
}

.ContentWrapper {
    flex-grow: 1;

    padding: @gap*4;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-l;
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
    position: relative;
    z-index: 1;
}
</style>
