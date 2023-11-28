<script lang="ts" setup>


import { useData, useRoute } from "vitepress";

import type { ThemeConfig } from "../ThemeConfig";
import { urlMatch, UrlMatch } from "./composables/urlMatch";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, } = useData<ThemeConfig>();
const route = useRoute();


</script>

<template>
	<header :class="$style.Header">
		<a :class="$style.SiteTitleContainer" href="/">
			<div>
				<span :class="$style.SiteTitle">
					{{ site.title }}</span>
				<span :class="$style.SiteDescription">
					{{ site.description }}</span>
			</div>
		</a>
		<nav :class="$style.TopNav">
			<ul>
				<li v-for="navItem in site.themeConfig.nav" :class="$style.NavItem">
					<a :class="[
						$style.NavItem_link,
						[UrlMatch.full, UrlMatch.inside].includes(
							urlMatch(route.path, navItem.url)
						)
							? $style.Header_navLink___active
							: '',
					]" :href="navItem.url">{{ navItem.title }}</a>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style module lang="less">
@import "../style/variables/index.less";


.Header {
	background-color: @color-background-dark;
	display: flex;
	gap: @gap;

	height: @Header-height;
}

.TopNav {
	>ul {
		display: flex;
		flex-direction: row;
		height: 100%;
		gap: @gap;
		padding-top: @TopNav-gap-vertical;
		padding-bottom: @TopNav-gap-vertical;
	}
}

.NavItem {
	&::before {
		content: none;
	}

	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: center;
}

.Header_navLink___active:link {
	position: relative;

	&::after {
		position: absolute;
		content: "";
		left: @gap*0.0;
		right: @gap*0.0;
		bottom: calc(0rem - @gap);
		top: calc(0rem - @TopNav-gap-vertical);
		border-top: @width solid @color-background;
		pointer-events: none;
	}
}

.Header {
	background-color: @color-background-dark;
	display: flex;
	gap: @gap;

	height: @Header-height;
}

.Header_siteTitleContainer,
.SiteTitleContainer:link,
.SiteTitleContainer:visited {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: @color-white;
	width: @SideNav-width;
	line-height: 1;
	position: relative;
	text-decoration-line: inherit;

	>div {
		width: max-content;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	&::before {
		content: "";
		height: 1.5em;
		width: 1.5em;
		background-image: url("/assets/icons/home/icon.svg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		margin-right: @gap;
		margin-left: 0rem;
	}
}

.SiteTitle {
	text-align: center;
}

.SiteDescription {
	text-align: right;
}

.TopNav {
	>ul {
		display: flex;
		flex-direction: row;
		height: 100%;
		gap: @gap;
		padding-top: @TopNav-gap-vertical;
		padding-bottom: @TopNav-gap-vertical;
	}
}

.NavItem_link {
	@navlink-pad: @gap*0.5;

	flex: 1 1 calc(@navlink-pad*2 + 1em);

	&:link,
	&:visited {
		color: @color-white;
		text-decoration: inherit;
	}

	background: @color-primary;
	background-clip: border-box;
	border: @width solid #fff1;
	border-radius: @gap*0.5;
	line-height: 1;
	padding: @navlink-pad;
	min-width: @gap*11;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: @shadow;
	transition: background-color 0.2s;
	transition: border-color 0.5s;

	&:hover {
		background-color: @color-primary-light;
		border-color: @color-highlight;
	}

	&:active {
		transform: translateY(@click-offset);
	}
}

/*
	Font-size
\*----------------------------------*/

.SiteTitle {
	font-size: @size-xl;
}

.SiteDescription {
	font-size: @size-s;
}

/*
	Font-family
\*----------------------------------*/

.Header {
	font-family: @font-ui;
}

.SiteTitleContainer {
	font-family: @font-hero;
}

/*
	UI shadows
\*----------------------------------*/

.Header {
	box-shadow: @shadow;
}
</style>