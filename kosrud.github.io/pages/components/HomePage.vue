<script setup lang="ts">
import FeaturesGallery from "./FeaturesGallery.vue";

import type { Ref, ComponentPublicInstance } from "vue";
import { useStore } from "../../.vitepress/theme/components/pinia/store";

import { computed, onMounted, onUnmounted, ref } from "vue";
import { AdaptiveStage } from "../../.vitepress/theme/components/composables/adaptiveStages";

const props = defineProps<{ dummyFeatures?: number }>();

const hero: Ref<Element | null> = ref(null);

const store = useStore();

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
    <div
        :class="[
            $style.HomePage,
            store.adaptiveStage == AdaptiveStage.collapsed
                ? $style.HomePage___compact
                : '',
        ]"
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
                    <img
                        :class="$style.Bio_photo"
                        src="/assets/photo.png"
                    />
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
                <!-- <div :class="$style.Banners">
                    <slot name="Banners" />
                </div> -->
            </section>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

@Bio_photo-width: 130rem;
@Bio_container-gap: @gap*4;

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
    // font-weight: bold;
    font-size: @size-hero;
    letter-spacing: -0.05em;
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

.Bio {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @Bio_container-gap;
    justify-content: center;
    align-items: center;

    margin-right: @Bio_photo-width + @Bio_container-gap;
}

.Bio_photo {
    flex: 0 1 @Bio_photo-width;
    border-radius: 50% @gap @gap 30% / 50% @gap @gap 50%;
    box-shadow: @shadow;

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
        margin-bottom: @gap*6;
    }
}

/*
	Responsive
\*----------------------------------*/

.HomePage___compact {
    .Bio {
        gap: @gap*2 @gap*4;
        margin-right: 0rem;
    }

    .ContentWrapper {
        padding: @Main-padding-horizontal-compact;
        padding-top: @Main-padding-horizontal-compact* (3/2);
    }

    .Bio_photo {
        order: 1;
        border-radius: 50% / 20%;
    }

    .Hero {
        display: none;
    }

    .Hero_titleContainer {
        text-shadow: 1px 1px 0px black, 2px 2px 6px #000a;
    }

    .Hero_title {
        font-size: @size-xxl;
    }

    .Hero_subtitle {
        font-size: @size-l;
    }

    .ContentWrapper > * {
        margin-bottom: @gap*2;
        text-align: left;
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
