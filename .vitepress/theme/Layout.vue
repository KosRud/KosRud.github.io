<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { computed, ComponentPublicInstance, ref, Ref } from "vue";

import MarkdownWrapper from "./MarkdownWrapper.vue";
import YouAreHere from "./YouAreHere.vue";
import LayoutToc from "./LayoutToc.vue";

import { ThemeConfig } from "./ThemeConfig";
import { urlMatch, UrlMatch } from "./UrlMatch.js";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData<ThemeConfig>();
const route = useRoute();

const urlActive = (url) => {
    return urlMatch(route.path, url) != UrlMatch.no;
};

const sideNav = computed(() => {
    const navItems =
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(route.path, navItem.url);
            return [UrlMatch.inside, UrlMatch.full].includes(match);
        })?.children ?? [];
    return navItems;
});

const pageContent: Ref<ComponentPublicInstance | null> = ref(null);
</script>

<template>
    <div :class="$style.Layout">
        <div :class="$style.Overlay">
            <header :class="$style.Header">
                <a
                    :class="$style.Header_siteTitleContainer"
                    href="/"
                >
                    <div>
                        <span :class="$style.Header_siteTitle">
                            {{ site.title }}</span
                        >
                        <span :class="$style.Header_siteDescription">
                            {{ site.description }}</span
                        >
                    </div>
                </a>
                <nav :class="$style.Header_nav">
                    <ul>
                        <li
                            v-for="navItem in site.themeConfig.nav"
                            :class="$style.Header_navItem"
                        >
                            <a
                                :class="[
                                    $style.Header_navLink,
                                    [UrlMatch.full, UrlMatch.inside].includes(
                                        urlMatch(route.path, navItem.url)
                                    )
                                        ? $style.Header_navLink___active
                                        : '',
                                ]"
                                :href="navItem.url"
                                >{{ navItem.title }}</a
                            >
                        </li>
                    </ul>
                </nav>
            </header>
            <div :class="$style.NavContainer">
                <nav :class="$style.SideNav">
                    <ul>
                        <li
                            v-for="navItem in sideNav"
                            :class="[
                                $style.SideNav_item,
                                $style.SideNav_item___level1,
                                urlActive(navItem.url) ? [$style.active] : '',
                            ]"
                        >
                            <a
                                :href="navItem.url"
                                :class="[
                                    $style.SideNav_itemTitle,
                                    $style.SideNav_itemTitle___level1,
                                ]"
                                >{{ navItem.title }}</a
                            >
                            <ul v-if="urlActive(navItem.url)">
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <a
                                        href="#"
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div :class="$style.NavContainer_spacer"></div>
                <nav :class="$style.Toc">
                    <LayoutToc :page-content="pageContent" />
                </nav>
            </div>
        </div>

        <main
            :class="[
                $style.Main,
                sideNav.length == 0 ? '' : $style.Main___sideNav,
            ]"
            v-if="!frontmatter.hero"
        >
            <section :class="$style.Main_content">
                <header :class="$style.CurrentLocation">
                    <YouAreHere />
                </header>
                <MarkdownWrapper>
                    <Content
                        :ref="
                                (component : ComponentPublicInstance) => {
									pageContent = component;
                                }
                            "
                    />
                </MarkdownWrapper>
            </section>
        </main>
        <main
            v-else
            :class="$style.HeroMain"
        >
            <Content />
        </main>
    </div>
</template>

<style lang="less" module>
@import "./style/variables/index.less";
@SideNav-width: 250rem;
@Main-padding: @gap*2;
@Main-gap: @gap*2;
@Header-height: @gap*4;

.Overlay {
    position: fixed;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
}

.NavContainer {
    display: flex;
}

.NavContainer_spacer {
    width: @content-width + @Main-padding*2 + @Main-gap;
}

.CurrentLocation {
    margin-bottom: @gap*2;
}

.Layout {
    width: 100%;
    justify-content: stretch;
    background-color: @color-background;
}

.Header {
    background-color: @color-background-dark;
    display: flex;
    gap: @gap;

    height: @Header-height;
}

.Header_nav {
    > ul {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: @gap;
        padding-top: @gap;
        padding-bottom: @gap;
    }
}

