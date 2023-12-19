<script setup lang="ts">
import type { Ref, ComponentPublicInstance } from 'vue';

import HomePageHighlights from './PageHomeHighlights.vue';
import HomePageFeatures from './PageHomeFeatures.vue';
import HomePageBio from './PageHomeBio.vue';
import HomePageContact from './PageHomeContact.vue';

import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useResizeObserver } from '@vitepress/theme/components/composables/resizeObserver';
import { pxToRem } from '@vitepress/theme/components/composables/unitConverter';

const hero: Ref<Element | null> = ref(null);
const scrollY = ref(0);
const heroBrightness = computed(() => {
	if (!hero.value) {
		return 1;
	}

	return Math.max(1 - (scrollY.value / hero.value.clientHeight) * 0.5, 0);
});
const containerDiv: Ref<Element | null> = ref(null);
handleScrolling();

const compactThresholdRem = 800;
const isCompact = ref(false);
useResizeObserver(
	() => {
		if (!containerDiv.value) {
			console.error('homepage container div reference not set');
			return;
		}

		const width = pxToRem(containerDiv.value.clientWidth);

		isCompact.value = width < compactThresholdRem;
	},
	() => containerDiv.value,
	true
);

function handleScrolling() {
	function onScroll() {
		scrollY.value = window.scrollY;
	}

	onMounted(() => {
		document.addEventListener('scroll', onScroll, { passive: true });
	});
	onUnmounted(() => {
		document.removeEventListener('scroll', onScroll);
	});
}
</script>

<template>
	<div
		:class="[$style.HomePage, isCompact ? $style.HomePage___compact : '']"
		:ref="(element) => { containerDiv = element as Element }"
	>
		<div
			:ref="(element: Element | ComponentPublicInstance | null) => {
			hero = element as Element;
		}"
			:class="$style.Hero"
			v-if="!isCompact"
		>
			<img
				:class="$style.Hero_photo"
				src="/assets/photo.png"
			/>
			<div :class="$style.Hero_titleContainer">
				<span :class="$style.Hero_title">Kostiantyn Rudenko</span>
				<span :class="$style.Hero_subtitle">software engineer</span>
			</div>
		</div>
		<main :class="$style.ContentWrapper">
			<HomePageBio :class="$style.Bio" />
			<HomePageFeatures />
			<HomePageHighlights :dummies="8" />
			<HomePageContact />
		</main>
	</div>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables/index.less';
@import '@vitepress/theme/style/mixins/index.less';

.HomePage {
	flex-grow: 1;

	display: flex;
	flex-direction: column;
}

.Hero {
	flex: 0 0 auto;
	position: sticky;
	top: @Header-height;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	color: white;
	font-family: @font-hero;

	background-color: @color-primary-muted;
	box-shadow: 0rem 0rem 100rem inset #0006;

	filter: brightness(v-bind(heroBrightness));
}

.Hero_titleContainer {
	display: flex;
	flex-direction: column;
	align-items: end;
	justify-content: center;

	text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
	line-height: 1.2;
	margin: @gap*3;
}

.Hero_title {
	font-weight: bold;
	font-size: @size-hero;
	letter-spacing: -0.03em;
}

.Hero_subtitle {
	font-size: @size-hero-s;
}

.Hero_photo {
	aspect-ratio: 1;
	object-fit: cover;
	object-position: 0% 30%;
	box-shadow: @shadow-l;
	border-radius: @inf;

	display: none;
}

.ContentWrapper {
	flex-grow: 1;

	padding: @gap*4;
	padding-bottom: @gap*8;

	display: flex;
	flex-direction: column;
	align-items: center;

	box-shadow: @shadow-l;
	background-color: @color-white;

	& > * {
		flex-shrink: 0;
		width: 100%;
		max-width: 1200rem;
		height: max-content;
		margin-bottom: @gap*4;
	}
}

/*
	Responsive
\*----------------------------------*/

.HomePage___compact {
	.ContentWrapper {
		padding: @Main-padding-horizontal-compact;
		padding-top: @Main-padding-horizontal-compact* (3/2);
	}
}

/*
	Z-index
\*----------------------------------*/

.ContentWrapper {
	position: relative;
	z-index: 1;
}
</style>
