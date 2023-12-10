import { ref, Ref } from "vue";

import { NavItem } from "theme/ThemeConfig";
import { urlMatch } from "./urlMatch";
import { useRoute } from "vitepress";

export function useOneChildOpen(navItems: NavItem[]) {
    const route = useRoute();

    const idOpenChild: Ref<number | null> = ref(null);

    navItems.forEach((navItem, id) => {
        if (urlMatch(route.path, navItem.url).inside) {
            idOpenChild.value = id;
        }
    });

    function toggleChild(id: number) {
        if (idOpenChild.value == id) {
            idOpenChild.value = null;
            return;
        }
        idOpenChild.value = id;
    }

    function isChildOpen(id: number) {
        return idOpenChild.value == id;
    }

    return {
        idOpenChild,
        toggleChild,
        isChildOpen,
    };
}
