<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useStore } from './pinia/store';

const store = useStore();

import LayoutHeaderNavItem from './LayoutHeaderNavItem.vue';
import { useResizeObserver } from './composables/resizeObserver';

const itemList: Ref<Element | null> = ref(null);
handleAdaptivePeference();

function handleAdaptivePeference() {
	useResizeObserver(
		() => {
			store.isHeaderNavOverlapping = isOverlapping();
		},
		() => itemList.value,
		true
	);
}

function isOverlapping() {
	if (!itemList.value) {
		console.error('Top navigation bar item list not found.');
		return false;
	}

	const lastItem = itemList.value.lastElementChild;
	if (!lastItem) {
		// not an error, because navItems are generated after mounting
		// can't generate before mounting because hydration missmatch
		return false;
	}

	if (
		lastItem.getBoundingClientRect().right >
		itemList.value.getBoundingClientRect().right
	) {
		return true;
	}

	return false;
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
@import '@theme/style/variables.less';

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
}
</style>
