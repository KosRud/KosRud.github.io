import { onMounted, onUnmounted } from "vue";

export function useResizeObserver(
    callback: (entries: ResizeObserverEntry[]) => void,
    getElements: () => Element[]
) {
    const resizeObserver = new ResizeObserver(callback);

    onMounted(() => {
        for (const element of getElements()) {
            resizeObserver.observe(element);
        }
    });

    onUnmounted(() => {
        resizeObserver.disconnect();
    });
}
