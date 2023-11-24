import type { Ref } from "vue";

import { ref, onMounted, onUnmounted, provide, computed } from "vue";

import { activeHeadingIdSymbol } from "./activeHeadingIdSymbol";
import TocItem from "./TocItem";

export function trackActiveHeadingId(tocItems: Ref<TocItem[]>) {
    const activeHeadingId = ref("");
    provide(activeHeadingIdSymbol, activeHeadingId);

    function onScroll() {
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
        window.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll);
    });

    return activeHeadingId;
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
