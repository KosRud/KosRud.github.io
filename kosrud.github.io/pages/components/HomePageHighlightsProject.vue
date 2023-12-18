<script setup lang="ts">
import { Ref, ref } from 'vue';

import { useResizeObserver } from '../../.vitepress/theme/components/composables/resizeObserver';
import { pxToRem } from '../../.vitepress/theme/components/composables/unitConverter';

const props = defineProps<{
	title: string;
	images?: { url: string; title: string }[];
}>();

const thresholdWidthRem = 550;

const container: Ref<Element | null> = ref(null);
const compact = ref(false);
useResizeObserver(
	() => {
		if (!container.value) {
			console.error('project highlight container ref not set');
			return;
		}

		const width = pxToRem(container.value.clientWidth);
		compact.value = width < thresholdWidthRem;
	},
	() => container.value,
	true
);
</script>

<template>
	<div
		:class="[$style.Project, compact ? $style.Project___compact : '']"
		:ref="(element) => { container = element as Element }"
	>
		<div :class="$style.Project_descriptionContainer">
			<h3 :class="$style.Project_title">
				{{ props.title }}
			</h3>
			<div :class="$style.Project_description">
				<slot />
			</div>
		</div>
		<section
			aria-label="screenshots"
			v-if="props.images"
			:class="$style.Project_images"
		>
			<div
				:class="$style.Project_imageWrapper"
				v-for="image in props.images"
			>
				<img
					:src="image.url"
					:alt="image.title"
					:title="image.title"
				/>
			</div>
		</section>
	</div>
</template>

<style lang="less" module>
@import '../../.vitepress/theme/style/variables/index.less';
@import '../../.vitepress/theme/style/mixins/index.less';

@Project-gap: @gap*1.5;

.Project {
	min-height: 200rem;

	display: flex;
	flex-direction: row;
	justify-items: stretch;
	align-items: stretch;

	border: @border-width-s solid @color-border;

	line-height: @line-height-s;
}

.Project_descriptionContainer {
	flex: 1 1 200rem;

	// background-color: #a003;
}

.Project_images {
	flex: 0 0 250rem;

	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: stretch;
	align-content: start;
	flex-wrap: wrap;
	gap: @gap*0.5;
}

.Project_imageWrapper {
	flex: 0 0 100%;

	> * {
		max-width: 100%;
		max-height: 200rem;
		margin-left: auto;
		display: block;
	}
}

.Project_title {
	@Project_title-padding: @gap*0.5;
	@Project_title-clip: @gap;

	margin-top: -@border-width-s;
	margin-left: -@border-width-s;

	min-width: min(220rem, 100%);
	width: fit-content;

	padding: @Project_title-padding;
	padding-right: @Project_title-padding + @Project_title-clip;
	background-color: @color-background-dark;

	text-align: left;
	color: @color-white;
	clip-path: polygon(
		0% 0%,
		100% 0%,
		calc(100% - @Project_title-clip) 100%,
		0% 100%
	);

	margin-bottom: @gap;
	margin-right: @Project-gap;
}

.Project_description {
	margin: @Project-gap;

	p,
	iframe,
	img,
	figure {
		&:not(:last-child) {
			margin-bottom: @gap*1.5;
		}
	}

	a {
		font-weight: bold;
	}
}

/*
	Responsive
\*----------------------------------*/

.Project___compact {
	flex-wrap: wrap;
	justify-content: stretch;

	.Project_descriptionContainer {
		flex: 1 1 100%;
	}

	.Project_images {
		flex: 1 1 100%;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		margin-bottom: @Project-gap;
		margin-left: @Project-gap;
		margin-right: @Project-gap;
	}

	.Project_imageWrapper {
		flex: 1 1 200rem;

		> * {
			margin-right: auto;
		}
	}
}
</style>
