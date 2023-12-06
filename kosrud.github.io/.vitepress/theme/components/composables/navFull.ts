import { onMounted, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { useStore } from "../pinia/store";

export function useServiceNavMobile() {
    const route = useRoute();
    const store = useStore();

    onMounted(() => {
        watchEffect(() => {
            route.path; // reactive trigger

            store.isMobileNavOpen = false;
        });
    });

    onContentUpdated(() => {
        store.isMobileNavOpen = false;
    });
}
