import type { InjectionKey, Ref } from "vue";

import { ref, onMounted, onUnmounted, provide, inject, watchEffect } from "vue";
import { onContentUpdated } from "vitepress";

import { TocItem } from "./tocItems.js";
import { symbolVisibleRect } from "../visibleRect.js";

export const activeHeadingIdSymbol = Symbol() as InjectionKey<Ref<string>>;

export function useActiveHeadingIdProvider(tocItems: Ref<TocItem[]>) {
    const visibleRect = inject(symbolVisibleRect);

    if (visibleRect == undefined) {
        console.error("visibleRect was not provided");
        return;
    }

    const activeHeadingId: Ref<string> = ref("");

    function update(visibleRect: Ref<Element | null>) {
        activeHeadingId.value = getActiveHeadingId(tocItems, visibleRect);
    }
    setTriggers(() => update(visibleRect));

    provide(activeHeadingIdSymbol, activeHeadingId);
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

function getActiveHeadingId(
    tocItems: Ref<TocItem[]>,
    visibleRect: Ref<Element | null>
) {
    const activeTocItem = findActiveTocItem(tocItems.value, visibleRect);

    if (activeTocItem) {
        return activeTocItem.element.id;
    }

    // fallback if active TOC item not found

    if (tocItems.value[0]) {
        return tocItems.value[0].element.id;
    }

    return "";
}

function findActiveTocItem(
    headings: TocItem[],
    visibleRect: Ref<Element | null>
): TocItem | undefined {
    // search from bottom of the page to top
    // return first heading that is above top screen edge

    for (const heading of headings.slice().reverse()) {
        const inChildren = findActiveTocItem(heading.children, visibleRect);
        if (inChildren) {
            return inChildren;
        }

        const headingRect = heading.element.getBoundingClientRect();

        const headingTopMargin = parseInt(
            window.getComputedStyle(heading.element).marginTop
        );

        if (
            headingRect.top <
            getVisibleRectStart(visibleRect) + headingTopMargin
        ) {
            return heading;
        }
    }

    return undefined;
}

function getVisibleRectStart(visibleRect: Ref<Element | null>) {
    if (!visibleRect.value) {
        console.error("visibleRect value is nullish");
        return 0;
    }

    return visibleRect.value.getBoundingClientRect().top;
}
