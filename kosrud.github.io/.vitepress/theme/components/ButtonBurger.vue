<script setup lang="ts">
//
</script>

<template>
    <div :class="$style.BurgerWrapper">
        <div :class="$style.Burger">
            <div
                :class="$style.Burger_line"
                v-for="_ in 3"
            ></div>
        </div>
    </div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.BurgerWrapper {
    aspect-ratio: 1;

    margin-right: @gap;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    &:hover {
        background-color: @color-highlight;
    }

    &:active {
        background-color: transparent;

        .Burger_line {
            transform: translateY(@click-offset);
        }
    }
}

.Burger {
    flex: 1 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 25% 15%;
    gap: 30%;
}

.Burger_line {
    flex: 0 0 15%;
    border-radius: @inf;
    background-color: @color-background;
    box-shadow: @shadow-s;
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
