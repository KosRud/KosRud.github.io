<script lang="ts" setup>
import LayoutNavTop from "./LayoutNavTop.vue";
import ButtonBurger from "./ButtonBurger.vue";
import SiteTitle from "./SiteTitle.vue";
</script>

<template>
    <header :class="$style.Header">
        <div :class="$style.SiteTitleContainer">
            <SiteTitle />
        </div>
        <LayoutNavTop :class="$style.NavTop" />
        <ButtonBurger />
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
}

.Header_navLink___active:link {
    position: relative;

    &::after {
        position: absolute;
        content: "";
        left: @gap*0.0;
        right: @gap*0.0;
        bottom: calc(0rem - @gap);
        top: calc(0rem - @NavTop-padding-vertical);
        border-top: @width solid @color-background;
        pointer-events: none;
    }
}

.NavTop {
    flex: 1 0;
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
