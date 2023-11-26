<script setup lang="ts">
import type { ComponentPublicInstance, Ref } from "vue";
import type { ThemeConfig } from "../ThemeConfig";

import { ref, provide } from "vue";
import { useData } from "vitepress";

import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";
import LayoutOverlay from "./LayoutOverlay.vue";

import visibleRectSymbol from "./util/symbolVisibleRect";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData<ThemeConfig>();

const pageContent: Ref<ComponentPublicInstance | null> = ref(null);

const visibleRect: Ref<Element | null> = ref(null);
provide(visibleRectSymbol, visibleRect);
</script>

<template>
	<div :class="$style.Layout">
		<main :class="$style.Main" v-if="!frontmatter.hero">
			<header :class="$style.CurrentLocation">
				<YouAreHere />
			</header>
			<MarkdownWrapper>
				<Content :ref="(component: ComponentPublicInstance | null) => {
					pageContent = component;
				}
					" />
			</MarkdownWrapper>
		</main>
		<main v-else :class="$style.HeroMain">
			<Content />
		</main>

		<LayoutOverlay :page-content="pageContent" />

		<div :class="$style.VisibleRectMarker" :ref="(element: Element | ComponentPublicInstance | null) => {
			visibleRect = element as Element;
		}
			"></div>
	</div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.VisibleRectMarker {
	pointer-events: none;
	position: fixed;
	left: 0rem;
	right: 0rem;
	bottom: 0rem;
	top: @Header-height;
}



.CurrentLocation {
	margin-bottom: @gap*2;
}

.Layout {
	width: 100%;
	min-height: 100%;
	background-color: @color-background;
	display: flex;
	flex-direction: column;
	justify-content: stretch;
}

.Main {
	flex-grow: 1;
	margin-top: @Header-height;
	margin-left: @SideNav-width;

	max-width: @content-width + @Toc-to-Main-gap*2; // account for padding

	padding: @Toc-to-Main-gap;
	background-color: @color-white;
	border-right: @width-s solid @color-border;
	border-left: @width-s solid @color-border;

	// box-shadow: @shadow-s;
}

.HeroMain {
	flex-grow: 1;
	margin-top: @Header-height;

	display: flex;
	flex-direction: column;
	justify-content: stretch;

	// vitepress <Content> creates 2 divs
	>div,
	>div>div {
		flex-grow: 1;
		display: flex;
		justify-content: stretch;
	}
}
</style>

