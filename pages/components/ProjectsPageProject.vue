<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    icons: { title: string; url: string }[];
    title: string;
}>();
</script>

<template>
    <h3 :class="$style.Project_title">
        <div :style="$style.Project_titleText">{{ props.title }}</div>
        <section :class="$style.Project_devIcons">
            <img
                v-for="icon in props.icons"
                :src="icon.url"
                :alt="icon.title"
                :title="icon.title"
                :class="$style.DevIcon"
            />
        </section>
    </h3>
    <slot />
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.Project_title {
    display: flex;
    gap: @gap*2;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.Project_devIcons {
    display: flex;
    gap: @gap*0.5;
}

.DevIcon {
    width: @size*2;
    aspect-ratio: 1;
    vertical-align: bottom;
    background-color: @color-gray-light;
    border-radius: @inf;

    box-shadow: -4px -4px 4px 0px inset #0002, 4px 4px 4px 0px inset #ffff;
}
</style>
