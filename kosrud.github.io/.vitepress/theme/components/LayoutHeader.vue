<script lang="ts" setup>
import { useStore } from './pinia/store';
import { Ref, onUpdated, ref } from 'vue';

import LayoutHeaderNav from './LayoutHeaderNav.vue';
import LayoutHeaderButtonBurger from './LayoutHeaderButtonBurger.vue';
import SiteTitle from './SiteTitle.vue';
import { AdaptiveStage } from './composables/adaptiveStages';
import { useResizeObserver } from './composables/resizeObserver';

const store = useStore();

const siteTitleContainer: Ref<Element | null> = ref(null);
const header: Ref<Element | null> = ref(null);
const siteTitleVisibility = ref('visible');

useResizeObserver(updateSiteTitleVisibility, () => header.value, true);
onUpdated(updateSiteTitleVisibility);

function updateSiteTitleVisibility() {
	if (!siteTitleContainer.value) {
		console.error('site title container reference not set');
		return;
	}

	const nextSibling = siteTitleContainer.value.nextElementSibling;

	if (!nextSibling) {
		return;
	}

	if (
		siteTitleContainer.value.getBoundingClientRect().right >=
		nextSibling.getBoundingClientRect().left
	) {
		siteTitleVisibility.value = 'hidden';
	} else {
		siteTitleVisibility.value = 'visible';
	}
}
</script>

<template>
	<header
		:class="$style.Header"
		:ref="(element) => {header = element as Element}"
		role="banner"
	>
		<div
			:class="$style.SiteTitleContainer"
			:ref="(element) => {siteTitleContainer = element as Element}"
		>
			<SiteTitle />
		</div>
		<LayoutHeaderNav
			v-if="store.adaptiveStage == AdaptiveStage.full"
			:class="$style.HeaderNav"
		/>
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
@import '../style/variables/index.less';

.SiteTitleContainer {
	flex: 0 0 fit-content;

	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: start;
	visibility: v-bind(siteTitleVisibility);
	padding-right: @gap*2;
}

.Header {
	background-color: @color-background-dark;
	display: flex;
	gap: @gap;

	height: @Header-height;

	position: relative; // for  burger's absolute
}

.Header_navLink___active {
	position: relative;

	&::after {
		position: absolute;
		content: '';
		left: @gap*0.0;
		right: @gap*0.0;
		bottom: calc(0rem - @gap);
		top: calc(0rem - @HeaderNav-padding-vertical);
		border-top: @border-width solid @color-background;
		pointer-events: none;
	}
}

.HeaderNav {
	flex: 0 0 fit-content;
	margin-right: @gap;
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
