import type { Ref, ComponentPublicInstance } from "vue";

import { defineStore } from "pinia";
import { ref } from "vue";
import {
    CssVars,
    cssVarsFallback,
    getCssVars as loadCssVars,
} from "../composables/cssVars";
import {
    useAdaptivePreference,
    useTrackAdaptiveStage,
} from "../composables/adaptiveStages";
import {
    AdaptivePreference,
    setupCssBasedAdaptivePreference,
} from "../composables/adaptiveStages";
import {
    ViewPortSize,
    useTrackViewportSize,
    viewportSizeFallback,
} from "../composables/viewportSize";

export const useStore = defineStore("counter", {
    state: () => {
        const pageContent: Ref<ComponentPublicInstance | null> = ref(null);
        const VisibleAreaMarker: Ref<Element | null> = ref(null);
        let cssVars: Ref<CssVars | null> = ref(null);
        const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

        const adaptiveStagePreferences: Ref<Ref<AdaptivePreference>[]> = ref(
            []
        );
        const adaptiveStage = useTrackAdaptiveStage(
            adaptiveStagePreferences.value
        );

        return {
            pageContent,
            VisibleAreaMarker,
            cssVars,
            viewportSize,
            adaptiveStage,
            adaptivePreferences: adaptiveStagePreferences,
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
            setupCssBasedAdaptivePreference();
        },
        useAdaptivePreference() {
            return useAdaptivePreference();
        },
    },
});
