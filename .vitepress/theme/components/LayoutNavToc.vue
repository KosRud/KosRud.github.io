<script lang="ts" setup>
import { useStore } from './pinia/store';
import { onMounted, ref } from 'vue';

import LayoutNavTocItem from './LayoutNavTocItem.vue';

const props = defineProps<{ isMobile?: boolean }>();
const emit = defineEmits(['jumpedToItem']);

const store = useStore();

const isLoaded = ref(false);

onMounted(() => {
	isLoaded.value = true;
});
</script>

<template>
	<nav
		aria-label="Table of contents"
		:class="[$style.Toc, props.isMobile ? $style.Toc___mobile : '']">
		<h2 :aria-hidden="true" :class="$style.Toc_title">On this page:</h2>
		<div :class="$style.Toc_content">
			<ul :class="$style.Toc_itemList">
				<LayoutNavTocItem
					v-for="tocItem in store.tocItems"
					:key="tocItem.element.id"
					:heading="tocItem"
					@jumpedToItem="emit('jumpedToItem')"
					:isTocLoaded="isLoaded" />
			</ul>
		</div>
	</nav>
</template>

<style lang="less" module>
@import '@theme/style/variables.less';
@import '@theme/style/mixins.less';

.Toc {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: stretch;
	gap: @gap;

	padding-left: @Aside-padding-horizontal;
	padding-right: @Aside-padding-horizontal;
	padding-bottom: @Aside-padding-bottom;
	padding-top: @Aside-padding-top;
}

.Toc_title {
	flex: 0 0 max-content;
	font-weight: bold;
}

.Toc___mobile .Toc_title {
	text-align: center;
}

.Toc_content {
	flex: 1 1;
	overflow-y: auto;
}

.Toc_itemList {
	// align the first item
	// with the first item of navigation panel on the left

	padding-top: .NavItem_text(1) [padding-top] - .NavItem_text___compact()
		[padding-top];

	padding-bottom: @Aside-padding-bottom;
}

/*
	Font-size
\*----------------------------------*/

.Toc_title {
	font-size: @size-l;
}
</style>
