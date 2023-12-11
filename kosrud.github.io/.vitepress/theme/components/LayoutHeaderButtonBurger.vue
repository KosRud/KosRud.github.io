<script setup lang="ts">
const props = defineProps<{
    title: string;
    isOpen: boolean;
    toggleIsOpen: (value: boolean) => void;
    numLines: 3 | 5;
}>();
</script>

<template>
    <div
        :class="{ [$style.BurgerWrapper]: true, [$style.open]: props.isOpen }"
        @click="props.toggleIsOpen"
    >
        <div :class="$style.Burger_title">{{ props.title }}</div>
        <div :class="$style.Burger">
            <div
                :class="$style.Burger_line"
                v-for="_ in numLines"
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

    padding: 0rem @gap*0.5;

    &:hover,
    &.open {
        background-color: @color-highlight;
    }

    &:active {
        > * {
            transform: translateY(@click-offset);
        }
    }

    font-family: @font-techy;
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

    transform-origin: 0% 50%;
    &:nth-child(2n + 1) {
        transform: scaleX(90%);
    }
}

.BurgerWrapper {
    &:hover,
    &:active,
    &.open {
        .Burger_line {
            &:nth-child(2n + 1) {
                transform: scaleX(100%);
            }
            &:nth-child(2n) {
                transform: scaleX(90%);
            }
        }
    }
}

/*
	Transitions
\*----------------------------------*/

.Burger_line&:nth-child(2n) {
    transition: transform @duration ease-out;
}
.Burger_line&:nth-child(2n + 1) {
    transition: transform @duration ease-in;
}

.BurgerWrapper:hover {
    .Burger_line&:nth-child(2n) {
        transition: transform @duration ease-in;
    }

    .Burger_line&:nth-child(2n + 1) {
        transition: transform @duration ease-out;
    }
}

.BurgerWrapper {
    transition: background-color @duration;
}
</style>
