import { defineStore } from 'pinia';
import { ref, Ref, ComponentPublicInstance, onMounted, onUnmounted } from 'vue';
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
import type { NavItem } from '@theme/ThemeConfig';
import { useTrackNavItems } from '@theme/components/composables/nav';

export const useStore = defineStore('counter', {
	state: () => {
		const contentForToc: Ref<ComponentPublicInstance | null> = ref(null);
		const VisibleAreaMarker: Ref<Element | null> = ref(null);

		const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

		const tocItems: Ref<TocItem[]> = ref([]);
		const activeHeadingId = ref('');

		const isMobileNavPagesOpen = ref(false);
		const isMobileNavTocOpen = ref(false);

		const navMain: Ref<NavItem[]> = ref([]);
		const navSecondary: Ref<NavItem[]> = ref([]);

		const isViewportNarrow = ref(false);
		const isHeaderNavOverlapping = ref(false);

		return {
			contentForToc,
			VisibleAreaMarker,

			viewportSize,

			tocItems,
			activeHeadingId,

			isViewportNarrow,
			isHeaderNavOverlapping,

			isMobileNavPagesOpen,
			isMobileNavTocOpen,

			navMain,
			navSecondary,
		};
	},

	getters: {
		isCompactModeActive: (state) =>
			state.isHeaderNavOverlapping || state.isViewportNarrow,

		visibleAreaRectTop: (state) => {
			if (!state.VisibleAreaMarker) {
				console.error('Visible area marker was not initialized');
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

	useTrackActiveHeadingId();
	useTrackTocItems();
	useTrackNavItems();

	useNavMobileAutoClose();

	const compactModeHandler = function (event: MediaQueryListEvent) {
		store.isViewportNarrow = event.matches;
	};

	let mediaCompactMode: MediaQueryList | null = null;
	onMounted(() => {
		mediaCompactMode = matchMedia('screen and (width < 75em)');
		mediaCompactMode.addEventListener('change', compactModeHandler);
		store.isViewportNarrow = mediaCompactMode.matches;
	});
	onUnmounted(() => {
		mediaCompactMode?.removeEventListener('change', compactModeHandler);
	});

	return store;
}
