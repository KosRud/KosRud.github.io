import type { InjectionKey, Ref } from "vue";

export const activeHeadingIdSymbol = Symbol() as InjectionKey<Ref<string>>;
