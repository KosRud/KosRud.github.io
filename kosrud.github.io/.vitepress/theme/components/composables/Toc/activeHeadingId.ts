import { useStore } from "../../pinia/store";
import type { InjectionKey, Ref } from "vue";

import {
    ref,
    onUnmounted,
    provide,
    watchEffect,
    onBeforeMount,
    onMounted,
} from "vue";
import { onContentUpdated } from "vitepress";

import { TocItem } from "./tocItems.js";

export const activeHeadingIdSymbol: InjectionKey<Ref<string>> = Symbol();

export function useActiveHeadingIdProvider(tocItems: Ref<TocItem[]>) {
    const activeHeadingId: Ref<string> = ref("");

    function update() {
        activeHeadingId.value = getActiveHeadingId(tocItems);
    }
    setTriggers(() => update());

    provide(activeHeadingIdSymbol, activeHeadingId);

    return activeHeadingId;
}

function setTriggers(update: () => void) {
    onBeforeMount(() => {
        window.addEventListener("scroll", update, { passive: true });
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", update);
    });
    onContentUpdated(() => {
        update();
    });
    onMounted(() => {
        // wait until mounted
        // to make sure pinia store is ready
        watchEffect(update);
    });
}

function getActiveHeadingId(tocItems: Ref<TocItem[]>) {
    const activeTocItem = findActiveTocItem(tocItems.value);

    if (activeTocItem) {
        return activeTocItem.element.id;
    }

    // fallback if active TOC item not found

    if (tocItems.value[0]) {
        return tocItems.value[0].element.id;
    }

    return "";
}

function findActiveTocItem(headings: TocItem[]): TocItem | undefined {
    // search from bottom of the page to top
    // return first heading that is above top screen edge

    for (const heading of headings.slice().reverse()) {
        const inChildren = findActiveTocItem(heading.children);
        if (inChildren) {
            return inChildren;
        }

        const headingRect = heading.element.getBoundingClientRect();

        const headingTopMargin = parseInt(
            window.getComputedStyle(heading.element).marginTop
        );

        if (headingRect.top < getVisibleRectStart() + headingTopMargin) {
            return heading;
        }
    }

    return undefined;
}

function getVisibleRectStart() {
    const store = useStore();

    if (!store.visibleRect) {
        console.error("visibleRect value is nullish");
        return 0;
    }

    return store.visibleRect.getBoundingClientRect().top;
}
