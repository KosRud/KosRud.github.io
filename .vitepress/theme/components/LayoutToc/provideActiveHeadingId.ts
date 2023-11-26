import type { Ref } from "vue";

import { ref, onMounted, onUnmounted, provide, computed, inject } from "vue";
import { onContentUpdated, useRoute } from "vitepress";

import activeHeadingIdSymbol from "./activeHeadingIdSymbol";
import TocItem from "./TocItem";
import visibleRectSymbol from "../visibleRectSymbol.js";

export function trackActiveHeadingId(tocItems: Ref<TocItem[]>) {
    const updateTrigger = createUpdateTrigger();

    function getActiveHeadingId() {
        const activeTocItem = findActiveHeading(tocItems.value);

        if (activeTocItem) {
            return activeTocItem.element.id;
        }

        if (tocItems.value.length == 0) {
            return "";
        }

        return tocItems.value[0].element.id;
    }

    const route = useRoute();

    const activeHeadingId = computed(() => {
        {
            // force recalculation when these variables change
            route.path; // onContentUpdated fails if we land on 404
            tocItems.value;
            updateTrigger.value;
        }

        return getActiveHeadingId();
    });

    provide(activeHeadingIdSymbol, activeHeadingId);
}

function createUpdateTrigger() {
    const updateTrigger = ref(false);
    const triggerUpdate = () => {
        updateTrigger.value = !updateTrigger.value;
    };

    onMounted(() => {
        window.addEventListener("scroll", triggerUpdate);
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", triggerUpdate);
    });

    onContentUpdated(() => {
        // onContentUpdated() adds callback removal to onUnmounted() automatically
        window.addEventListener("scroll", triggerUpdate);
    });
    return updateTrigger;
}

function getVisibleRectStart() {
    const visibleRect = inject(visibleRectSymbol);

    if (!visibleRect) {
        console.error("visibleRect not provided");
        return 0;
    }

    if (!visibleRect.value) {
        console.error("visibleRect value is nullish");
        return 0;
    }

    return visibleRect.value.getBoundingClientRect().top;
}

function findActiveHeading(headings: TocItem[]): TocItem | undefined {
    // search from bottom of the page to top
    // return first heading that is above top screen edge

    for (const heading of headings.slice().reverse()) {
        const inChildren = findActiveHeading(heading.children);
        if (inChildren) {
            return inChildren;
        }

        const headingRect = heading.element.getBoundingClientRect();

        const headingTopMargin = parseInt(
            window.getComputedStyle(heading.element).marginTop,
            10
        );

        if (headingRect.top < getVisibleRectStart() + headingTopMargin) {
            return heading;
        }
    }

    return undefined;
}
