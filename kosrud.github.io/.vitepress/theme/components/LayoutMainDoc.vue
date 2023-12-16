<script setup lang="ts">
import LayoutError404 from "./LayoutError404.vue";
import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";

import { ComponentPublicInstance } from "vue";
import { useData } from "vitepress";

import { useStore } from "./pinia/store";

import { AdaptiveStage } from "./composables/adaptiveStages";

const store = useStore();
const { page } = useData();
</script>

<template>
	<div
		:class="[
			$style.MainWrapper,
			store.adaptiveStage == AdaptiveStage.full
				? $style.MainWrapper___full
				: $style.MainWrapper___compact,
		]"
	>
		<main :class="$style.Main">
			<header :class="$style.CurrentLocation">
				<YouAreHere />
			</header>
			<LayoutError404 v-if="page.isNotFound" />
			<MarkdownWrapper
				:class="$style.Markdown"
				v-else
			>
				<Content
					:ref="(component: ComponentPublicInstance | null) => {
							store.pageContent = component;
						}
						"
				/>
			</MarkdownWrapper>
		</main>
	</div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.MainWrapper {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: center;
}

.CurrentLocation {
	margin-bottom: @gap*2;
}

.Main {
	flex: 0 1 @content-width + @Main-padding-horizontal*2;

	padding: @Header-to-Content-gap @Main-padding-horizontal;
	background-color: @color-white;

	> * {
		margin-left: auto;
		margin-right: auto;
		max-width: @content-width;
	}

	padding-bottom: @gap*16;
}

.MainWrapper___compact {
	max-width: none;

	.Main {
		flex-grow: 1;
		padding-left: @Main-padding-horizontal-compact;
		padding-right: @Main-padding-horizontal-compact;
	}
}

.MainWrapper___full {
	margin-left: @Aside-width;
	margin-right: @Aside-width;

	.Main {
		border-right: @border-width-s solid @color-border;
		border-left: @border-width-s solid @color-border;
	}
}
</style>
