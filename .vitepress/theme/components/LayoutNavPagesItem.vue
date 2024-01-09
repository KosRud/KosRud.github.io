<script lang="ts" setup>
import LayoutNavItemText from './LayoutNavItemText.vue';

import { Ref, ref, computed, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vitepress';
import { useStore } from './pinia/store';

import { NavItem } from '../ThemeConfig';
import { useIsNavItemActive } from './composables/nav';
import { useOneChildOpen } from './composables/oneChildOpen';
import { scrollIntoViewIfNeeded } from './composables/scrollIntoView';
import { urlMatch } from '@theme/components/composables/urlMatch';

import iconChevron from '@theme/components/assets/icons/ui/chevron/right.svg';

const emit = defineEmits(['navItemToggle']);

const props = defineProps<{
	navItem: NavItem;
	depth?: number;
	startingLevel: number;
	isOpen: boolean;
	isNavPagesLoaded: boolean;
}>();

const route = useRoute();
const store = useStore();

const iconChevronUrl = `url("${iconChevron}")`;

const oneChildOpen = useOneChildOpen(
	(props.navItem.children ?? []).map((child) => child.url)
);
for (const child of props.navItem.children ?? []) {
	if (urlMatch(route.path, child.url).inside) {
		oneChildOpen.toggleChild(child.url);
	}
}
function onItemClick(navItem: NavItem) {
	oneChildOpen.toggleChild(navItem.url);
	if (!navItem.children) {
		store.isMobileNavPagesOpen = false;
	}
}

const depth = computed(() => props.depth ?? 0);
const isActive = useIsNavItemActive(props.navItem.url);
const linkElement: Ref<Element | null> = ref(null);

onMounted(() => {
	watchEffect(() => {
		if (!linkElement.value || !props.isNavPagesLoaded) {
			return;
		}
		scrollIntoViewIfNeeded(
			linkElement.value,
			depth.value == 0 ? 'center' : 'nearest'
		);
	});
});
</script>

<template>
	<li
		:level="depth"
		:class="[$style.NavItem, isOpen ? $style.NavItem___open : '']"
		:aria-current="isActive ? 'page' : undefined"
	>
		<a
			:href="$props.navItem.children ? 'javascript:' : props.navItem.url"
			:class="[$style.NavItem_link]"
			@click="emit('navItemToggle')"
			:ref="(element)=> {
				linkElement = element as Element;
			}"
		>
			<LayoutNavItemText
				:level="depth + startingLevel"
				:class="$style.NavItem_linkText"
				:bold="isActive"
			>
				{{ props.navItem.title }}
			</LayoutNavItemText>
		</a>
		<div :class="$style.NavItem_childrenListWrapper">
			<Transition
				:enter-from-class="$style.NavItem_childrenList___enterFrom"
				:enter-to-class="$style.NavItem_childrenList___enterTo"
				:enter-active-class="$style.NavItem_childrenList___enterActive"
				:leave-from-class="$style.NavItem_childrenList___leaveFrom"
				:leave-to-class="$style.NavItem_childrenList___leaveTo"
				:leave-active-class="$style.NavItem_childrenList___leaveActive"
			>
				<ul
					v-if="isOpen && props.navItem.children?.length"
					:class="$style.NavItem_childrenList"
				>
					<LayoutNavPagesItem
						:depth="depth + 1"
						:starting-level="startingLevel"
						:nav-item="child"
						v-for="child in props.navItem.children"
						@nav-item-toggle="onItemClick(child)"
						:is-open="oneChildOpen.isChildOpen(child.url)"
						:is-nav-pages-loaded="props.isNavPagesLoaded"
					/>
				</ul>
			</Transition>
		</div>
	</li>
</template>

<style module lang="less">
@import '@theme/style/variables.less';
@import '@theme/style/mixins.less';

@chevron-size: @size * 0.7;
@chevron-margin-right: @gap*0.5;
@font-builtin-padding: 0.1em; // compensate for "built-in" padding of the font

.NavItem {
	display: flex;
	flex-direction: column;
	align-items: stretch;

	&::before {
		// remove marker from <li>
		content: none;
	}
}

.NavItem_link {
	text-decoration: inherit;
	&,
	&:link,
	&:visited {
		color: @color-text-faded-1;
	}

	display: flex;
	flex-direction: row;
	align-items: center;

	@leveled-padding: @chevron-size + @chevron-margin-right;
	padding-left: calc(@leveled-padding * v-bind('depth'));
	margin-right: @NavItem_link-to-scrollbar-gap;

	&::before {
		content: '';
		height: @chevron-size;
		width: @chevron-size;
		background-image: v-bind(iconChevronUrl);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: left;
		margin-right: calc(@chevron-margin-right - @font-builtin-padding);
		margin-left: 0.1em;
		visibility: v-bind('props.navItem.children ? "visible" : "hidden"');
		vertical-align: top;
	}
}

.NavItem___open .NavItem_link::before {
	transform: rotate(90deg) translateX(0.1em);
}

.NavItem:not(.NavItem___open) .NavItem_link::before {
	transform: none;
}

.NavItem_childrenListWrapper {
	overflow: hidden;
}

/*
	Transitions
\*----------------------------------*/

.NavItem_link::before {
	transition: transform @duration;
}

.NavItem_childrenList___enterFrom {
	transform: translateY(-100%);
	opacity: 0%;
}

.NavItem_childrenList___enterTo {
	transform: none;
	opacity: 100%;
}

.NavItem_childrenList___enterActive {
	transition: transform @duration-s, opacity @duration-s;
}

.NavItem_childrenList___leaveFrom {
	transform: none;
	opacity: 100%;
}

.NavItem_childrenList___leaveTo {
	transform: translateY(-100%);
	opacity: 0%;
}

.NavItem_childrenList___leaveActive {
	transition: transform 0s, opacity 0s;
}
</style>
