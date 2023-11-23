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

    border-left: @gap*0.25 solid @color-border;
    padding-left: calc(@gap * v-bind(level));

    padding-top: @gap*0.125;
    padding-bottom: @gap*0.125;
    padding-right: @gap;

    &:hover {
        border-color: @color-primary-light;
        background-color: #0002;
        // color: @color-white;
    }
}
</style>
