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
			$style.Doc,
			store.isCompactModeActive ? $style.MainWrapper___compact : '',
		]"
		tabindex="-1"
		:id="anchorIds.page.content"
	>
		<div :class="$style.YouAreHere">
			<YouAreHere />
		</div>

		<main>
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
</template>

<style lang="less" module>
@import '@theme/style/variables.less';

.Doc {
	margin-left: @Aside-width;
	margin-right: @Aside-width;

	padding: @Header-to-Content-gap @Main-padding-horizontal;
	padding-bottom: @gap*16;

	max-width: @content-width + @Main-padding-horizontal*2;

	background-color: @color-white;
	border-right: @border-width-s solid @color-border;
	border-left: @border-width-s solid @color-border;

	> * {
		margin-left: auto;
		margin-right: auto;
		max-width: @content-width;
	}
}

.YouAreHere {
	margin-bottom: @gap*2;
}

/*
	Responsive
\*----------------------------------*/

.MainWrapper___compact {
	padding-left: 0rem;
	padding-right: 0rem;

	.Doc {
		flex: 1 1 100%;
		padding-left: @Main-padding-horizontal-compact;
		padding-right: @Main-padding-horizontal-compact;
		border-left: none;
		border-right: none;
	}
}

@media screen and (width < 75em) {
	.Doc {
		.MainWrapper___compact();
	}
}
</style>
