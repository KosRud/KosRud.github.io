import { onMounted, onUnmounted } from "vue";
import { useStore } from "../pinia/store";

export function useResizeObserverService() {
    const store = useStore();

    function callback(entries: ResizeObserverEntry[]) {
        //
    }

    onMounted(() => {
        store.resizeObserver = new ResizeObserver(callback);
    });

    onUnmounted(() => {
        store.resizeObserver?.disconnect();
        store.resizeObserver = null;
    });
}
