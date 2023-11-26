<script setup lang="ts">
import type { ThemeConfig, NavItem } from "../ThemeConfig";


import { computed } from "vue";
import { useData, useRoute } from "vitepress";

import { urlMatch, UrlMatch } from "./UrlMatch.js";

const route = useRoute();
const { site, frontmatter } = useData<ThemeConfig>();

function improviseNavTitle() {
	if (frontmatter.value.title) {
		return frontmatter.value.title;
	}

	const match = route.path.match(/[^\/]+$/); // last portion of url

	if (match) {
		const fileName = match[0].replace(/\.[^.]+$/, ""); // remove extension
		return fileName.charAt(0).toUpperCase() + fileName.slice(1);
	}

	return "Unknown page";
}

const navTrace = computed((): NavItem[] => {
	if (!frontmatter.value.title) {
		console.warn(`Page has no title: ${route.path}`);
	}

	function tracePath(nav: ThemeConfig["nav"]): NavItem[] {
		for (const navItem of nav) {
			const match = urlMatch(route.path, navItem.url);
			switch (match) {
				case UrlMatch.full:
					return [navItem];
				case UrlMatch.inside:
					if (navItem.children) {
						return [navItem, ...tracePath(navItem.children)];
					}
					break;
				case UrlMatch.no:
					break;
				default:
					console.error(`Unexpected url match type: ${match}`);
			}
		}

		// navItem was not found

		const improvisedNavitem = {
			title: improviseNavTitle(),
			url: route.path,
		};

		return [improvisedNavitem];
	}

	return [
		{ title: "Home", url: "/" },
		...tracePath(site.value.themeConfig.nav),
	];
});
</script>

<template>
	<div :class="$style.YouAreHere">
		<span :class="$style.YouAreHere_title">You are here:</span>
		<template v-for="navItem in navTrace">
			<a :href="navItem?.url">{{ navItem?.title }}</a>
			<span :class="$style.NavTrace_separator">/</span>
		</template>
	</div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

.YouAreHere {
	display: flex;
	flex-wrap: wrap;

	font-weight: bold;
}

.YouAreHere_title {
	margin-right: @gap*0.5;
}

.NavTrace_separator {
	margin-left: @gap*0.25;
	margin-right: @gap*0.25;

	&:last-child {
		display: none;
	}
}
</style>
