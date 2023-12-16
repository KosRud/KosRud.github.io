<script setup lang="ts">
import { Ref, ref } from "vue";
import { useResizeObserver } from "./composables/resizeObserver";

const containerElement: Ref<Element | null> = ref(null);
const isNarrow = ref(false);
const narrowThresholdRem = 500;

useResizeObserver(
	() => {
		if (!containerElement.value) {
			console.error("markdown container element ref not set");
			return;
		}

		isNarrow.value =
			containerElement.value.clientWidth < narrowThresholdRem;
	},
	() => containerElement.value,
	true
);
</script>

<template>
	<div
		:ref="(element) => {containerElement = element as Element}"
		:class="[$style.Markdown, isNarrow ? $style.Markdown___narrow : '']"
	>
		<slot />
	</div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";
@import "../style/mixins/index.less";

.Markdown {
	text-align: justify;

	h1,
	h2,
	h3,
	h4,
	p,
	table {
		margin-bottom: @content-gap;
	}

	.Content();

	/*
		Headings
	\*----------------------------------*/

	h1,
	h2,
	h3,
	h4 {
		font-family: @font-techy;
	}

	h1 {
		font-size: @size-xl;
		font-weight: bold;
		color: @color-white;
		text-align: center;

		background-color: @color-background-dark;
		padding: @gap*0.75;
	}

	h2 {
		min-width: min(350rem, 100%);
		width: min-content;
		margin-left: auto;
		margin-right: auto;

		border: @border-width solid @color-background-dark;
		border-radius: @gap;

		text-align: center;
		font-weight: bold;
		font-family: @font-techy;

		font-size: @size-l;
		text-align: center;
	}

	h3 {
		min-width: min(220rem, 100%);
		width: fit-content;

		padding: @gap*0.5;
		background-color: @color-background-dark;

		text-align: left;
		color: @color-white;
	}

	/*
		Headings.Shadows
	\*----------------------------------*/

	h1,
	h2,
	h3 {
		box-shadow: @shadow;
	}

	/*
		Headings.Margins
	\*----------------------------------*/

	h1,
	h2 {
		margin-bottom: @content-gap*2;
	}

	h1,
	h2,
	h3 {
		&:not(:first-child) {
			margin-top: @content-gap*4;
		}
	}

	/*
		Blocks
	\*----------------------------------*/

	article {
		margin-bottom: @content-gap*2;
	}

	article {
		&:not(:first-child) {
			margin-top: @content-gap*4;
		}
	}

	/*
		Tables
	\*----------------------------------*/

	table {
		margin-left: auto;
		margin-right: auto;
		display: block;
		max-width: max-content;
		overflow-x: auto;
		border-collapse: collapse;
		text-align: left;

		th {
			background-color: @color-background-dark;
			color: @color-white;
			text-align: center !important; // override markdown
			padding: @gap*0.5 @gap;
		}

		td {
			border: 1rem solid @color-border;
			padding: @gap*0.5 @gap;
		}

		th:not(:last-child) {
			border-right: rem solid @color-border;
		}
	}

	/*
		ETC
	\*----------------------------------*/
}

.Markdown___narrow {
	text-align: left;
}
</style>
