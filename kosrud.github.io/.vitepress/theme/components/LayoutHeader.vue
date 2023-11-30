<script lang="ts" setup>
import LayoutTopNav from "./LayoutTopNav.vue";
import ButtonBurger from "./ButtonBurger.vue";
import SiteTitle from "./SiteTitle.vue";
</script>

<template>
    <header :class="$style.Header">
        <div :class="$style.SiteTitleContainer">
            <SiteTitle />
        </div>
        <LayoutTopNav :class="$style.TopNav" />
        <ButtonBurger />
    </header>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.SiteTitleContainer {
    width: @SideNav-width;
    display: flex;
    flex-direction: row;
    align-items: center;
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
        top: calc(0rem - @TopNav-gap-vertical);
        border-top: @width solid @color-background;
        pointer-events: none;
    }
}

.TopNav {
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
