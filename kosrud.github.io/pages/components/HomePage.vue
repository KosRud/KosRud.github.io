<script setup lang="ts">
import type { Ref, ComponentPublicInstance } from "vue";

import FeaturesGallery from "./FeaturesGallery.vue";

import { computed, onMounted, onUnmounted, ref } from "vue";
import { useResizeObserver } from "../../.vitepress/theme/components/composables/resizeObserver";
import { pxToRem } from "../../.vitepress/theme/components/composables/unitConverter";

const props = defineProps<{ dummyFeatures?: number }>();

const hero: Ref<Element | null> = ref(null);
const scrollY = ref(0);
const heroBrightness = computed(() => {
    if (!hero.value) {
        return 1;
    }

    return Math.max(1 - (scrollY.value / hero.value.clientHeight) * 0.5, 0);
});
const containerDiv: Ref<Element | null> = ref(null);
handleScrolling();

const compactThresholdRem = 800;
const isCompact = ref(false);
useResizeObserver(
    () => {
        if (!containerDiv.value) {
            console.error("homepage container div reference not set");
            return;
        }

        const width = pxToRem(containerDiv.value.clientWidth);

        isCompact.value = width < compactThresholdRem;
    },
    () => containerDiv.value,
    true
);

function handleScrolling() {
    function onScroll() {
        scrollY.value = window.scrollY;
    }

    onMounted(() => {
        document.addEventListener("scroll", onScroll, { passive: true });
    });
    onUnmounted(() => {
        document.removeEventListener("scroll", onScroll);
    });
}
</script>

<template>
    <div
        :class="[$style.HomePage, isCompact ? $style.HomePage___compact : '']"
        :ref="(element) => {containerDiv = element as Element}"
    >
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
                <div :class="$style.Bio">
                    <slot name="Bio" />
                </div>
                <FeaturesGallery :dummies="props.dummyFeatures">
                    <div>
                        <slot name="Features" />
                    </div>
                </FeaturesGallery>
            </section>
            <section>
                <h2 :class="$style.Projects_heading">Project highlights</h2>
                <div :class="$style.Projects_container">
                    <div
                        :class="$style.Project_banner"
                        v-for="id in Array.from({ length: 8 })"
                    >
                        <h3 :class="$style.Project_title">Project title</h3>
                    </div>
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
    box-shadow: 0rem 0rem 100rem inset #0006;

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
    letter-spacing: -0.03em;
}

.Hero_subtitle {
    font-size: @size-hero-s;
}

.Hero_photo {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: 0% 30%;
    box-shadow: @shadow-l;
    border-radius: @inf;

    display: none;
}

.ContentWrapper {
    flex-grow: 1;

    padding: @gap*4;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-l;
    background-color: @color-white;

    & > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 1200rem;
        height: max-content;
        margin-bottom: @gap*4;
    }
}

.Bio {
    font-size: @size;

    h2 {
        font-size: @size-xl;
        font-weight: bold;
    }

    h1,
    h2,
    h3,
    h4,
    table,
    p {
        margin-bottom: @gap*1.5;
    }
}

.Projects_heading {
    .heading2();

    font-size: @size-xl;
    margin-bottom: @gap*4;
}

.Projects_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: @gap*2;
}

.Project_banner {
    flex: 1 1 500rem;

    min-height: 200rem;
    // box-shadow: @shadow-s;
    border: @border-width-s solid @color-border;
}

.Project_title {
    @Project_title-padding: @gap*0.5;
    @Project_title-clip: @gap;

    min-width: min(220rem, 100%);
    width: fit-content;

    padding: @Project_title-padding;
    padding-right: @Project_title-padding + @Project_title-clip;
    background-color: @color-background-dark;

    text-align: left;
    color: @color-white;
    clip-path: polygon(
        0% 0%,
        100% 0%,
        calc(100% - @Project_title-clip) 100%,
        0% 100%
    );

    .heading-shadow();
}

/*
	Responsive
\*----------------------------------*/

.HomePage___compact {
    .ContentWrapper {
        padding: @Main-padding-horizontal-compact;
        padding-top: @Main-padding-horizontal-compact* (3/2);
    }

    .Hero {
        display: none;
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
