import { onUnmounted, onMounted } from "vue";
import { useStore } from "../pinia/store";

export interface ViewPortSize {
    height: number;
    width: number;
}

export const viewportSizeFallback = { height: 480, width: 720 };

export function useTrackViewportSize() {
    function update() {
        const remSize = getRemSize();

        const store = useStore();

        store.viewportSize.width =
            document.documentElement.clientWidth / remSize;
        store.viewportSize.height =
            document.documentElement.clientHeight / remSize;
    }

    setupHooks(update);
}

function setupHooks(update: () => void) {
    onMounted(() => {
        update();
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
