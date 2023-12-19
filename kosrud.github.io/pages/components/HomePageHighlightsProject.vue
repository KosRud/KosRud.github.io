<script setup lang="ts">
import HyperLink from '../../.vitepress/theme/components/HyperLink.vue';

import { Ref, ref, computed } from 'vue';

import { useResizeObserver } from '../../.vitepress/theme/components/composables/resizeObserver';
import { pxToRem } from '../../.vitepress/theme/components/composables/unitConverter';

const projectLinkTypes = ['npm', 'docs', 'examples', 'paper', 'preprint'];
type ProjectLinks = Record<(typeof projectLinkTypes)[number], string>;

const props = defineProps<{
	title: string;
	images?: { url: string; title: string }[];
	github?: string;
	links?: ProjectLinks;
}>();

const links = computed(() => {
	if (!props.links) {
		return null;
	}

	const result: ProjectLinks = {};

	for (const name of projectLinkTypes) {
		const url = props.links[name];
		if (url) {
			result[name] = url;
		}
	}

	return result;
});

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
				<div>
					<github-stars
						:repo="props.github"
						v-if="props.github"
					/>
				</div>
				<section
					v-if="links"
					aria-label="links"
				>
					<template v-for="(url, name) in links">
						<HyperLink :href="url">
							{{ name }}
						</HyperLink>
						<span :class="$style.Project_linkSeparator">|</span>
					</template>
				</section>
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

	box-shadow: @shadow-s;
	border-radius: @gap*0.5;
	overflow: hidden;
}

.Project_descriptionContainer {
	flex: 1 1 200rem;
}

.Project_linkSeparator {
	&:last-child {
		display: none;
	}
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
	div,
	section,
	iframe,
	img,
	figure {
		margin-bottom: @gap*1.5;
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
