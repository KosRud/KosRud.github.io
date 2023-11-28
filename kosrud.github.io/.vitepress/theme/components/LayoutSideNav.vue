<script lang="ts" setup>

import { useData, useRoute } from "vitepress";
import { computed } from "vue";

import LayoutSideNavItem from "./LayoutSideNavItem.vue";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch } from "./composables/urlMatch";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, } = useData<ThemeConfig>();
const route = useRoute();

const sideNav = computed(() => {
	const navItems =
		site.value.themeConfig.nav.find((navItem) => {
			return urlMatch(route.path, navItem.url).soft;
		})?.children ?? [];
	return navItems;
});

const topLevelNavTitle = computed(() => {
	return (
		site.value.themeConfig.nav.find((navItem) => {
			const match = urlMatch(route.path, navItem.url);
			return match.soft;
		})?.title ?? ""
	);
});

</script>

<template>
	<nav :class="$style.SideNav">
		<h2 :class="$style.SideNav_title">
			{{ topLevelNavTitle }}/
		</h2>
		<ul :class="$style.SideNav_itemList">
			<LayoutSideNavItem :nav-item="navItem" v-for="navItem in sideNav" />
		</ul>
	</nav>
</template>

<style module lang="less">
@import "../style/variables/index.less";


.SideNav {
	width: @SideNav-width;

	display: flex;
	flex-direction: column;
	justify-content: stretch;
	overflow-y: auto;
	padding-top: @Toc-to-Main-gap;
	gap: @gap;

	visibility: v-bind("sideNav.length == 0 ? 'hidden' : 'visible'");
}

.SideNav_title {
	flex: 0 0 max-content;

	font-weight: bold;
	margin-left: auto;
	margin-right: auto;
}

.SideNav_itemList {
	flex: 1 1;

	padding-left: @gap;
}

/*
	Font-size
\*----------------------------------*/

.SideNav_title {
	font-size: @size-l;
}

/*
	Font-family
\*----------------------------------*/

.SideNav_title {
	font-family: @font-ui;
}
</style>