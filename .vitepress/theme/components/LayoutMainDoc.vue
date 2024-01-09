<script setup lang="ts">
import LayoutError404 from './LayoutError404.vue';
import MarkdownWrapper from './MarkdownWrapper.vue';
import YouAreHere from './YouAreHere.vue';
import BackTop from './BackTop.vue';

import { ComponentPublicInstance } from 'vue';
import { useData } from 'vitepress';
import { useStore } from './pinia/store';

import { anchorIds } from './composables/anchorIds';

const { page } = useData();
const store = useStore();
</script>

<template>
	<main
		:class="$style.Doc"
		tabindex="-1"
		:id="anchorIds.page.content"
	>
		<div :class="$style.YouAreHere">
			<YouAreHere />
		</div>

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
		<BackTop />
	</main>
</template>

<style lang="less" module>
@import '@theme/style/variables.less';

.Doc {
	margin-left: @Aside-width;
	margin-right: @Aside-width;

	max-width: @content-width + @Main-padding-horizontal*2;

	padding: @Header-to-Content-gap @Main-padding-horizontal;
	padding-bottom: 0rem;

	display: flex;
	flex-direction: column;
	justify-content: stretch;
	align-items: center;

	background-color: @color-white;
	border-right: @border-width-s solid @color-border;
	border-left: @border-width-s solid @color-border;
}

.YouAreHere {
	margin-bottom: @gap*2;
	width: 100%;
}

.Markdown {
	flex-grow: 1;

	padding-bottom: @gap*8;
}

/*
	Responsive
\*----------------------------------*/

@media screen and (width < 75em) {
	.Doc {
		max-width: 100%;
		width: 100%;

		margin-left: 0rem;
		margin-right: 0rem;

		padding-left: @Main-padding-horizontal-compact;
		padding-right: @Main-padding-horizontal-compact;

		border-left: none;
		border-right: none;
	}
}
</style>
