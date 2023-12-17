<script lang="ts" setup>
import LayoutNavToc from "./LayoutNavToc.vue";
import LayoutNavPages from "./LayoutNavPages.vue";
import LayoutHeader from "./LayoutHeader.vue";
import LayoutNavMobile from "./LayoutNavMobile.vue";

import { useData } from "vitepress";
import { useStore } from "./pinia/store";
import { useCssModule } from "vue";

import { ThemeConfig } from "../ThemeConfig";
import { AdaptiveStage } from "./composables/adaptiveStages";
import { watchEffect } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData<ThemeConfig>();

const store = useStore();
const $style = useCssModule();

watchEffect(() => {
	if (store.isMobileNavAnythingOpen) {
		document.querySelector("body")?.classList.add($style.noScroll);
	} else {
		document.querySelector("body")?.classList.remove($style.noScroll);
	}
});
</script>

<template>
	<div
		:aria-modal="store.isMobileNavAnythingOpen"
		:class="[
			$style.Overlay,
			store.isMobileNavAnythingOpen ? $style.Overlay___shaded : '',
		]"
	>
		<LayoutHeader :class="$style.Header" />
		<div :class="$style.NavContainer">
			<template
				v-if="
					!frontmatter.hero &&
					store.adaptiveStage == AdaptiveStage.full
				"
			>
				<div :class="$style.NavPagesWrapper">
					<LayoutNavPages
						:class="$style.NavPages"
						v-if="store.navSecondary.length"
					/>
				</div>
				<div
					aria-hidden="true"
					:class="$style.Overlay_spacer___content"
				></div>
				<div :class="$style.TocWrapper">
					<LayoutNavToc
						:class="$style.Toc"
						v-if="store.tocItems.length"
					/>
				</div>
			</template>
			<LayoutNavMobile
				:class="$style.NavMobile"
				:isOpen="store.isMobileNavTocOpen"
				:setIsOpen="(isOpen: boolean) => {
				store.isMobileNavTocOpen = isOpen;
			}
				"
			>
				<template #default="{ close }">
					<LayoutNavToc
						is-mobile
						@jumped-to-item="close"
					/>
				</template>
			</LayoutNavMobile>
			<LayoutNavMobile
				:class="$style.NavMobile"
				:isOpen="store.isMobileNavPagesOpen"
				:setIsOpen="(isOpen: boolean) => {
				store.isMobileNavPagesOpen = isOpen;
			}
				"
			>
				<LayoutNavPages mobile />
			</LayoutNavMobile>
		</div>
	</div>
</template>

<style module lang="less">
@import "../style/variables/index.less";

/*
	Z-index
\*----------------------------------*/

.noScroll {
	overflow: hidden !important;
}

.Overlay {
	// establish a stacking context
	position: fixed;
	z-index: 0;
}

.Header {
	z-index: 1;
}

.NavContainer {
	z-index: 0;
}

/*
	Main section
\*----------------------------------*/

.Overlay {
	position: fixed;
	top: 0rem;
	bottom: 0rem;
	left: 0rem;
	right: 0rem;

	display: flex;
	flex-direction: column;
}

.Overlay_spacer___content {
	flex: 0 1 @Main-padding-horizontal * 2 + @content-width;
}

.Overlay___shaded {
	background-color: fade(@color-black, 70%);
}

.Header {
	flex: 0 0 @Header-height;
}

.NavContainer {
	flex-grow: 1;
	display: flex;
	justify-content: stretch;

	position: relative; // for NavMobile
}

.NavPagesWrapper {
	flex: 1 0 @Aside-width;
	display: flex;
	flex-direction: column;
	align-items: end;
}

.NavPages {
	width: 100%;
	max-width: @Aside-max-width;
}

.TocWrapper {
	flex: 1 0 @Aside-width;
	display: flex;
	flex-direction: column;
	justify-content: start;

	padding-left: @Toc-to-Main-gap;
}

.Toc {
	width: 100%;
	max-width: @Aside-max-width;
}

.NavMobile {
	position: absolute;

	top: 0rem;
	bottom: 0rem;
	right: 0rem;
	width: 100%;
}

/*
	Transitions
\*----------------------------------*/

.Overlay {
	transition: background-color @duration-s;
}

/*
	Pointer behavior
\*----------------------------------*/

.Overlay {
	pointer-events: none;

	a {
		user-select: none;
		cursor: pointer;
	}
}

.Toc,
.NavPages,
.NavMobile,
.Header {
	pointer-events: auto;
}
</style>
