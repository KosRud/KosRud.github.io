import type { InjectionKey, Ref } from "vue";

export const symbolVisibleRect = Symbol() as InjectionKey<Ref<Element | null>>;
