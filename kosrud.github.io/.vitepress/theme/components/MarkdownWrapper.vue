<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useResizeObserver } from './composables/resizeObserver';

const containerElement: Ref<Element | null> = ref(null);
const isNarrow = ref(false);
const narrowThresholdRem = 500;

useResizeObserver(
	() => {
		if (!containerElement.value) {
			console.error('markdown container element ref not set');
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
@import '../style/variables/index.less';
@import '../style/mixins/index.less';

@admonition_title-height: @size * 2;
@admonition-padding: @gap;

.Markdown {
	text-align: justify;

	h1,
	h2,
	h3,
	h4,
	p,
	div,
	section,
	ul,
	ol,
	dl,
	dd,
	figure,
	table {
		&:not(:last-child) {
			margin-bottom: @content-gap;
		}
	}

	.Content();

	/*
		Headings
	\*----------------------------------*/

	:global(.header-anchor) {
		display: none;
	}

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

	h4 {
		font-weight: bold;
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
	h2,
	h3,
	h4 {
		margin-bottom: @content-gap;

		&:not(:first-child) {
			margin-top: @content-gap*2;
		}
	}

	/*
		Definitions
	\*----------------------------------*/

	dt {
		font-weight: bold;
	}

	dd {
		margin-left: @gap*2;
		border-left: @border-width solid @color-border;
		padding-left: @gap;
		padding-top: @gap;
		padding-bottom: @gap;
	}

	/*
		Tables
	\*----------------------------------*/

	table {
		// margin-left: auto;
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
		images
	\*----------------------------------*/

	figure {
		width: 100%;
		overflow: auto;

		img {
			object-fit: contain;
			width: 100%;
			min-width: 600rem;
			max-height: 400rem;
		}
	}

	/*
		Admonitions
	\*----------------------------------*/

	// :global(.custom-block-title) {
	// 	display: none;
	// }

	:global(.custom-block) {
		border: @color-border solid @border-width;
		// border-left: none;
		// border-right: none;
		border-top: none;
		border-bottom: none;
		border-radius: 0rem 0rem @gap @gap;
		background-color: @color-background;
		padding: @admonition-padding;
		box-shadow: @shadow-s;
		margin-left: @gap;
		margin-right: @gap;
		margin-top: calc(@admonition_title-height + @content-gap);

		&::before {
			height: @admonition_title-height;
			margin-left: -@gap*2;
			margin-right: -@gap*2;
			margin-top: calc(-@admonition-padding - @admonition_title-height);
			margin-bottom: @admonition-padding;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			text-align: center;
			font-weight: bold;

			box-shadow: @shadow-s;
			border-radius: @gap;
		}
	}

	:global(.custom-block-title) {
		display: none;
	}

	:global(.custom-block.warning) {
		background-color: #fceccf;
		border-color: #f0b37e;

		&::before {
			background-color: #f0b37e;
			content: 'Warning';
		}
	}

	/*
		Code (inline)
	\*----------------------------------*/

	p > code {
		background-color: @color-background-card;
		padding: 0.15em 0.2em;
		border-radius: @gap*0.25;
	}

	/*
		Code (block)
	\*----------------------------------*/

	:global(.github-dark) {
		display: none;
	}

	:global(.copy) {
		display: none;
	}

	:global(.lang) {
		background-color: @color-background;
		display: block;
		padding: @gap*0.25 @gap;
		border-radius: @gap*0.5 @gap * 0.5 0rem 0rem;
		border: @border-width-s solid @color-border;
		display: none;
	}

	:global(.shiki) {
		padding: @gap;
		border: @border-width-s solid @color-border;
		box-shadow: @shadow-ao;
	}

	.copy {
		display: none;
	}

	/*
		Fonts
	\*----------------------------------*/

	code,
	pre {
		font-family: @font-code;
		font-size: @size-s;
	}
}

.Markdown___narrow {
	text-align: left;
}
</style>
