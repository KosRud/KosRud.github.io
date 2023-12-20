<script lang="ts" setup>
import { useRoute } from 'vitepress';

import { type NavItem } from '../ThemeConfig';
import { urlMatch } from './composables/urlMatch';
import { findFirstChildPage } from './composables/nav';
import { computed } from 'vue';

const route = useRoute();

const props = defineProps<{ navItem: NavItem }>();

const isActive = computed(() => {
	const match = urlMatch(route.path, props.navItem.url);
	if (props.navItem.url == '/') {
		return match.exact;
	}
	return match.inside;
});
</script>

<template>
	<li
		:class="$style.NavItem"
		:aria-current="isActive ? 'page' : undefined"
	>
		<a
			:class="[
				$style.NavItem_link,
				isActive ? $style.NavItem_link___active : '',
			]"
			:href="findFirstChildPage(props.navItem).url"
			>{{ props.navItem.title }}
		</a>
	</li>
</template>

<style module lang="less">
@import '@theme/style/variables/index.less';
@import '@theme/style/mixins/index.less';

.NavItem {
	&::before {
		content: none;
	}

	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: stretch;

	min-width: 16rem * 9;
	flex: 0 1 auto;
}

.NavItem_link {
	.button();

	&:hover {
		background-color: @color-primary-light;
		border-color: @color-highlight;
	}

	&:active {
		transform: translateY(@click-offset);
	}
}

.NavItem_link___active:link {
	position: relative;

	&::after {
		position: absolute;
		content: '';
		left: @gap*0.0;
		right: @gap*0.0;
		bottom: calc(0rem - @gap);
		top: calc(0rem - @HeaderNav-padding-vertical);
		border-top: @border-width solid @color-background;
		pointer-events: none;
	}
}
</style>
