<script setup lang="ts">
const props = defineProps<{
    icons: { title: string; url: string }[];
    title: string;
    links?: { github?: string; docs?: string };
}>();

function makeHeadingId(title: string) {
    return title.replace(/[&<"]/, "").replace(/\s/g, "-"); // ToDo this is just a placeholder
}
</script>

<template>
    <h3
        :class="$style.Project_title"
        :id="makeHeadingId(props.title)"
    >
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
    <p v-if="links">
        <template v-for="(url, name, index) in links">
            <a :href="url">{{ name }}</a>
            <span :class="$style.Project_linkSeparator"> | </span>
        </template>
    </p>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";

.Project_linkSeparator:last-child {
    display: none;
}

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
    background-color: @color-background-card;
    border-radius: @inf;

    box-shadow: -4px -4px 4px 0px inset #0002, 4px 4px 4px 0px inset #ffff;
}
</style>
