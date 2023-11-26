<script setup lang="ts">
import { inject } from "vue";
import tocItem from "./TocItem";
import activeHeadingIdSymbol from "./activeHeadingIdSymbol";

const props = defineProps<{
    heading: tocItem;
    level?: number;
    active?: boolean;
}>();

const level = props.level ?? 1;

const activeHeadingId = inject(activeHeadingIdSymbol);
</script>

<template>
    <li :class="$style.TocItem">
        <a
            :class="[
                $style.TocItem_title,
                activeHeadingId == heading.element.id
                    ? $style.TocItem_title___active
                    : '',
            ]"
            :href="`#${props.heading.element.id}`"
            >{{ props.heading.element.textContent }}
        </a>
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
@import "../../style/variables/index.less";

.TocItem {
    font-size: @size-s;
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
            color: @color-primary;
            font-weight: bold;
        }
    }
}

.TocItem_title___active {
    // background-color: #00000010;
    border-color: @color-primary;
    font-weight: bold;

    transition: background-color 0.1s;
    transition: border-color 0.1s;
    transition: font-weight 0.1s;
}
</style>
