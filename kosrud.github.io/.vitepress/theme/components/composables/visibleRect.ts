import type { InjectionKey, Ref } from "vue";

export const symbolVisibleRect: InjectionKey<Ref<Element | null>> = Symbol();
