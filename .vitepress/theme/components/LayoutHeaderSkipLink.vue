<script setup lang="ts">
const props = defineProps<{ title: string; anchorId: string }>();
</script>

<template>
	<a
		:class="$style.SkipLink"
		:href="`#${props.anchorId}`"
		>Skip to {{ props.title }}</a
	>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.SkipLink {
	padding: @gap @gap*2;
	font-size: @size-l;
	background-color: @color-white;
	border-radius: @gap;
}
</style>
