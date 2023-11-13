<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    items: object[];
}>();
</script>

<template>
    <section :class="$style.CardGallery">
        <article
            :class="$style.Card"
            v-for="item in items"
        >
            <slot v-bind="item" />
        </article>
        <article
            :class="[$style.Card, $style.CardGallery_card___dummy]"
            v-for="_ in Array.from({ length: 16 })"
        ></article>
    </section>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap*4;
    justify-content: stretch;
    align-items: stretch;
    width: 100%;
}

.Card {
    flex: 1 0 300rem;
    min-height: 160rem;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    background: @color-gray-light;
    box-shadow: @shadow;
    border: 1rem solid @color-gray;
    padding: @gap @gap*2;
}

.CardGallery_card___dummy {
    height: 0rem;
    min-height: 0rem;

    border: none;
    padding: 0rem 0rem;
}
</style>
