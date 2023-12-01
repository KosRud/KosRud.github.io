import type { Ref, ComponentPublicInstance } from "vue";

import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("counter", () => {
    const pageContent: Ref<ComponentPublicInstance | null> = ref(null);

    const visibleRect: Ref<Element | null> = ref(null);

    return { pageContent, visibleRect };
});
