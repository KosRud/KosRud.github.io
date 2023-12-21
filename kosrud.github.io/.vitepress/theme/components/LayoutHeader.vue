<script lang="ts" setup>
import { useStore } from './pinia/store';
import { Ref, ref } from 'vue';

import LayoutHeaderNav from './LayoutHeaderNav.vue';
import LayoutHeaderButtonBurger from './LayoutHeaderButtonBurger.vue';
import { useResizeObserver } from './composables/resizeObserver';

const store = useStore();

const container: Ref<Element | null> = ref(null);
const logo: Ref<Element | null> = ref(null);
const logoVisibility = ref('visible');

useResizeObserver(
	() => {
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
			console.log('hide');
		} else {
			logoVisibility.value = 'visible';
		}
	},
	() => container.value,
	true
);
</script>

<template>
	<header
		:class="$style.Header"
		role="banner"
		:ref="(element) => {container = element as Element}"
	>
		<a
			href="/"
			:class="$style.Header_logoWrapper"
			:ref="(element) => {logo = element as Element}"
		>
			<img
				:class="$style.Header_logo"
				src="/favicon.svg"
				alt="website logo"
				title="website logo"
			/>
		</a>
		<template v-if="!store.isCompactModeActive">
			<div :class="$style.Header_spacer"></div>
			<LayoutHeaderNav :class="$style.HeaderNav" />
		</template>
		<template v-else>
			<LayoutHeaderButtonBurger
				:class="$style.BurgerToc"
				:title="'On this page'"
				:is-open="store.isMobileNavTocOpen"
				:toggle-is-open="
					() => {
						store.isMobileNavTocOpen = !store.isMobileNavTocOpen;
					}
				"
				:num-lines="3"
				v-if="store.tocItems.length"
			/>
			<LayoutHeaderButtonBurger
				:class="$style.BurgerMenu"
				:title="'Menu'"
				:is-open="store.isMobileNavPagesOpen"
				:toggle-is-open="
					() => {
						store.isMobileNavPagesOpen =
							!store.isMobileNavPagesOpen;
					}
				"
				:num-lines="5"
			/>
		</template>
	</header>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

@Header-logo-size: @Header-height - @gap;
@Header-gap: @gap;

.Header {
	background-color: @color-background-dark;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: @Header-gap;
	padding: 0rem @Header-gap;

	height: @Header-height;

	position: relative; // for  burger's absolute
}

.Header_logoWrapper {
	height: @Header-logo-size;
	display: flex;
	justify-content: stretch;
	align-items: stretch;

	padding-right: @gap;
	visibility: v-bind(logoVisibility);
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

.HeaderNav {
	flex: 1 0 fit-content;
}

.BurgerMenu {
	position: absolute;
	top: 0rem;
	right: 0rem;
	height: 100%;
}

.BurgerToc {
	position: absolute;
	top: 0rem;
	right: 120rem;
	height: 100%;
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
