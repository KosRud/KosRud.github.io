<script setup lang="ts">
import { anchorIds } from './composables/anchorIds';
import arrowCircled from './assets/icons/ui/arrowCircled/icon.svg';
</script>

<template>
	<div :class="$style.BackToTop">
		<a
			:class="$style.BackToTop_link"
			:href="`#${anchorIds.page.root}`"
			><img
				alt="upward arrow"
				:class="$style.Arrow"
				:src="arrowCircled"
			/>Back to top</a
		>
	</div>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.BackToTop {
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0rem;

	display: block;
	width: min(@gap*32, 100%);

	text-align: center;
	padding: @gap;

	outline: @border-width-s solid @color-border;
	border-radius: @gap @gap 0rem 0rem;

	background-color: @color-background;
	box-shadow: @shadow-s;
}

.BackToTop_link {
	font-size: @size-l;
	font-weight: bold;
	font-family: @font-techy;
	text-decoration: none;

	&:link,
	&:visited {
		color: @color-text-faded-1;
	}
}

.Arrow {
	width: 2em;
	vertical-align: middle;
	margin-right: @gap*0.5;
	margin-left: @gap*0.5;
}
</style>
