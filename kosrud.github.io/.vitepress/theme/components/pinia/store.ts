import { defineStore } from 'pinia';
import { ref, Ref, ComponentPublicInstance, onBeforeMount } from 'vue';
import { useData, useRoute, VitePressData, Route } from 'vitepress';
import { ThemeConfig, NavItem } from '@theme/ThemeConfig';

import {
	AdaptiveStage,
	AdaptivePreference,
	useTrackAdaptiveStage,
} from '@theme/components/composables/adaptiveStages';
import {
	ViewPortSize,
	useTrackViewportSize,
	viewportSizeFallback,
} from './services/viewportSize';
import { useTrackActiveHeadingId } from '@theme/components/composables/Toc/activeHeadingId';
import {
	TocItem,
	useTrackTocItems,
} from '@theme/components/composables/Toc/tocItems';
import { useNavMobileAutoClose } from '@theme/components/composables/navMobile';
import { useTrackNavItems } from '@theme/components/composables/navItem';

import { EnumValues } from '@theme/components/composables/tsUtil';

export const useStore = defineStore('counter', {
	state: () => {
		const contentContainer: Ref<ComponentPublicInstance | null> = ref(null);
		const VisibleAreaMarker: Ref<Element | null> = ref(null);

		const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

		const tocItems: Ref<TocItem[]> = ref([]);
		const activeHeadingId = ref('');

		const adaptivePreferences: Ref<Ref<AdaptivePreference>[]> = ref([]);
		const adaptiveStage: Ref<EnumValues<typeof AdaptiveStage>> = ref(
			AdaptiveStage.full
		);

		const isMobileNavPagesOpen = ref(false);
		const isMobileNavTocOpen = ref(false);

		const navMain: Ref<NavItem[]> = ref([]);
		const navSecondary: Ref<NavItem[]> = ref([]);

		const route: Ref<Route | null> = ref(null);
		const data: Ref<VitePressData<ThemeConfig> | null> = ref(null);

		const contentUpdateCallbacks: Ref<(() => void)[]> = ref([]);

		return {
			pageContent: contentContainer,
			VisibleAreaMarker,

			viewportSize,

			tocItems,
			activeHeadingId,

			adaptiveStage,
			adaptivePreferences,

			isMobileNavPagesOpen,
			isMobileNavTocOpen,

			navMain,
			navSecondary,

			data,
			route,

			contentUpdateCallbacks,
		};
	},

	getters: {
		visibleAreaRectTop: (state) => {
			if (!state.VisibleAreaMarker) {
				console.log('Visible area marker was not initialized');
				return 0;
			}
			return state.VisibleAreaMarker.getBoundingClientRect().top;
		},
		isMobileNavAnythingOpen: (state) => {
			return state.isMobileNavPagesOpen || state.isMobileNavTocOpen;
		},
	},
});

export function useStoreService() {
	const store = useStore();

	useTrackViewportSize();
	useTrackAdaptiveStage();

	useTrackActiveHeadingId();
	useTrackTocItems();
	useTrackNavItems();

	useNavMobileAutoClose();

	onBeforeMount(() => {
		store.data = useData<ThemeConfig>();
		store.route = useRoute();
	});

	return store;
}
