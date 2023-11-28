import type { Ref } from "vue";

import { isProxy, ref, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { urlMatch } from "./urlMatch";

export function useIsTocItemOpen(url: string): Ref<boolean> {
    const route = useRoute();

    const isOpen = ref(false);

    function update() {
        isOpen.value = urlMatch(route.path, url).inside;
    }
    onContentUpdated(update);
    watchEffect(update);

    return isOpen;
}
