import { onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vitepress';

import { anchorIds } from './anchorIds';

export function useFocusFix() {
	const route = useRoute();

	onMounted(() => {
		document.addEventListener('click', internalLinkFocusHandler);
	});
	onUnmounted(() =>
		document.removeEventListener('click', internalLinkFocusHandler)
	);
	watch(
		() => route.path,
		() => {
			const url = location.href.replace(/#.*$/, '');
			location.href = `${url}#${anchorIds.page.root}`;
		}
	);
}

function internalLinkFocusHandler(e: MouseEvent) {
	let tag = e.target as Partial<Element> | null;

	while (tag) {
		if (tag.tagName == 'A') {
			const href = tag.getAttribute?.('href');
			if (!href) {
				return;
			}

			if (href.charAt(0) == '#') {
				const anchor = document.querySelector(href);
				if (anchor) {
					(anchor as HTMLElement | null)?.focus?.({
						preventScroll: true,
					});
				}
			}

			return;
		}

		tag = tag.parentElement ?? null;
	}
}
