<script setup lang="ts">
//
</script>

<template>
    <div :class="$style.BurgerWrapper">
        <div :class="$style.Burger_title">Menu</div>
        <div :class="$style.Burger">
            <div
                :class="$style.Burger_line"
                v-for="_ in 5"
            ></div>
        </div>
    </div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.BurgerWrapper {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: row;
    color: @color-white;

    padding-left: @gap;
    padding-right: @gap;

    &:hover {
        background-color: @color-highlight;
    }

    &:active {
        background-color: transparent;

        .Burger_line {
            transform: translateY(@click-offset);
        }
    }

    font-family: @font-ui;
}

.Burger_title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Burger {
    aspect-ratio: 1;
    flex: 1 1 0rem;

    // background-color: red;

    padding: @gap*0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: @border-width*2;
}

.Burger_line {
    flex: 0 0 @border-width;
    border-radius: @inf;
    background-color: @color-background;
    box-shadow: @shadow-s;
    &:nth-child(2n + 1) {
        margin-right: 15%;
    }
}

/*
	Transitions
\*----------------------------------*/

.BurgerWrapper {
    transition: background-color @duration-s;
}

.Burger_line {
    transition: transform @duration-s ease-out;
}
</style>
