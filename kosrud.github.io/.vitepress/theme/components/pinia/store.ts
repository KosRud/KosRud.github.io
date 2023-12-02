import type { Ref, ComponentPublicInstance } from "vue";

import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
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

export const useStore = defineStore("counter", () => {
    const pageContent: Ref<ComponentPublicInstance | null> = ref(null);
    const visibleRect: Ref<Element | null> = ref(null);
    let cssVars: Ref<CssVars | null> = ref(null);
    const viewportSize: Ref<ViewPortSize> = ref(viewportSizeFallback);

    const adaptiveStagePreferences: Ref<AdaptivePreference>[] = reactive([]);
    const adaptiveStage = useTrackAdaptiveStage(adaptiveStagePreferences);

    function init() {
        cssVars.value = loadCssVars();
        useTrackViewportSize();
        setupCssBasedAdaptivePreference(adaptiveStagePreferences);
    }

    function checkInitialized<T>(
        obj: Ref<T | null>,
        name: string,
        fallback: T
    ) {
        return computed(() => {
            if (obj.value === null) {
                console.log(
                    `Following variable was not initialized in pinia store: "${name}".`,
                    `Using fallback value:`,
                    fallback
                );
                return fallback;
            }
            return obj.value;
        });
    }

    return {
        pageContent,
        visibleRect,
        cssVars: checkInitialized(cssVars, "css variables", cssVarsFallback),
        viewportSize,
        adaptiveStage,
        useAdaptivePreference: () => {
            return useAdaptivePreference(adaptiveStagePreferences);
        },
        init,
    };
});
