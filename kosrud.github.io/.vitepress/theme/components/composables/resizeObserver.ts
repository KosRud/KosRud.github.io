import { onMounted, onUnmounted } from "vue";

export function useResizeObserver(
    callback: (entries: ResizeObserverEntry[]) => void,
    getElements: () => (Element | null)[]
) {
    const resizeObserver = new ResizeObserver(callback);

    onMounted(() => {
        for (const element of getElements()) {
            if (!element) {
                continue;
            }
            resizeObserver.observe(element);
        }
    });

    onUnmounted(() => {
        resizeObserver.disconnect();
    });
}
