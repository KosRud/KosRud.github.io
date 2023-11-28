import type { InjectionKey, Ref } from "vue";

import { ref, onMounted, onUnmounted, provide, inject, watchEffect } from "vue";
import { onContentUpdated } from "vitepress";

import { TocItem } from "./tocItems.js";
import { symbolVisibleRect } from "../visibleRect.js";

export const activeHeadingIdSymbol = Symbol() as InjectionKey<Ref<string>>;

export function useActiveHeadingIdProvider(tocItems: Ref<TocItem[]>) {
    const activeHeadingId = ref("");
    function update() {
        activeHeadingId.value = getActiveTocItemId(tocItems);
    }
    setTriggers(update);

    provide(activeHeadingIdSymbol, activeHeadingId);
}

function getActiveTocItemId(tocItems: Ref<TocItem[]>) {
    const activeTocItem = findActiveHeading(tocItems.value);

    if (activeTocItem) {
        return activeTocItem.element.id;
    }

    // fallback if active item not found

    if (tocItems.value[0]) {
        return tocItems.value[0].element.id;
    }

    return "";
}

function setTriggers(update: () => void) {
    onMounted(() => {
        window.addEventListener("scroll", update, { passive: true });
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", update);
    });

    onContentUpdated(() => {
        update();
    });

    watchEffect(update);
}

function getVisibleRectStart() {
    const visibleRect = inject(symbolVisibleRect);

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
