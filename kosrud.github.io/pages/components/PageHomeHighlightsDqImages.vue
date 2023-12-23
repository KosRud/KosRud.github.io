<script setup lang="ts">
import { ref } from 'vue';

import imgDqBefore from '@/content/project screenshots/DQ/before.png?format=jpg&w=400&withoutEnlargement&quality=70';
import imgDqAfter from '@/content/project screenshots/DQ/after.png?format=jpg&w=400&withoutEnlargement&quality=70';

const urlBefore = `url("${imgDqBefore}")`;
const urlAfter = `url("${imgDqAfter}")`;
</script>

<template>
	<img
		:class="$style.BeforeAfter"
		alt="DQ skinning vs built-in linear skinning comparison"
		title="DQ
	skinning vs built-in linear skinning comparison"
		:src="imgDqBefore"
	/>
</template>

<style module lang="less">
@keyframes beforeAfter {
	0% {
		content: v-bind('urlBefore');
		display: block;
	}

	50% {
		content: v-bind('urlAfter');
		display: none;
	}
}

.BeforeAfter {
	content: v-bind('urlBefore');
	animation: 3s infinite normal beforeAfter;
}
</style>
