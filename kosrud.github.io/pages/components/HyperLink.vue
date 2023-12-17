<script lang="ts" setup>
const props = defineProps<{ text: string; url: string; sameTab?: boolean }>();
</script>

<template>
	<a
		v-if="props.sameTab"
		:href="url"
		>{{ props.text }}</a
	>
	<a
		v-else
		rel="noopener"
		target="_blank"
		:href="url"
		>{{ props.text }}</a
	>
</template>
