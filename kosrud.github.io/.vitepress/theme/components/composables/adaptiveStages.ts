import type { Ref } from "vue";

import { onMounted, onUnmounted, ref, watch, watchEffect } from "vue";

import { useStore } from "../pinia/store";

export const AdaptiveStage = {
    // typescript enums get awkward when you need to iterate over possible values
    // because they are bidirectional
    //
    // ascending viewport width order

    collapsed: 1,
    full: 2,
} as const;

import type { EnumValues } from "./tsUtil";

export type AdaptivePreference = {
    requestedStage: EnumValues<typeof AdaptiveStage>;
};

export function useCssBasedAdaptivePreference() {
    onMounted(
        watchEffect(() => {
            const store = useStore();

            const width = store.viewportSize.width;

            const preference = useAdaptivePreference();

            switch (true) {
                case width < store.cssVars.breakpointToc:
                    preference.value.requestedStage = AdaptiveStage.collapsed;
                    break;
                default:
                    preference.value.requestedStage = AdaptiveStage.full;
            }
        })
    );
}

export function useTrackAdaptiveStage() {
    function pickStage() {
        const store = useStore();

        const stages = Object.values(AdaptiveStage).sort();
        for (const stage of stages) {
            if (
                store.adaptivePreferences.find(
                    (preference) => preference.value.requestedStage == stage
                )
            ) {
                return stage;
            }
        }

        return stages[stages.length - 1];
    }

    onMounted(() => {
        watchEffect(() => {
            const store = useStore();
            store.adaptiveStage = pickStage();
        });
    });
}

export function useAdaptivePreference() {
    const preference: Ref<AdaptivePreference> = ref({
        requestedStage: AdaptiveStage.full,
    });

    onMounted(() => {
        const store = useStore();
        store.adaptivePreferences.push(preference);
    });

    onUnmounted(() => {
        const store = useStore();
        const id = store.adaptivePreferences.findIndex(
            (storedPreference) => storedPreference == preference
        );

        if (id) {
            store.adaptivePreferences.splice(id, 1);
        }
    });

    return preference;
}
