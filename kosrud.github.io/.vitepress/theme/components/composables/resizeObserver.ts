import { onMounted, onUnmounted } from "vue";

export function useResizeObserver(
	callback: (entries: ResizeObserverEntry[]) => void,
	getElements: () => (Element | null)[] | Element | null,
	callOnMounted: boolean
) {
	const resizeObserver = new ResizeObserver(callback);

	onMounted(() => {
		if (callOnMounted) {
			callback([]);
		}

		const elements = getElements();

		if (!elements) {
			return;
		}

		if (Array.isArray(elements)) {
			for (const element of elements) {
				if (!element) {
					continue;
				}
				resizeObserver.observe(element);
			}

			return;
		}

		resizeObserver.observe(elements);
	});

	onUnmounted(() => {
		resizeObserver.disconnect();
	});
}
