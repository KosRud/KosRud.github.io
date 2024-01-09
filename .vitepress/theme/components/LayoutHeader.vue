<script lang="ts" setup>
import LayoutHeaderNav from './LayoutHeaderNav.vue';
import LayoutHeaderButtonBurger from './LayoutHeaderButtonBurger.vue';
import LayoutHeaderSkipLink from './LayoutHeaderSkipLink.vue';

import { useStore } from './pinia/store';
import { Ref, ref, onUnmounted, onMounted } from 'vue';

import { useResizeObserver } from './composables/resizeObserver';
import { anchorIds } from './composables/anchorIds';

const store = useStore();

const container: Ref<Element | null> = ref(null);
const logo: Ref<Element | null> = ref(null);
const navWrapper: Ref<Element | null> = ref(null);
const logoVisibility = ref('visible');

const compactBurgers = ref(false);
handleCompactBurgers();

function handleCompactBurgers() {
	let media: MediaQueryList | null = null;

	const mediaCallback = (event: MediaQueryListEvent) => {
		compactBurgers.value = event.matches;
	};

	onMounted(() => {
		media = window.matchMedia('screen and (width < 20rem)');
		media.addEventListener('change', mediaCallback);
		compactBurgers.value = media.matches;
	});

	onUnmounted(() => media?.removeEventListener('change', mediaCallback));
}

useResizeObserver(
	() => {
		onResizeHandleLogo();
		onResizeHandleNav();
	},
	() => container.value,
	true
);

function onResizeHandleLogo() {
	if (!logo.value) {
		console.error('logo ref not set');
		return;
	}

	const sibling = logo.value.nextElementSibling;
	if (!sibling) {
		return;
	}

	if (
		logo.value.getBoundingClientRect().right >
		sibling.getBoundingClientRect().left
	) {
		logoVisibility.value = 'hidden';
	} else {
		logoVisibility.value = 'visible';
	}
}

function onResizeHandleNav() {
	if (!navWrapper.value) {
		console.error('Header_navWrapper ref not set');
		return;
	}

	const lastChild = navWrapper.value.lastElementChild;

	if (!lastChild) {
		return;
	}

	store.isHeaderNavOverlapping =
		lastChild.getBoundingClientRect().right >
		navWrapper.value.getBoundingClientRect().right;
}
</script>

<template>
	<header
		:class="$style.Header"
		role="banner"
		:ref="(element) => {container = element as Element}"
	>
		<LayoutHeaderSkipLink
			:class="$style.Header_skipLink"
			title="content"
			:anchor-id="anchorIds.page.content"
		/>
		<template v-if="!store.isCompactModeActive">
			<LayoutHeaderSkipLink
				:class="$style.Header_skipLink"
				title="submenu"
				:anchor-id="anchorIds.page.subMenu"
				v-if="store.navSecondary.length"
			/>
			<LayoutHeaderSkipLink
				:class="$style.Header_skipLink"
				title="outline"
				:anchor-id="anchorIds.page.toc"
				v-if="store.tocItems.length"
			/>
		</template>
		<div
			:class="$style.Header_logoWrapper"
			:ref="(element) => {logo = element as Element}"
		>
			<img
				:class="$style.Header_logo"
				src="/favicon.svg"
				alt="website logo"
				title="website logo"
				:style="{ aspectRatio: 1 }"
			/>
		</div>
		<div :class="$style.Header_spacer"></div>
		<div
			:class="$style.Header_navWrapper"
			:ref="(element) => {navWrapper = element as Element}"
		>
			<LayoutHeaderNav
				:style="{
					visibility: store.isCompactModeActive
						? 'hidden'
						: 'visible',
				}"
				:class="$style.Header_nav"
			/>
		</div>
		<LayoutHeaderButtonBurger
			:class="$style.BurgerToc"
			:title="'On this page'"
			:is-open="store.isMobileNavTocOpen"
			:toggle-is-open="
				() => {
					store.isMobileNavTocOpen = !store.isMobileNavTocOpen;
				}
			"
			:compact="compactBurgers"
			:num-lines="3"
		/>
		<LayoutHeaderButtonBurger
			:class="$style.BurgerMenu"
			:title="'Menu'"
			:is-open="store.isMobileNavPagesOpen"
			:toggle-is-open="
				() => {
					store.isMobileNavPagesOpen = !store.isMobileNavPagesOpen;
				}
			"
			:compact="compactBurgers"
			:num-lines="5"
		/>
	</header>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

@Header-logo-size: @Header-height - @gap;
@Header-gap: @gap;

/*
	Z-index
\*----------------------------------*/

.Header {
	position: relative;
}

.Header_skipLink {
	position: absolute;
	z-index: 1;
}

/*
	Main section
\*----------------------------------*/

.Header {
	background-color: @color-background-dark;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: end;
	gap: @Header-gap;
	padding: 0rem @Header-gap;
	padding-left: @Header-logo-size + @Header-gap;

	height: @Header-height;

	position: relative; // for logo
}

.Header_skipLink {
	left: @gap*0.5;
	top: @gap*0.5;

	opacity: 0%;
	pointer-events: none;
	&:focus {
		opacity: 100%;
		pointer-events: all;
	}
}

.Header_logoWrapper {
	height: @Header-logo-size;
	aspect-ratio: 1;

	display: flex;
	justify-content: stretch;
	align-items: stretch;

	position: absolute;
	top: 50%;
	left: @Header-gap;
	transform: translateY(-50%);

	visibility: v-bind('logoVisibility');
}

.Header_logo {
	box-shadow: @shadow;
}

.Header_spacer {
	flex: 0 1 calc(27% - 300rem);
	min-width: 0rem;
	max-width: @gap*16;

	// width: @gap;
}

.Header_navWrapper {
	flex: 1 1 fit-content;
	align-items: stretch;
	display: flex;
	flex-direction: row;
	justify-content: start;
}

.Header_nav {
	flex: 0 0 fit-content;
	height: 100%;
}

.BurgerMenu {
	flex: 0 0 auto;
	height: 100%;
	visibility: v-bind('store.isCompactModeActive ? "visible" : "hidden"');
}

.BurgerToc {
	flex: 0 0 auto;
	height: 100%;
	visibility: v-bind(
		'store.isCompactModeActive && store.tocItems.length ? "visible" : "hidden"'
	);
}

/*
	Font-family
\*----------------------------------*/

.Header {
	font-family: @font-techy;
}

/*
	UI shadows
\*----------------------------------*/

.Header {
	box-shadow: @shadow;
}
</style>
