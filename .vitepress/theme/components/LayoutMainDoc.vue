<script setup lang="ts">
import LayoutError404 from './LayoutError404.vue';
import MarkdownWrapper from './MarkdownWrapper.vue';
import YouAreHere from './YouAreHere.vue';

import { ComponentPublicInstance } from 'vue';
import { useData } from 'vitepress';
import { useStore } from './pinia/store';

import { anchorIds } from './composables/anchorIds';

const { page } = useData();
const store = useStore();
</script>

<template>
	<div
		:class="[
			$style.MainWrapper,
			store.isCompactModeActive ? $style.MainWrapper___compact : '',
		]"
	>
		<div :class="$style.Main">
			<div :class="$style.CurrentLocation">
				<YouAreHere
					:id="anchorIds.doc.youAreHere"
					tabindex="-1"
				/>
			</div>

			<main
				:id="anchorIds.doc.main"
				tabindex="-1"
			>
				<LayoutError404 v-if="page.isNotFound" />
				<MarkdownWrapper
					:class="$style.Markdown"
					v-else
				>
					<Content
						:ref="(component: ComponentPublicInstance | null) => {
								store.contentForToc = component;
							}
							"
					/>
				</MarkdownWrapper>
			</main>
		</div>
	</div>
</template>

<style lang="less" module>
@import '@theme/style/variables.less';

.MainWrapper {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: center;

	padding-left: @Aside-width;
	padding-right: @Aside-width;
}

.CurrentLocation {
	margin-bottom: @gap*2;
}

.Main {
	flex: 0 1 @content-width + @Main-padding-horizontal*2;

	padding: @Header-to-Content-gap @Main-padding-horizontal;
	padding-bottom: @gap*16;

	background-color: @color-white;
	border-right: @border-width-s solid @color-border;
	border-left: @border-width-s solid @color-border;

	> * {
		margin-left: auto;
		margin-right: auto;
		max-width: @content-width;
	}
}

/*
	Responsive
\*----------------------------------*/

.MainWrapper___compact {
	padding-left: 0rem;
	padding-right: 0rem;

	.Main {
		flex: 1 1 100%;
		padding-left: @Main-padding-horizontal-compact;
		padding-right: @Main-padding-horizontal-compact;
		border-left: none;
		border-right: none;
	}
}

@media screen and (width < 75em) {
	.MainWrapper {
		.MainWrapper___compact();
	}
}
</style>
