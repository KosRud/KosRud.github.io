<script setup lang="ts">
import { anchorIds } from './composables/anchorIds';
</script>

<template>
	<a
		:class="$style.BackToTop"
		:href="`#${anchorIds.page.root}`"
		text="Back to top"
	></a>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.BackToTop {
	margin-left: auto;
	margin-right: auto;
	display: block;
	width: fit-content;
	font-size: @size-l;
	font-weight: bold;
}
</style>
