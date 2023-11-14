<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "vue";

const props = defineProps<{
    dummy?: boolean;
    name: string;
    iconUrl?: string;
}>();

const iconUrl = computed(() => `url(${props.iconUrl})`);
</script>

<template>
    <article
        :class="[
            $style.Card,
            props.dummy ? $style.CardGallery_card___dummy : '',
        ]"
    >
        <template v-if="!props.dummy">
            <h2 :class="$style.Feature_title">
                <div
                    v-if="props.iconUrl"
                    :class="$style.Feature_icon"
                ></div>
                {{ props.name }}
            </h2>
            <slot />
        </template>
    </article>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

@icon-size: 1em * 1.3;

.Card {
    flex: 1 0 340rem;
    min-height: 160rem;
    // width: max-content;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    background: @color-gray-light;
    box-shadow: @shadow;
    border: 1rem solid @color-gray;
    padding: @gap @gap*2;

    font-family: @font-compact;
}

.CardGallery_card___dummy {
    height: 0rem;
    min-height: 0rem;

    border: none;
    padding: 0rem 0rem;
}

.Feature_title {
    margin-bottom: @gap;

    padding-left: calc(@icon-size + @gap);
    font-size: @size-xl;
    font-weight: @weight-bold;
    text-align: center;

    position: relative;
}

.Feature_icon {
    position: absolute;
    left: 0rem;
    top: 50%;
    transform: translateY(-50%);

    width: @icon-size;
    aspect-ratio: 1;

    background-image: v-bind(iconUrl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
