<script setup lang="ts">
import { anchorIds } from './composables/anchorIds';
</script>

<template>
	<a
		:class="$style.BackToTop"
		:href="`#${anchorIds.page.root}`"
		>Back to top</a
	>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.BackToTop {
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0rem;

	display: block;
	width: min(@gap*32, 100%);

	font-size: @size-l;
	font-weight: bold;
	font-family: @font-techy;

	text-align: center;
	padding: @gap;

	outline: @border-width-s solid @color-border;
	border-radius: @gap @gap 0rem 0rem;

	background-color: @color-background;
	box-shadow: @shadow-s;
}
</style>
