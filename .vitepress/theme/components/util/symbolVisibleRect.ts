import type { InjectionKey, Ref } from "vue";

const visibleRectSymbol = Symbol() as InjectionKey<Ref<Element | null>>;
export default visibleRectSymbol;
