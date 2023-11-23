<script setup lang="ts">
import LayoutToc from "./LayoutToc.vue";
import { Heading } from "./LayoutToc.vue";

const props = defineProps<{ heading: Heading }>();
</script>

<template>
    <li :class="$style.TocItem">
        <span>{{ props.heading.title }}</span>
        <ul v-if="props.heading.children.length != 0">
            <LayoutTocItem
                v-for="child in props.heading.children"
                :heading="child"
            />
        </ul>
    </li>
</template>

<style module lang="less">
.TocItem {
    display: flex;
    flex-direction: column;
}
</style>
