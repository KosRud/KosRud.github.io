import { computed, ref } from "vue";
import { onContentUpdated, useRoute } from "vitepress";

export interface TocItem {
    level: number;
    element: Element;
    children: TocItem[];
}

export function useTocItems(getPageContent: () => Element | null) {
    const route = useRoute();

    const tocContentUpdateTrigger = ref(false);
    onContentUpdated(() => {
        tocContentUpdateTrigger.value = !tocContentUpdateTrigger.value;
    });

    const tocItems = computed(() => {
        {
            // force recalculation when these variables change
            tocContentUpdateTrigger;
            route.path; // onContentUpdated fails if we land on 404
        }

        const contentSource = getPageContent();
        if (!contentSource) {
            return [];
        }

        const headings: TocItem[] = Array.from(
            contentSource.querySelectorAll("h1, h2, h3, h4")
        ).flatMap((element) => {
            if (element.textContent) {
                return [
                    {
                        level: tagToTitleLevel(element.tagName),
                        children: [],
                        element: element,
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
            const { heading, index: nextIndex } = parseHeading(
                headings,
                index,
                1
            );
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
            return toc[0].children;
        }

        return toc;
    });

    return tocItems;
}

function tagToTitleLevel(tag: string) {
    const index = ["H1", "H2", "H3", "H4", "H5", "H6"].findIndex(
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
