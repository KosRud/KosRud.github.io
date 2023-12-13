<script setup lang="ts">
import smudge from "./assets/smudges/2.svg";

const props = defineProps<{ text: string }>();
const smudgeUrl = `url("${smudge}")`;
</script>

<template>
    <h2 :class="$style.HeadingWrapper">
        {{ props.text }}
    </h2>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.HeadingWrapper {
    width: min(300rem, 100%);

    margin-left: auto;
    margin-right: auto;
    margin-bottom: @gap*4;

    font-weight: bold;
    color: @color-white;
    font-size: @size-xxl;

    text-align: center;
    white-space: nowrap;

    background-image: v-bind(smudgeUrl);
    background-size: 100% 100%;
    padding: 5rem 50rem 21rem 40rem;
    transform: translateX(5rem);
    background-repeat: no-repeat;
    background-position: center;

    text-shadow: 3rem 1rem 0rem black;

    position: relative;
}
</style>
