<script setup lang="ts">
import { Heading } from "./LayoutToc.vue";

const props = defineProps<{ heading: Heading; level?: number }>();

const level = props.level ?? 1;
</script>

<template>
    <li :class="$style.TocItem">
        <a
            :class="$style.TocItem_title"
            :href="`#${props.heading.id}`"
            >{{ props.heading.title }}</a
        >
        <ul v-if="props.heading.children.length != 0">
            <LayoutTocItem
                v-for="child in props.heading.children"
                :heading="child"
                :level="level + 1"
            />
        </ul>
    </li>
</template>

<style module lang="less">
@import "./style/variables/index.less";

.TocItem {
    display: flex;
    flex-direction: column;

    &::before {
        display: none;
    }
}

.TocItem_title {
    width: 100%;

    border-left: @width solid @color-border;
    padding-left: calc(@gap * v-bind(level));

    padding-top: @gap*0.125;
    padding-bottom: @gap*0.125;
    padding-right: @gap;

    &:link,
    &:visited {
        color: inherit;
        text-decoration: none;

        &:hover {
            border-color: @color-primary;
            // background-color: #0002;
            color: @color-primary;
            // font-weight: bold;
            // text-decoration: underline;
            // color: @color-white;
        }
    }
}
</style>
