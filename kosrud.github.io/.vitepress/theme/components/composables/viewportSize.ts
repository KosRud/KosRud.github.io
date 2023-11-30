import type { Ref } from "vue";

import { ref, onUnmounted, onBeforeMount, provide, InjectionKey } from "vue";

export function useViewportSizeProvider() {
    const viewPortSize = ref({ width: 0, height: 0 });

    function update() {
        const remSize = getRemSize();

        viewPortSize.value = {
            width: document.documentElement.clientWidth / remSize,
            height: document.documentElement.clientHeight / remSize,
        };
    }

    setupHooks(update);

    provide(symbolViewportSize, viewPortSize);

    return viewPortSize;
}

export const symbolViewportSize: InjectionKey<
    Ref<{ width: number; height: number }>
> = Symbol();

function setupHooks(update: () => void) {
    onBeforeMount(update);

    onBeforeMount(() => {
        window.addEventListener("resize", update, { passive: true });
    });
    onUnmounted(() => {
        window.removeEventListener("resize", update);
    });
}

function getRemSize() {
    const html = document.querySelector("html");
    if (!html) {
        console.error("html element not found");
        return 1;
    }
    const str = window.getComputedStyle(html).fontSize;
    return parseFloat(str);
}
