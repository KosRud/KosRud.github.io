<script lang="ts" setup>
import LayoutNavToc from "./LayoutNavToc.vue";
import LayoutNavPages from "./LayoutNavPages.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutNavMobile from "./LayoutNavMobile.vue";

import { useData } from "vitepress";
import { useStore } from "./pinia/store";
import { useCssModule } from "vue";

import type { ThemeConfig } from "../ThemeConfig";
import { AdaptiveStage } from "./composables/adaptiveStages";
import { watchEffect } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const frontmatter = useData<ThemeConfig>().frontmatter;

const store = useStore();
const $style = useCssModule();

watchEffect(() => {
    if (store.isMobileNavAnythingOpen) {
        document.querySelector("body")?.classList.add($style.noScroll);
    } else {
        document.querySelector("body")?.classList.remove($style.noScroll);
    }
});
</script>

<template>
    <div
        :class="[
            $style.Overlay,
            store.isMobileNavAnythingOpen ? $style.Overlay___shaded : '',
        ]"
    >
        <LayoutHeader :class="$style.Header" />
        <div :class="$style.NavContainer">
            <template v-if="!frontmatter.hero">
                <LayoutNavPages
                    :class="$style.NavSide"
                    v-if="store.adaptiveStage == AdaptiveStage.full"
                />
                <div :class="$style.Overlay_spacer"></div>
                <LayoutNavToc
                    :class="$style.Toc"
                    v-if="store.adaptiveStage == AdaptiveStage.full"
                />
            </template>
            <LayoutNavMobile
                :class="$style.NavMobile"
                :isOpen="store.isMobileNavTocOpen"
                :setIsOpen="
                        (isOpen: boolean) => {
                            store.isMobileNavTocOpen = isOpen;
                        }
                    "
            >
                <LayoutNavToc />
            </LayoutNavMobile>
            <LayoutNavMobile
                :class="$style.NavMobile"
                :isOpen="store.isMobileNavPagesOpen"
                :setIsOpen="
                        (isOpen: boolean) => {
                            store.isMobileNavPagesOpen = isOpen;
                        }
                    "
            >
                <LayoutNavPages top-level />
            </LayoutNavMobile>
        </div>
    </div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

/*
	Z-index
\*----------------------------------*/

.noScroll {
    overflow: hidden !important;
}

.Overlay {
    // establish a stacking context
    position: fixed;
    z-index: 0;
}

.Header {
    z-index: 1;
}

.NavContainer {
    z-index: 0;
}

/*
	Main section
\*----------------------------------*/

.Overlay {
    position: fixed;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;

    display: flex;
    flex-direction: column;
}

.Overlay_spacer {
    flex: 0 1 @Main-padding-horizontal * 2 + @content-width + @Toc-to-Main-gap;
}

.Overlay___shaded {
    background-color: mix(@color-black, transparent, 70%);
}

.NavContainer {
    flex-grow: 1;
    display: flex;
    justify-content: stretch;

    position: relative; // for NavMobile
}

.Header {
    flex: 0 0 @Header-height;
}

.NavSide {
    margin-top: @Header-to-Content-gap;
    flex: 0 0 @NavSide-width;
}

.Toc {
    position: sticky;
    top: 0rem;
    flex: 0 0 @Toc-width;
    margin-top: @Header-to-Content-gap;

    padding: 0rem @gap;
    display: flex;
    flex-direction: column;
}

.NavMobile {
    position: absolute;

    top: 0rem;
    bottom: 0rem;
    right: 0rem;
    width: 100%;
}

/*
	Transitions
\*----------------------------------*/

.Overlay {
    transition: background-color @duration;
}

/*
	Pointer behavior
\*----------------------------------*/

.Overlay {
    pointer-events: none;

    a {
        user-select: none;
        cursor: pointer;
    }
}

.Toc,
.NavSide,
.NavMobile,
.Header {
    pointer-events: auto;
}
</style>
