<script setup lang="ts">
import { Ref, ref } from 'vue';

import { useResizeObserver } from './composables/resizeObserver';
import { useNavTrace } from './composables/navTrace';

const containerElement: Ref<Element | null> = ref(null);
const isNarrow = ref(false);
const narrowThresholdRem = 500;

const navTrace = useNavTrace();

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
		<h1>{{ navTrace[navTrace.length - 1].title }}</h1>
		<slot />
	</div>
</template>

<style lang="less" module>
@import '@theme/style/variables.less';
@import '@theme/style/mixins.less';

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
		Lists
	\*----------------------------------*/

	li {
		margin-bottom: @gap*0.5;
	}

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
	}

	h2,
	h3,
	h4 {
		margin-top: @content-gap*1.5;
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

	:global(.custom-block) {
		margin-left: @gap;
		margin-right: @gap;
		margin-top: calc(@admonition_title-height + @content-gap);

		border: @color-border solid @border-width;
		border-top: none;
		border-bottom: none;
		border-radius: 0rem 0rem @gap @gap;
		background-color: @color-background;
		padding: @admonition-padding;
		box-shadow: @shadow-s;
	}

	:global(.custom-block-title) {
		margin-left: -@gap*2;
		margin-right: -@gap*2;
		margin-top: calc(-@admonition-padding - @admonition_title-height);
		margin-bottom: @admonition-padding;

		height: @admonition_title-height;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		text-align: center;
		font-weight: bold;

		box-shadow: @shadow-s;
		border-radius: @gap;
	}

	:global(.custom-block.warning) {
		background-color: #fceccf;
		border-color: #f0b37e;

		:global(.custom-block-title) {
			background-color: #f0b37e;
		}
	}

	:global(.custom-block.tip) {
		background-color: #efe;
		border-color: #9b9;

		:global(.custom-block-title) {
			background-color: #9b9;
		}
	}

	:global(.custom-block.info) {
		border-color: hsl(204deg 70% 70%);
		background-color: hsl(204deg 66% 94%);

		:global(.custom-block-title) {
			background-color: hsl(204deg 70% 70%);
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

	@code-padding: @gap;
	@code-numbers-gap: @gap*2;
	@code-lineNumbers-width: 80rem;

	// temporary while line numbers disabled
	@code-lineNumbers-width: @code-padding;

	:global(.line-numbers-wrapper) {
		position: absolute;
		top: 0rem;
		left: 0rem;
		width: @code-lineNumbers-width;
		text-align: right;
		padding: @code-padding;
		padding-right: @code-numbers-gap;
		color: @color-black-faded-2;
		user-select: none;
	}

	:global(.line-numbers-mode) {
		position: relative;
	}

	:global(.github-dark) {
		display: none;
	}

	:global(.copy) {
		display: none;
	}

	:global(.lang) {
		background-color: @color-background;
		display: block;
		padding: @gap * 0.5 @gap;
		border-radius: @gap*0.5 @gap * 0.5 0rem 0rem;
		border: @border-width-s solid @color-border;
		display: none;
	}

	:global(.shiki) {
		padding: @code-padding;
		padding-left: @code-lineNumbers-width;
		border: @border-width-s solid @color-border;
		border-radius: @gap*0.5;
		box-shadow: @shadow-ao;
		tab-size: 4;
		text-align: left;
	}

	.copy {
		display: none;
	}

	/*
		Fonts
	\*----------------------------------*/

	code,
	pre,
	:global(.line-numbers-wrapper) {
		font-family: @font-code;
		font-size: @size-s;
	}
}

.Markdown___narrow {
	text-align: left;
}
</style>
