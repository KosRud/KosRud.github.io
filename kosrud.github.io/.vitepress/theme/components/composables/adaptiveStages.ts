import type { Ref } from "vue";

import { computed, onMounted, onUnmounted, ref, watchEffect } from "vue";

import { useStore } from "../pinia/store";

export const AdaptiveStage = {
    // typescript enums get awkward when you need to iterate over possible values
    // because they are bidirectional
    //
    // ascending viewport width order

    collapsed: 1,
    full: 2,
} as const;

type Enum = { [key: string]: number };
type EnumValues<T extends Enum> = T[keyof T];

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
                case width < store.cssVarsValidated.breakpointToc:
                    preference.value.requestedStage = AdaptiveStage.collapsed;
                    break;
                default:
                    preference.value.requestedStage = AdaptiveStage.full;
            }
        })
    );
}

export function useTrackAdaptiveStage(preferences: Ref<AdaptivePreference>[]) {
    return computed(() => {
        const stages = Object.values(AdaptiveStage).sort();
        for (const stage of stages) {
            if (
                preferences.find(
                    (preference) => preference.value.requestedStage == stage
                )
            ) {
                return stage;
            }
        }

        return stages[stages.length - 1];
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
