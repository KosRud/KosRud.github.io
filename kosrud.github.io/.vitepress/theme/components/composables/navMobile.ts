import { onMounted, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { useStore } from "../pinia/store";

export function useNavMobileService() {
    const route = useRoute();
    const store = useStore();

    onMounted(() => {
        watchEffect(() => {
            route.path; // reactive trigger\
            store.isMobileNavPagesOpen = false;
        });
    });

    onContentUpdated(() => {
        store.isMobileNavPagesOpen = false;
    });
}
