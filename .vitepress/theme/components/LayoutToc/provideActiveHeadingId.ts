import type { Ref } from "vue";

import { ref, onMounted, onUnmounted, provide, computed } from "vue";
import { onContentUpdated, useRoute } from "vitepress";

import { activeHeadingIdSymbol } from "./activeHeadingIdSymbol";
import TocItem from "./TocItem";

export function trackActiveHeadingId(tocItems: Ref<TocItem[]>) {
    const route = useRoute();

    const activeHeadingId = ref("");
    provide(activeHeadingIdSymbol, activeHeadingId);

    function updateActiveHeading() {
        const activeTocItem = findActiveHeading(tocItems.value);

        console.log(activeTocItem?.element.id);

        if (activeTocItem) {
            activeHeadingId.value = activeTocItem.element.id;
            return;
        }

        if (tocItems.value.length == 0) {
            activeHeadingId.value = "";
            return;
        }

        activeHeadingId.value = tocItems.value[0].element.id;
    }

    onMounted(() => {
        window.addEventListener("scroll", updateActiveHeading);
        window.addEventListener("load", updateActiveHeading);
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", updateActiveHeading);
        window.removeEventListener("load", updateActiveHeading);
    });
    onContentUpdated(updateActiveHeading);

    return computed(() => {
        route.path; // onContentUpdated fails if we land on 404
        return activeHeadingId;
    });
}

function findActiveHeading(headings: TocItem[]): TocItem | undefined {
    // search from bottom of the page to top
    // return first heading that is above top screen edge

    for (const heading of headings.slice().reverse()) {
        const inChildren = findActiveHeading(heading.children);
        if (inChildren) {
            return inChildren;
        }

        if (heading.element.getBoundingClientRect().top < 0) {
            return heading;
        }
    }

    return undefined;
}
