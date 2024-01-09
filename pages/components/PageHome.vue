<script setup lang="ts">
import type { Ref, ComponentPublicInstance } from 'vue';

import PageHomeProjects from './PageHomeProjects.vue';
import PageHomeExpertise from './PageHomeExpertise.vue';
import PageHomeBio from './PageHomeBio.vue';
import PageHomeContact from './PageHomeContact.vue';
import GrungeHeading from './GrungeHeading.vue';
import BackTop from '@theme/components/BackTop.vue';

import { computed, onMounted, onUnmounted, ref } from 'vue';

import { anchorIds } from '@theme/components/composables/anchorIds';

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
	<main
		:class="$style.HomePage"
		:ref="(element) => { containerDiv = element as Element }"
	>
		<div
			:ref="(element: Element | ComponentPublicInstance | null) => {
			hero = element as Element;
		}"
			:class="$style.Hero"
		>
			<h1 :class="$style.Hero_titleContainer">
				<span :class="$style.Hero_title">Kostiantyn Rudenko</span>
				<span :class="$style.Hero_subtitle">software engineer</span>
			</h1>
		</div>
		<div
			tabindex="-1"
			:id="anchorIds.page.content"
			:class="$style.Main"
		>
			<div>
				<PageHomeBio />
			</div>
			<PageHomeExpertise :class="$style.Main_unpad" />
			<GrungeHeading
				text="My projects"
				:class="$style.Main_unpad"
			/>
			<PageHomeProjects
				:dummies="8"
				:class="$style.Main_unpad"
			/>
			<GrungeHeading
				text="Contact me"
				:class="$style.Main_unpad"
			/>
			<PageHomeContact />
			<BackTop :class="$style.BackTop" />
		</div>
	</main>
</template>

<style module lang="less">
@import '@vitepress/theme/style/variables.less';
@import '@vitepress/theme/style/mixins.less';

/*
	Z-index
\*----------------------------------*/

.Main {
	position: relative;
	z-index: 1;
}

.BackTop {
	z-index: 2;
}

/*
	Main section
\*----------------------------------*/

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

	background-color: @color-primary-hero;
	box-shadow: 0rem 0rem 100rem inset #0006;

	filter: brightness(v-bind('heroBrightness'));
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

.Main {
	flex-grow: 1;

	padding: @gap*4;
	padding-bottom: 0rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	box-shadow: @shadow-l;
	background-color: @color-white;

	& > * {
		flex-shrink: 0;
		max-width: 1200rem;
		height: max-content;
		margin-bottom: @gap*4;
	}

	& > :last-child {
		margin-bottom: 0rem;
	}
}

/*
	Responsive
\*----------------------------------*/

@media screen and (width < 50em) {
	.Hero {
		display: none;
	}

	.Main {
		padding: @Main-padding-horizontal-compact;
		padding-top: @Main-padding-horizontal-compact * (3/2);
		padding-bottom: 0rem;
	}
}

@media screen and (width < 20em) {
	.Hero {
		display: none;
	}

	.Main {
		padding-left: @Main-padding-horizontal-compact;
		padding-right: @Main-padding-horizontal-compact;
	}

	.Main_unpad {
		margin-left: 0rem - @Main-padding-horizontal-compact;
		margin-right: 0rem - @Main-padding-horizontal-compact;
		width: calc(100% + @Main-padding-horizontal-compact * 2);
	}
}
</style>
