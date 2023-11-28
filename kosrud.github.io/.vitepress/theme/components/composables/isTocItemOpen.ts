import type { Ref } from "vue";

import { ref, onBeforeMount, watch } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { urlMatch } from "./urlMatch";

export function useIsTocItemOpen(url: string): Ref<boolean> {
    const route = useRoute();

    const isOpen = ref(false);

    function updateIsOpen() {
        isOpen.value = urlMatch(route.path, url).inside;
    }

    onContentUpdated(updateIsOpen);
    onBeforeMount(updateIsOpen);
    watch(() => route.path, updateIsOpen); // onContentUpdated fails if we land on 404

    return isOpen;
}
