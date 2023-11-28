<script lang="ts" setup>

import { useData, useRoute } from "vitepress";
import { computed } from "vue";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch, UrlMatch } from "./composables/urlMatch";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, } = useData<ThemeConfig>();
const route = useRoute();

const urlActive = (url: string) => {
	return urlMatch(route.path, url) != UrlMatch.no;
};

const sideNav = computed(() => {
	const navItems =
		site.value.themeConfig.nav.find((navItem) => {
			const match = urlMatch(route.path, navItem.url);
			return [UrlMatch.inside, UrlMatch.full].includes(match);
		})?.children ?? [];
	return navItems;
});

const topLevelNavTitle = computed(() => {
	return (
		site.value.themeConfig.nav.find((navItem) => {
			const match = urlMatch(route.path, navItem.url);
			return [UrlMatch.inside, UrlMatch.full].includes(match);
		})?.title ?? ""
	);
});

</script>

<template>
	<nav :class="$style.SideNav">
		<h2 :class="$style.SideNav_title">
			{{ topLevelNavTitle }}/
		</h2>
		<ul>
			<li v-for="navItem in sideNav" :class="[
				$style.SideNav_item,
				$style.SideNav_item___level1,
				urlActive(navItem.url) ? [$style.active] : '',
			]">
				<a :href="navItem.url" :class="[
					$style.SideNav_itemTitle,
					$style.SideNav_itemTitle___level1,
				]">{{ navItem.title }}</a>
				<ul v-if="urlActive(navItem.url)">
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
					<li :class="[
						$style.SideNav_item,
						$style.SideNav_item___level2,
					]">
						<a href="#" :class="[
							$style.SideNav_itemTitle,
							$style.SideNav_itemTitle___level2,
						]">Some page name</a>
					</li>
				</ul>
			</li>
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

	&>ul {
		flex: 1 0 auto;
	}

	visibility: v-bind("sideNav.length == 0 ? 'hidden' : 'visible'");
}

.SideNav_title {
	font-weight: bold;
	margin-left: auto;
	margin-right: auto;
}

.SideNav_item {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding-top: @NavItem-padding-vertical;
	padding-bottom: @NavItem-padding-vertical;

	&::before {
		content: none;
	}

	&>ul {
		margin-left: @gap;
	}
}

.SideNav_itemTitle,
.SideNav_itemTitle:link,
.SideNav_itemTitle:visited {
	color: @color-black;
	text-decoration: inherit;
	display: flex;
	flex-direction: row;
	align-items: center;

	&::before {
		content: "";
		height: 1em;
		width: 1em;
		background-image: url("/assets/icons/chevron-right.svg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-right: @gap*0.5;
		margin-left: @gap*0.25;
		visibility: hidden;
	}

	&:hover {
		color: @color-primary;
		font-weight: bold;
	}
}

.Toc {
	position: sticky;
	top: 0rem;
	flex: 1 0 200rem;
	max-width: max-content;
	max-height: 90%;
	align-self: flex-start;

	padding: @Toc-to-Main-gap @gap;
	display: flex;
	flex-direction: column;
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


///////

li:nth-child(1) .SideNav_itemTitle___level1 {
	font-weight: bold;

	&::before {
		visibility: visible;
	}
}

li:nth-child(3) .SideNav_itemTitle___level2 {
	&::before {
		visibility: visible;
	}
}
</style>