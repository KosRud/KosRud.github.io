import type { Ref } from "vue";

import { ref } from "vue";

export function useOneChildOpen() {
    const idOpenChild: Ref<number | null> = ref(null);

    function toggleChild(id: number) {
        if (idOpenChild.value == id) {
            idOpenChild.value = null;
            return;
        }
        idOpenChild.value = id;
    }

    function isChildOpen(id: number) {
        return idOpenChild.value == id;
    }

    return {
        idOpenChild,
        toggleChild,
        isChildOpen,
    };
}
