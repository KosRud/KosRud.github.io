<script lang="ts" setup>
import { ref, computed, Ref } from 'vue';
import { useStore } from './pinia/store';

import {
	AdaptiveStage,
	useAdaptivePreference,
} from './composables/adaptiveStages';

const store = useStore();

import LayoutHeaderNavItem from './LayoutHeaderNavItem.vue';
import { useResizeObserver } from './composables/resizeObserver';

const itemList: Ref<Element | null> = ref(null);
const adaptivePreference = useAdaptivePreference();
handleAdaptivePeference();

const visibility = computed(() => {
	return store.adaptiveStage == AdaptiveStage.full ? 'visible' : 'hidden';
});

function handleAdaptivePeference() {
	useResizeObserver(updateAdaptivePreference, () => itemList.value, true);
}

function updateAdaptivePreference() {
	adaptivePreference.value.requestedStage = getAdaptivePreference();
}

function getAdaptivePreference() {
	if (!itemList.value) {
		console.error('Top navigation bar item list not found.');
		return AdaptiveStage.full;
	}

	const lastItem = itemList.value.lastElementChild;
	if (!lastItem) {
		console.warn('Top navigation bar has no items.');
		return AdaptiveStage.full;
	}

	if (
		lastItem.getBoundingClientRect().right >
		itemList.value.getBoundingClientRect().right
	) {
		return AdaptiveStage.compact;
	}

	return AdaptiveStage.full;
}
</script>

<template>
	<nav
		:class="$style.HeaderNav"
		aria-label="Main menu"
	>
		<ul
			:ref="
                (element) => {
                    itemList = element as Element;
                }
            "
		>
			<LayoutHeaderNavItem
				:nav-item="navItem"
				v-for="navItem in store.navMain"
			/>
		</ul>
	</nav>
</template>

<style module lang="less">
@import '../style/variables/index.less';

.HeaderNav {
	> ul {
		display: flex;
		flex-direction: row;
		justify-content: start;
		height: 100%;
		gap: @gap;
		padding-top: @HeaderNav-padding-vertical;
		padding-bottom: @HeaderNav-padding-vertical;
	}
	visibility: v-bind(visibility);
}
</style>
