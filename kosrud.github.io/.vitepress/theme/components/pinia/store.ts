import type { Ref, ComponentPublicInstance } from "vue";

import { defineStore } from "pinia";
import { ref } from "vue";
import {
    CssVars,
    cssVarsFallback,
    getCssVars as loadCssVars,
} from "../composables/cssVars";
import {
    AdaptiveStage,
    useAdaptivePreference,
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
import { useServiceNavMobile } from "../composables/navFull";

export const useStore = defineStore("counter", {
    state: () => {
        const contentContainer: Ref<ComponentPublicInstance | null> = ref(null);
        const VisibleAreaMarker: Ref<Element | null> = ref(null);

        const cssVars: Ref<CssVars | null> = ref(null);
        const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

        const tocItems: Ref<TocItem[]> = ref([]);
        const activeHeadingId = ref("");

        const adaptiveStagePreferences: Ref<Ref<AdaptivePreference>[]> = ref(
            []
        );
        const adaptiveStage: Ref<EnumValues<typeof AdaptiveStage>> = ref(
            AdaptiveStage.full
        );

        const isNavMobileOpen = ref(false);

        return {
            pageContent: contentContainer,
            VisibleAreaMarker,

            cssVars,
            viewportSize,

            tocItems,
            activeHeadingId,

            adaptiveStage,
            adaptivePreferences: adaptiveStagePreferences,

            isNavMobileOpen: isNavMobileOpen,
        };
    },

    getters: {
        cssVarsValidated: (state) => {
            if (!state.cssVars) {
                console.error("CSS variables were not initialized");
                return cssVarsFallback;
            }
            return state.cssVars;
        },
        visibleAreaRectTop: (state) => {
            if (!state.VisibleAreaMarker) {
                console.log("Visible area marker was not initialized");
                return 0;
            }
            return state.VisibleAreaMarker.getBoundingClientRect().top;
        },
    },

    actions: {
        init() {
            this.cssVars = loadCssVars();

            useTrackViewportSize();
            useCssBasedAdaptivePreference();

            useTrackActiveHeadingId();
            useTrackTocItems();

            useTrackAdaptiveStage();

            useServiceNavMobile();
        },
        useAdaptivePreference() {
            return useAdaptivePreference();
        },
        toggleSideNavOpen() {
            this.isNavMobileOpen = !this.isNavMobileOpen;
        },
    },
});
