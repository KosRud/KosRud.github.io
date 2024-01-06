import { useStore } from '@theme/components/pinia/store';
import { Ref, ref, watchEffect, onMounted } from 'vue';
import { useData, onContentUpdated, useRoute } from 'vitepress';

import { NavItem } from '@theme/ThemeConfig';
import { ThemeConfig } from '@theme/ThemeConfig';

import { urlMatch } from './urlMatch';

export function findFirstChildPage(navItem: NavItem) {
	if (navItem.url == '/') {
		return navItem;
	}

	if (!navItem.children) {
		return navItem;
	}

	if (!navItem.children[0]) {
		console.error('Navitem has an empty children list:', navItem);
		return { title: 'Home', url: '/' };
	}

	return findFirstChildPage(navItem.children[0]);
}

export function useIsNavItemActive(url: string): Ref<boolean> {
	const route = useRoute();

	const isOpen = ref(false);

	function update() {
		isOpen.value = urlMatch(route.path, url).exact;
	}
	onContentUpdated(update);
	watchEffect(update);

	return isOpen;
}

export function useTrackNavItems() {
	const store = useStore();
	const route = useRoute();
	const { site } = useData<ThemeConfig>();

	onMounted(() => {
		watchEffect(() => {
			store.navMain = [{ title: 'Home', url: '/' }].concat(
				site.value.themeConfig.nav
			);

			store.navSecondary =
				site.value.themeConfig.nav.find((navItem) => {
					return urlMatch(route.path, navItem.url).inside;
				})?.children ?? [];
		});
	});
}