.Header_navItem {
    &::before {
        content: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
}

.Header_navLink {
    @Header_navLink-border-width: 2rem;

    &:link,
    &:visited {
        color: @color-white;
        text-decoration: inherit;
    }
    background: @color-primary;
    background-clip: border-box;
    border: @Header_navLink-border-width solid #fff1;
    border-radius: @gap*0.5;
    line-height: 1;
    padding: @gap*0.5;
    min-width: @gap*11;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: @shadow;
    transition: background-color 0.2s;
    transition: border-color 0.5s;

    &:hover {
        background-color: @color-primary-light;
        border-color: @color-highlight;
    }

    &:active {
        transform: translateY(2rem);
    }
}

.Header_navLink___active:link {
    position: relative;
    &::after {
        position: absolute;
        content: "";
        left: @gap*0.0;
        right: @gap*0.0;
        bottom: calc(0rem - @gap);
        top: calc(0rem - @gap);
        border-top: @gap*0.25 solid @color-background;
        pointer-events: none;
    }
}

.SideNav {
    width: @SideNav-width;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow-y: auto;

    & > ul {
        flex: 1 0 auto;
        padding-top: @Main-padding;
    }

    visibility: v-bind("sideNav.length == 0 ? 'hidden' : 'visible'");
}

.SideNav_item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: @gap*0.25;
    padding-bottom: @gap*0.25;

    &::before {
        content: none;
    }

    & > ul {
        margin-left: @gap;
    }
}

.SideNav_itemTitle,
.SideNav_itemTitle:link,
.SideNav_itemTitle:visited {
    // padding-left: @gap;
    color: @color-black;
    color: #444;
    text-decoration: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;

    &::before {
        content: "";
        height: 1em;
        width: 1em;
        background-image: url("/assets/icons/chevron-right.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: @gap*0.5;
        margin-left: @gap*0.25;
        visibility: hidden;
    }

    &:hover {
        text-decoration: underline;
    }
}

.Toc {
    position: sticky;
    top: 0rem;
    flex: 1 0 200rem;
    max-width: max-content;
    min-height: min(200rem, 100%);
    max-height: 90%;
    align-self: flex-start;

    padding: @Main-padding @gap;
    display: flex;
    flex-direction: column;

    margin-right: @Main-gap;
}

.Main {
    margin-top: @Header-height;
    margin-left: @SideNav-width;

    display: flex;
    flex-direction: row;
    justify-content: start;
}

.Main_content {
    flex-grow: 1;
    max-width: @content-width + @Main-padding*2; // account for padding
    height: min-content;
    min-height: 100%;

    padding: @Main-padding;
    background-color: @color-white;
    border-right: 1rem solid @color-border;
    border-left: 1rem solid @color-border;
}

.HeroMain {
    flex-grow: 1;
    > div {
        height: 100%;
        > div {
            height: 100%;
        }
    }
}

.Header_siteTitleContainer,
.Header_siteTitleContainer:link,
.Header_siteTitleContainer:visited {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: @color-white;
    width: @SideNav-width;
    line-height: 1;
    position: relative;
    text-decoration-line: inherit;

    > div {
        width: max-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    &::before {
        content: "";
        height: 1.5em;
        width: 1.5em;
        background-image: url("/assets/icons/home/icon.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: @gap;
        margin-left: 0rem;
    }
}

.Header_siteTitle {
    font-size: @size-xl;
    text-align: center;
}

.Header_siteDescription {
    font-size: @size-s;
    text-align: right;
}

/*
	Z-index
\*----------------------------------*/

.Main {
    z-index: 0;
}

.Overlay {
    z-index: 1;
}

/*
	UI shadows
\*----------------------------------*/

.Header {
    box-shadow: @shadow;
}

/*
	Fonts
\*----------------------------------*/

.SideNav_itemTitle,
.Header,
.Toc_title {
    font-family: @font-ui;
}

.Header_siteTitleContainer {
    font-family: @font-hero;
}

//////

li:nth-child(1) .SideNav_itemTitle___level1 {
    &::before {
        visibility: visible;
    }
}

li:nth-child(3) .SideNav_itemTitle___level2 {
    &::before {
        visibility: visible;
    }
}
</style>

<style scoped lang="less">
* {
    // outline: 1px solid red;
}
</style>
