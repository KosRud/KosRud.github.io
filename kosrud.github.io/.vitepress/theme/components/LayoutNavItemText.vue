<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
    level: number;
    active: boolean;
    compact?: boolean;
}>();

const level = computed(() => {
    const minLevel = 0;
    const maxLevel = 2;
    return Math.round(Math.min(Math.max(props.level, minLevel), maxLevel));
});
</script>

<template>
    <div
        :class="[
            $style.TocItemText,
            level == 0 ? $style.TocItemText___level0 : '',
            level == 1 ? $style.TocItemText___level1 : '',
            level == 2 ? $style.TocItemText___level2 : '',
            props.active ? $style.TocItemText___active : '',
            props.compact ? $style.TocItemText___compact : '',
        ]"
    >
        <slot />
    </div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.TocItemText {
    line-height: 1.2;
    display: block;
    color: @color-black-faded;
    text-decoration: none;
    font-weight: normal;
    font-family: @font-main;

    &:hover {
        &:not(.TocItemText___active) {
            color: @color-primary;
            text-shadow: 0.02em 0rem @color-primary, -0.02em 0rem @color-primary;
        }
    }
}

.TocItemText___level0 {
    padding-top: @gap;
    padding-bottom: @gap;
    font-size: @size-l;
}

.TocItemText___level1 {
    padding-top: @gap*0.625;
    padding-bottom: @gap*0.625;
    font-size: @size;
}

.TocItemText___level2 {
    padding-top: @gap * (1/3);
    padding-bottom: @gap * (1/3);
    font-size: @size-s;
}

.TocItemText___active {
    font-weight: bold;
    &,
    &:link,
    &:visited {
        color: @color-black;
    }
}

.TocItemText___compact {
    padding-top: 0.25em;
    padding-bottom: @gap*0.25;
}

/*
	Transitions
\*----------------------------------*/

.TocItemText {
    transition: font-weight @duration, color @duration, text-shadow @duration-s;
}
</style>
