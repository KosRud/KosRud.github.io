<script setup lang="ts">
import LayoutNavItemText from "./LayoutNavItemText.vue";

import { ref, computed, watchEffect, onMounted } from "vue";
import { useStore } from "./pinia/store";

import type { Ref } from "vue";
import type { TocItem } from "./composables/Toc/tocItems";
import { scrollIntoViewIfNeeded } from "./composables/scrollIntoView";

const props = defineProps<{
    heading: TocItem;
    level?: number;
    isTocLoaded: boolean;
}>();
const emit = defineEmits(["jumpedToItem"]);

const level = props.level ?? 1;

const isActive = computed(() => {
    const store = useStore();
    return store.activeHeadingId == props.heading.element.id;
});

onMounted(() => {
    watchEffect(() => {
        if (!isActive.value || !linkElement.value || !props.isTocLoaded) {
            return;
        }
        if (linkElement.value) {
            scrollIntoViewIfNeeded(linkElement.value, "center");
        }
    });
});

const linkElement: Ref<Element | null> = ref(null);
</script>

<template>
    <li :class="$style.TocItem">
        <a
            :class="[
                $style.TocItem_link,
                isActive ? $style.TocItem_link___active : '',
            ]"
            :href="`#${props.heading.element.id}`"
            @click="emit('jumpedToItem')"
            :ref="(element) => { linkElement = element as Element }"
        >
            <LayoutNavItemText
                :level="1"
                compact
                :active="isActive"
                :class="$style.TocItem_linkText"
            >
                {{ props.heading.element.textContent }}
            </LayoutNavItemText>
        </a>
        <ul v-if="props.heading.children.length != 0">
            <LayoutNavTocItem
                v-for="child in props.heading.children"
                :heading="child"
                :level="level + 1"
                @jumped-to-item="emit('jumpedToItem')"
                :is-toc-loaded="props.isTocLoaded"
            />
        </ul>
    </li>
</template>

<style module lang="less">
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.TocItem {
    display: flex;
    flex-direction: column;

    &::before {
        display: none;
    }
}

.TocItem_link {
    width: 100%;

    border-left: @border-width solid @color-border;
    padding-left: calc(@gap * v-bind(level));
    padding-right: @gap;

    text-decoration: none;
}

.TocItem_link___active {
    border-color: @color-primary;
}

/*
	Font-size
\*----------------------------------*/

.TocItem_link {
    transition: border-color @duration;
}
</style>
