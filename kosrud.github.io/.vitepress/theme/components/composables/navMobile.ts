import { onMounted, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { useStore } from "../pinia/store";

export function useNavMobileAutoClose() {
	const route = useRoute();
	const store = useStore();

	onMounted(() => {
		// close movile nav whenever route changes
		// onContentUpdated() does not fire on 404

		watchEffect(() => {
			route.path; // reactive trigger
			store.isMobileNavPagesOpen = false;
		});
	});

	onContentUpdated(() => {
		store.isMobileNavPagesOpen = false;
	});
}
