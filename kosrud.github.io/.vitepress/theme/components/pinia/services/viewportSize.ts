import { onUnmounted, onMounted } from "vue";
import { useStore } from "../store";

export interface ViewPortSize {
    height: number;
    width: number;
}

export const viewportSizeFallback = { height: 480, width: 720 };

export function useTrackViewportSize() {
    function update() {
        const store = useStore();

        store.viewportSize.width = document.documentElement.clientWidth;
        store.viewportSize.height = document.documentElement.clientHeight;
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
