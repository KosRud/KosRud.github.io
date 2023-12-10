import type { Ref, ComponentPublicInstance } from "vue";

import { defineStore } from "pinia";
import { onMounted, ref, watchEffect } from "vue";
import {
    CssVars,
    useLoadCssVars,
    cssVarsFallback,
} from "../composables/cssVars";
import {
    AdaptiveStage,
    useTrackAdaptiveStage,
} from "../composables/adaptiveStages";
import {
    AdaptivePreference,
    useCssBasedAdaptivePreference,
} from "../composables/adaptiveStages";
import {
    ViewPortSize,
    useTrackViewportSize,
    viewportSizeFallback,
} from "../composables/viewportSize";
import { useTrackActiveHeadingId } from "../composables/Toc/activeHeadingId";
import { TocItem, useTrackTocItems } from "../composables/Toc/tocItems";
import { EnumValues } from "../composables/tsUtil";
import { useNavMobileService } from "../composables/navMobile";
import { useResizeObserverService } from "../composables/resizeObserver";

export const useStore = defineStore("counter", {
    state: () => {
        const contentContainer: Ref<ComponentPublicInstance | null> = ref(null);
        const VisibleAreaMarker: Ref<Element | null> = ref(null);

        const cssVars: Ref<CssVars> = ref(cssVarsFallback);
        const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

        const tocItems: Ref<TocItem[]> = ref([]);
        const activeHeadingId = ref("");

        const adaptivePreferences: Ref<Ref<AdaptivePreference>[]> = ref([]);
        const adaptiveStage: Ref<EnumValues<typeof AdaptiveStage>> = ref(
            AdaptiveStage.full
        );

        const isMobileNavPagesOpen = ref(false);
        const isMobileNavTocOpen = ref(false);

        const resizeObserver: Ref<ResizeObserver | null> = ref(null);

        return {
            pageContent: contentContainer,
            VisibleAreaMarker,

            cssVars,
            viewportSize,

            tocItems,
            activeHeadingId,

            adaptiveStage,
            adaptivePreferences,

            isMobileNavPagesOpen,
            isMobileNavTocOpen,

            resizeObserver,
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

    useLoadCssVars();

    useTrackViewportSize();
    useCssBasedAdaptivePreference();

    useTrackActiveHeadingId();
    useTrackTocItems();

    useTrackAdaptiveStage();

    useNavMobileService();

    useResizeObserverService();

    return store;
}
