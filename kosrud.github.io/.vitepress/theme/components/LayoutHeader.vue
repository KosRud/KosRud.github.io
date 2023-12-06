<script lang="ts" setup>
import { useStore } from "./pinia/store";

import LayoutNavTop from "./LayoutNavTop.vue";
import LayoutHeaderButtonBurger from "./LayoutHeaderButtonBurger.vue";
import SiteTitle from "./SiteTitle.vue";
import { AdaptiveStage } from "./composables/adaptiveStages";

const store = useStore();
</script>

<template>
    <header :class="$style.Header">
        <div :class="$style.SiteTitleContainer">
            <SiteTitle />
        </div>
        <LayoutNavTop :class="$style.NavTop" />
        <LayoutHeaderButtonBurger
            :class="$style.BurgerToc"
            v-if="store.adaptiveStage == AdaptiveStage.collapsed"
            :title="'On this page'"
            :is-open="store.isMobileNavTocOpen"
            :toggle-is-open="
                () => {
                    store.isMobileNavTocOpen = !store.isMobileNavTocOpen;
                }
            "
            :num-lines="3"
        />
        <LayoutHeaderButtonBurger
            :class="$style.BurgerMenu"
            v-if="store.adaptiveStage == AdaptiveStage.collapsed"
            :title="'Menu'"
            :is-open="store.isMobileNavPagesOpen"
            :toggle-is-open="
                () => {
                    store.isMobileNavPagesOpen = !store.isMobileNavPagesOpen;
                }
            "
            :num-lines="5"
        />
    </header>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.SiteTitleContainer {
    width: @NavSide-width;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: start;
}

.Header {
    background-color: @color-background-dark;
    display: flex;
    gap: @gap;

    height: @Header-height;

    position: relative; // for  burger's absolute
}

.Header_navLink___active {
    position: relative;

    &::after {
        position: absolute;
        content: "";
        left: @gap*0.0;
        right: @gap*0.0;
        bottom: calc(0rem - @gap);
        top: calc(0rem - @NavTop-padding-vertical);
        border-top: @border-width solid @color-background;
        pointer-events: none;
    }
}

.NavTop {
    flex: 1 0;
    margin-right: @gap;
}

.BurgerMenu {
    position: absolute;
    top: 0rem;
    right: 0rem;
    height: 100%;
}

.BurgerToc {
    position: absolute;
    top: 0rem;
    right: 120rem;
    height: 100%;
}

/*
	Font-family
\*----------------------------------*/

.Header {
    font-family: @font-ui;
}

/*
	UI shadows
\*----------------------------------*/

.Header {
    box-shadow: @shadow;
}
</style>
