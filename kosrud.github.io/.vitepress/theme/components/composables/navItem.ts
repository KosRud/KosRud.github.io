import { Ref } from "vue";

import { ref, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { urlMatch } from "./urlMatch";

export function useIsNavItemActive(url: string): Ref<boolean> {
	const route = useRoute();

	const isOpen = ref(false);

	function update() {
		isOpen.value = urlMatch(route.path, url).exact;
	}
	onContentUpdated(update);
	watchEffect(update);

	return isOpen;
}
