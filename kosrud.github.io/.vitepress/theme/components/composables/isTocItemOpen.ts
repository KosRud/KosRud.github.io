import type { Ref } from "vue";

import { ref, onBeforeMount } from "vue";
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

    return isOpen;
}
