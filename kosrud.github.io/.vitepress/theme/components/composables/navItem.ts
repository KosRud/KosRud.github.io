import { useStore } from '@theme/components/pinia/store';
import { Ref, onBeforeMount, ref, watchEffect } from 'vue';
import { useData, useRoute } from 'vitepress';
import { ThemeConfig } from '@theme/ThemeConfig';

import { urlMatch } from './urlMatch';
import { onContentUpdated } from './onContentUpdated';

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

	onBeforeMount(() => {
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
