<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{ text?: string; href: string; sameTab?: boolean }>();

const text = computed(() => props.text ?? '');
</script>

<template>
	<a
		v-if="props.sameTab"
		:href="href"
		>{{ text }}<slot
	/></a>
	<a
		v-else
		rel="noopener"
		target="_blank"
		:href="href"
		>{{ text }}<slot
	/></a>
</template>
