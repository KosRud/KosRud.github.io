import type { InjectionKey, Ref } from "vue";
import type { CssVars } from "./cssVars";

import {
    computed,
    inject,
    onBeforeMount,
    onUnmounted,
    provide,
    ref,
    watchEffect,
} from "vue";

import { ViewPortSize } from "./viewportSize";

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
type AdaptivePreferenceStore = Ref<AdaptivePreference>[];

function injectStoreOrComplain() {
    const store = inject(symbolAdaptivePreferenceStore);

    if (!store) {
        console.error("Adaptive preference store was not provided");
        return null;
    }

    if (!store.value) {
        console.error("Adaptive preference store is nullish");
        return null;
    }

    return store;
}

const symbolAdaptivePreferenceStore: InjectionKey<
    Ref<AdaptivePreferenceStore>
> = Symbol();

export function useAdaptivePreferenceStoreProvider(
    cssVars: CssVars,
    viewportSize: Ref<ViewPortSize>
) {
    const store: Ref<AdaptivePreferenceStore> = ref([]);
    provide(symbolAdaptivePreferenceStore, store);

    setupCssVarsBasedPreference(cssVars, viewportSize, store);

    const preference = useAdaptivePreference(store);
    return preference;
}

function setupCssVarsBasedPreference(
    cssVars: CssVars,
    viewportSize: Ref<ViewPortSize>,
    store: Ref<AdaptivePreferenceStore>
) {
    const preference = useAdaptivePreference(store);

    watchEffect(() => {
        const width = viewportSize.value.width;

        switch (true) {
            case width < cssVars.breakpointToc:
                preference.value.requestedStage = AdaptiveStage.collapsed;
                break;
            default:
                preference.value.requestedStage = AdaptiveStage.full;
        }
    });
}

export function useAdaptivePreference(store?: Ref<AdaptivePreferenceStore>) {
    const preference: Ref<AdaptivePreference> = ref({
        requestedStage: AdaptiveStage.full,
    });

    const injectedStore = store ?? injectStoreOrComplain();
    if (!injectedStore) {
        return preference;
    }

    onBeforeMount(() => {
        injectedStore.value.push(preference);
    });

    onUnmounted(() => {
        injectedStore.value = injectedStore.value.filter(
            (storedPreference) => storedPreference != preference
        );
    });

    return preference;
}

export function useAdaptiveStage() {
    const store = injectStoreOrComplain();
    if (!store) {
        // fallback
        return computed(() => AdaptiveStage.full);
    }

    return computed((): EnumValues<typeof AdaptiveStage> => {
        const preferences = store.value;

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
