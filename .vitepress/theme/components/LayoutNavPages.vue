<script lang="ts" setup>
import LayoutNavPagesItem from './LayoutNavPagesItem.vue';

import { computed, onMounted, ref } from 'vue';
import { useData, useRoute } from 'vitepress';

import { ThemeConfig } from '../ThemeConfig';
import { urlMatch } from './composables/urlMatch';
import { useOneChildOpen } from './composables/oneChildOpen';
import { useStore } from './pinia/store';

// https://vitepress.dev/reference/runtime-api#usedata
const { site } = useData<ThemeConfig>();

const props = defineProps<{ mobile?: boolean }>();
const route = useRoute();
const store = useStore();

const navItems = computed(() => {
	return props.mobile ? store.navMain : store.navSecondary;
});

const isMounted = ref(false);

onMounted(() => {
	isMounted.value = true;
});

const title = computed(() => {
	if (props.mobile) {
		return 'Menu';
	}

	return (
		site.value.themeConfig.nav.find((navItem) => {
			const match = urlMatch(route.path, navItem.url);
			return match.inside;
		})?.title ?? ''
	).concat('/');
});

const oneChildOpen = useOneChildOpen(navItems.value.map((item) => item.url));
for (const child of navItems.value) {
	if (urlMatch(route.path, child.url).inside) {
		oneChildOpen.toggleChild(child.url);
	}
}
function onItemClick(navItem: (typeof navItems.value)[number]) {
	oneChildOpen.toggleChild(navItem.url);
	if (!navItem.children) {
		store.isMobileNavPagesOpen = false;
	}
}
</script>

<template>
	<nav
		:aria-label="`Submenu: ${title}`"
		:class="[
			$style.NavPages,
			props.mobile ? $style.NavPages___mobile : '',
		]">
		<template v-if="navItems.length > 0">
			<h2 aria-hidden="true" :class="$style.NavPages_title">
				{{ title }}
			</h2>
			<ul :class="$style.NavPages_itemList">
				<LayoutNavPagesItem
					:starting-level="props.mobile ? 0 : 1"
					:nav-item="navItem"
					v-for="navItem in navItems"
					:is-open="oneChildOpen.isChildOpen(navItem.url)"
					@nav-item-toggle="onItemClick(navItem)"
					:is-nav-pages-loaded="isMounted" />
			</ul>
		</template>
	</nav>
</template>

<style module lang="less">
@import '@theme/style/variables.less';

.NavPages {
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: stretch;
	overflow-y: auto;
	gap: @gap;
	padding-left: @Aside-padding-horizontal;
	padding-right: @Aside-padding-horizontal;
	padding-bottom: @Aside-padding-bottom;
	padding-top: @Aside-padding-top;
}

.NavPages_title {
	width: 100%;
	flex: 0 0 fit-content;

	text-align: center;
	font-weight: bold;

	font-family: @font-techy;
}

.NavPages_itemList {
	flex: 1 1;
	overflow: auto;
}

/*
	Font-size
\*----------------------------------*/

.NavPages_title {
	font-size: @size-l;
}

/*
	Responsive
\*----------------------------------*/

.NavPages___mobile {
	.NavPages_title {
		font-size: @size-xl;
	}
}
</style>
