<script setup lang="ts">
import naturalSort from "javascript-natural-sort";
import { computed } from "vue";

const props = defineProps<{
    icons: { title: string; url: string }[];
    title: string;
    links?: { github?: string; docs?: string };
}>();

const sortedIcons = computed(() =>
    [...props.icons].sort((a, b) => naturalSort(a.title, b.title))
);

function makeHeadingId(title: string) {
    return title.replace(/[&<"]/, "").replace(/\s/g, "-"); // ToDo this is just a placeholder
}
</script>

<template>
    <div :class="$style.Project">
        <h3
            :class="$style.Project_title"
            :id="makeHeadingId(props.title)"
        >
            <div :class="$style.Project_titleText">{{ props.title }}</div>
            <div :class="$style.Project_devIcons">
                <img
                    v-for="icon in sortedIcons"
                    :src="icon.url"
                    :alt="icon.title"
                    :title="icon.title"
                    :class="$style.DevIcon"
                />
            </div>
        </h3>
        <p>
            <strong :class="$style.Uses_title">uses:</strong>
            <span
                :class="$style.Uses_item"
                v-for="icon in sortedIcons"
            >
                {{ icon.title }}
            </span>
        </p>
        <slot />
        <p v-if="links">
            <template v-for="(url, name) in props.links">
                <a :href="url">{{ name }}</a>
                <span :class="$style.Project_linkSeparator"> | </span>
            </template>
        </p>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";

.Project_linkSeparator:last-child {
    display: none;
}

.Project .Project_title {
    display: flex;
    gap: @gap*0.5 @gap*2;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: min-content;
}

.Project_titleText {
    width: fit-content;
}

.Project_devIcons {
    display: flex;
    gap: @gap*0.5;
    flex-wrap: wrap;
}

.DevIcon {
    width: @size*2;
    aspect-ratio: 1;
    vertical-align: bottom;
    background-color: @color-background-card;
    border-radius: @inf;

    box-shadow: -4px -4px 4px 0px inset #0002, 4px 4px 4px 0px inset #ffff;
}

.Uses_title {
    &::after {
        content: " ";
    }
}

.Uses_item {
    &::after {
        content: ", ";
    }

    &:last-child::after {
        content: ".";
    }
}
</style>
