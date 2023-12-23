<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { useStore } from './pinia/store';

const store = useStore();

import LayoutHeaderNavItem from './LayoutHeaderNavItem.vue';

const itemList: Ref<Element | null> = ref(null);
const nav: Ref<Element | null> = ref(null);
</script>

<template>
	<nav
		:class="$style.HeaderNav"
		aria-label="Main menu"
		:ref="
                (element) => {
                    nav = element as Element;
                }
            "
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
