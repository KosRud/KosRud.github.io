import type { InjectionKey, Ref } from "vue";

const activeHeadingIdSymbol = Symbol() as InjectionKey<Ref<string>>;
export default activeHeadingIdSymbol;
