<script setup lang="ts">
import LayoutToc from "./LayoutToc.vue";
import { Heading } from "./LayoutToc.vue";

const props = defineProps<{ heading: Heading }>();
</script>

<template>
    <li>{{ props.heading.title }}</li>
    <ul v-if="props.heading.children.length != 0">
        <LayoutTocItem
            v-for="child in props.heading.children"
            :heading="child"
        />
    </ul>
</template>
