import { onMounted, watchEffect } from 'vue';
import { onContentUpdated } from 'vitepress';
import { useStore } from '@theme/components/pinia/store';

import { anchorIds } from '@theme/components/composables/anchorIds';

export interface TocItem {
	level: number;
	element: Element;
	title: string;
	children: TocItem[];
	utilityHeading: boolean;
}

export function useTrackTocItems() {
	const store = useStore();

	function update() {
		store.tocItems = getTocItems();
	}

	onMounted(() => watchEffect(update));
	onContentUpdated(update);
}

function getTocItems() {
	const store = useStore();

	if (!store.contentForToc) {
		// error commented because not every page needs a TOC
		// and this not every page sets up pageContent element
		//
		// console.error("Content container reference was not initialized");

		return [];
	}

	const contentSource = store.contentForToc.$el as Element;

	const headings: TocItem[] = Array.from(
		contentSource.querySelectorAll('h1, h2, h3')
	).flatMap((element) => {
		const title = Array.from(element.childNodes).find(
			(node) => node.nodeType == Node.TEXT_NODE && node.textContent
		)?.textContent;

		if (title) {
			const level = tagToTitleLevel(element.tagName); // logs error and returns undefined if tag not recognized

			if (level != null) {
				return [
					{
						level,
						children: [],
						element: element,
						title: title.trim(),
						utilityHeading: false,
					},
				];
			}

			return [];
		} else {
			console.error(
				`Error while trying to build TOC from headings. Heading is missing a title`,
				element
			);
			return [];
		}
	});

	const toc: TocItem[] = [];

	let index = 0;

	while (true) {
		const { heading, index: nextIndex } = parseHeading(headings, index, 1);
		if (heading) {
			toc.push(heading);
			index = nextIndex;
		} else {
			break;
		}
	}

	const beginningElement = document.querySelector(
		`#${anchorIds.page.content}`
	);

	if (beginningElement) {
		toc.unshift({
			children: [],
			utilityHeading: true,
			level: 0,
			title: '(to beginning)',
			element: beginningElement,
		});
	}

	return toc;
}

function tagToTitleLevel(tag: string) {
	const index = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].findIndex(
		(x) => x == tag
	);
	if (index != -1) {
		return index + 1;
	}

	console.error(`Invalid heading tag: ${tag}`);
	return null;
}

function parseHeading(
	headings: TocItem[],
	index: number,
	level: number
): { heading: TocItem | null; index: number } {
	const heading = headings[index];

	if (!heading || heading.level < level) {
		return { heading: null, index: index };
	} else {
		index++;
	}

	while (true) {
		const { heading: child, index: nextIndex } = parseHeading(
			headings,
			index,
			heading.level + 1
		);
		if (child) {
			heading.children.push(child);
			index = nextIndex;
		} else {
			break;
		}
	}

	return {
		heading,
		index: index,
	};
}
