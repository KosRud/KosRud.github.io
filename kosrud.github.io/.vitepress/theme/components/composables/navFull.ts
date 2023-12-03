import { onMounted, watchEffect } from "vue";
import { onContentUpdated, useRoute } from "vitepress";
import { useStore } from "../pinia/store";

export function useServiceNavFull() {
    const route = useRoute();
    const store = useStore();

    onMounted(() => {
        watchEffect(() => {
            route.path; // reactive trigger

            store.isNavFullOpen = false;
        });
    });

    onContentUpdated(() => {
        store.isNavFullOpen = false;
    });
}
