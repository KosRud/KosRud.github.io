import { ref, Ref } from 'vue';

export function useOneChildOpen<T>(children: T[]) {
	const idOpenChild: Ref<T | null> = ref(null);

	function toggleChild(id: T) {
		if (idOpenChild.value == id) {
			idOpenChild.value = null;
			return;
		}
		idOpenChild.value = id;
	}

	function isChildOpen(id: T) {
		return idOpenChild.value == id;
	}

	return {
		idOpenChild,
		toggleChild,
		isChildOpen,
	};
}
