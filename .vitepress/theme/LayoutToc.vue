<script lang="ts" setup>
import { ComponentPublicInstance, computed, ref } from "vue";
import { onContentUpdated, useRoute } from "vitepress";

import LayoutTocItem from "./LayoutTocItem.vue";

export interface Heading {
    level: number;
    title: string;
    children: Heading[];
}

const route = useRoute();

const props = defineProps<{ pageContent: ComponentPublicInstance | null }>();

const tocContentUpdateTrigger = ref(false);
const tocContent = computed(() => {
    {
        // force recalculation when these variables change
        tocContentUpdateTrigger;
        route.path;
    }

    const content: HTMLElement = props.pageContent?.$el;

    if (!content) {
        return [];
    }

    function tagToTitleLevel(tag: string) {
        const level = ["H1", "H2", "H3", "H4", "H5", "H6"].findIndex(
            (x) => x == tag
        );
        if (level != -1) {
            return level + 1;
        }

        console.error(`Invalid heading tag: ${tag}`);
        return 7;
    }

    const headings: Heading[] = Array.from(
        content.querySelectorAll("h1, h2, h3, h4")
    ).map((element) => ({
        level: tagToTitleLevel(element.tagName),
        title: element.textContent ?? "???", // ToDo handle error
        children: [],
    }));

    const toc: Heading[] = [];

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

    function parseHeading(
        headings: Heading[],
        index: number,
        level: number
    ): { heading: Heading | null; index: number } {
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

onContentUpdated(() => {
    tocContentUpdateTrigger.value = !tocContentUpdateTrigger.value;
});
</script>

<template>
    <div :class="$style.Toc">
        <h2 :class="$style.Toc_title">On this page</h2>
        <nav :class="$style.Toc_content">
            <ul>
                <LayoutTocItem
                    v-for="heading in tocContent"
                    :key="heading.title"
                    :heading="heading"
                />
            </ul>
            <!-- <pre>{{ JSON.stringify(tocContent, null, 2) }}</pre> -->
        </nav>
    </div>
</template>

<style lang="less" module>
@import "./style/variables/index.less";

.Toc {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap;
    color: #000d;
}

.Toc_title {
    flex-grow: 0;
    font-weight: bold;
}

.Toc_content {
    flex-grow: 1;
    overflow-y: auto;

    li {
        &::before {
            display: none;
        }

        span {
            border-left: @gap*0.25 solid @color-gray;
            padding-left: @gap;

            &:hover {
                border-color: @color-primary-light;
            }
        }
    }

    ul li ul li span {
        padding-left: @gap*2;
    }
}
</style>
