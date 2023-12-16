import { defineStore } from "pinia";
import { ref, Ref, ComponentPublicInstance } from "vue";
import {
	AdaptiveStage,
	useTrackAdaptiveStage,
} from "../composables/adaptiveStages";
import { AdaptivePreference } from "../composables/adaptiveStages";
import {
	ViewPortSize,
	useTrackViewportSize,
	viewportSizeFallback,
} from "./services/viewportSize";
import { useTrackActiveHeadingId } from "../composables/Toc/activeHeadingId";
import { TocItem, useTrackTocItems } from "../composables/Toc/tocItems";
import { EnumValues } from "../composables/tsUtil";
import { useNavMobileService } from "../composables/navMobile";

export const useStore = defineStore("counter", {
	state: () => {
		const contentContainer: Ref<ComponentPublicInstance | null> = ref(null);
		const VisibleAreaMarker: Ref<Element | null> = ref(null);

		const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

		const tocItems: Ref<TocItem[]> = ref([]);
		const activeHeadingId = ref("");

		const adaptivePreferences: Ref<Ref<AdaptivePreference>[]> = ref([]);
		const adaptiveStage: Ref<EnumValues<typeof AdaptiveStage>> = ref(
			AdaptiveStage.full
		);

		const isMobileNavPagesOpen = ref(false);
		const isMobileNavTocOpen = ref(false);

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
		};
	},

	getters: {
		visibleAreaRectTop: (state) => {
			if (!state.VisibleAreaMarker) {
				console.log("Visible area marker was not initialized");
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

	useTrackAdaptiveStage();

	useNavMobileService();

	return store;
}
