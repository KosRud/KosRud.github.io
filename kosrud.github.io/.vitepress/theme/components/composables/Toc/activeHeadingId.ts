import {
	onUnmounted,
	watchEffect,
	onBeforeMount,
	onMounted,
	InjectionKey,
	Ref,
} from "vue";
import { onContentUpdated } from "vitepress";
import { useStore } from "../../pinia/store";

import { TocItem } from "./tocItems.js";

export const activeHeadingIdSymbol: InjectionKey<Ref<string>> = Symbol();

export function useTrackActiveHeadingId() {
	setTriggers(() => {
		const store = useStore();
		store.activeHeadingId = getActiveHeadingId();
	});
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

function getActiveHeadingId() {
	const store = useStore();

	const activeTocItem = findActiveTocItem(store.tocItems);

	if (activeTocItem) {
		return activeTocItem.element.id;
	}

	// fallback if active TOC item not found

	if (store.tocItems[0]) {
		return store.tocItems[0].element.id;
	}

	return "";
}

function findActiveTocItem(headings: TocItem[]): TocItem | undefined {
	const store = useStore();

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

		if (headingRect.top < store.visibleAreaRectTop + headingTopMargin) {
			return heading;
		}
	}

	return undefined;
}
