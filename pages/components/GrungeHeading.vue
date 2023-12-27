<script setup lang="ts">
import smudge from './assets/smudges/2.svg';

import { makeHeadingId } from '@vitepress/theme/components/composables/makeHeadingId';

const props = defineProps<{ text: string }>();
const smudgeUrl = `url("${smudge}")`;
</script>

<template>
	<div :class="$style.HeadingWrapper">
		<h2
			:id="makeHeadingId(props.text)"
			:class="$style.Heading"
			tabindex="-1"
		>
			{{ props.text }}
		</h2>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';
@import '@vitepress/theme/style/mixins.less';

.HeadingWrapper {
	box-sizing: border-box;

	width: min(300rem, 100%);

	margin-left: auto;
	margin-right: auto;

	font-weight: bold;
	color: @color-white;
	font-size: @size-xxl;

	text-align: center;
	white-space: nowrap;

	background-image: v-bind('smudgeUrl');
	background-size: 100% 100%;
	padding-top: 5rem;
	padding-bottom: 21rem;

	background-repeat: no-repeat;
	background-position: center;

	text-shadow: 3rem 1rem 0rem black;

	position: relative;
}

.Heading {
	text-align: center;
	padding-left: 16%;
	padding-right: 16%;
	width: 100%;
}
</style>
