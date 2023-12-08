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
            $style.NavItem_text,
            level == 0 ? $style.NavItem_text___level0 : '',
            level == 1 ? $style.NavItem_text___level1 : '',
            level == 2 ? $style.NavItem_text___level2 : '',
            props.active ? $style.NavItem_text___active : '',
            props.compact ? $style.NavItem_text___compact : '',
        ]"
    >
        <slot />
    </div>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.NavItem_text {
    line-height: 1.2;
    display: block;
    color: @color-black-faded;
    text-decoration: none;
    font-weight: normal;
    font-family: @font-main;

    &:hover {
        &:not(.NavItem_text___active) {
            color: @color-primary;
            text-shadow: 0.02em 0rem @color-primary, -0.02em 0rem @color-primary;
        }
    }
}

.NavItem_text___level0 {
    .NavItem_text(0);
}

.NavItem_text___level1 {
    .NavItem_text(1);
}

.NavItem_text___level2 {
    .NavItem_text(2);
}

.NavItem_text___active {
    font-weight: bold;
    &,
    &:link,
    &:visited {
        color: @color-black;
    }
}

.NavItem_text___compact {
    .NavItem_text___compact();
}

/*
	Transitions
\*----------------------------------*/

.NavItem_text {
    transition: font-weight @duration, color @duration, text-shadow @duration-s;
}
</style>
