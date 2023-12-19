import { onMounted, watchEffect } from 'vue';
import { onContentUpdated } from 'vitepress';
import { useStore } from '../../pinia/store';

export interface TocItem {
	level: number;
	element: Element;
	title: string;
	children: TocItem[];
	italic: boolean;
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

	if (!store.pageContent) {
		// error commented because not every page needs a TOC
		// and this not every page sets up pageContent element
		//
		// console.error("Content container reference was not initialized");

		return [];
	}

	const contentSource = store.pageContent.$el as Element;

	const headings: TocItem[] = Array.from(
		contentSource.querySelectorAll('h1, h2, h3')
	).flatMap((element) => {
		const title = Array.from(element.childNodes).find(
			(node) => node.nodeType == Node.TEXT_NODE && node.textContent
		)?.textContent;

		if (title) {
			return [
				{
					level: tagToTitleLevel(element.tagName),
					children: [],
					element: element,
					title: title.trim(),
					italic: false,
				},
			];
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

	/*
			If there's only one heading of level 1
			assume it's the page title
			and return its children
		*/
	if (toc.length == 1 && toc[0].level == 1) {
		const result = toc[0].children;
		toc[0].children = [];
		toc[0].title = '(beginning)';
		toc[0].italic = true;
		result.unshift(toc[0]);
		return result;
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
	return 7;
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
