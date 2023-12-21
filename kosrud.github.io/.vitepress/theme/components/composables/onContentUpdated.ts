import { onMounted, onUnmounted } from 'vue';
import { useStore } from '@theme/components/pinia/store';

export function onContentUpdated(callback: () => void) {
	const store = useStore();

	onMounted(() => {
		store.contentUpdateCallbacks.push(callback);
	});

	onUnmounted(() => {
		const index = store.contentUpdateCallbacks.findIndex(callback);
		if (index != -1) {
			store.contentUpdateCallbacks.splice(index, 1);
		}
	});
}
