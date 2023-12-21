import { onMounted, watchEffect } from 'vue';
import { useRoute } from 'vitepress';
import { useStore } from '@theme/components/pinia/store';

import { onContentUpdated } from './onContentUpdated';

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
