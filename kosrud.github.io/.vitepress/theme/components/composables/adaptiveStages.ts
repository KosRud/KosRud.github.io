import type { ComputedRef } from "vue";

import { InjectionKey } from "vue";

export enum AdaptiveStage {
    full = 1,
    foldToc = 2,
    consolidateNav = 3,
}

export const symbolAdaptiveStage: InjectionKey<ComputedRef<AdaptiveStage>> =
    Symbol();
