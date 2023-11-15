<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import ThemeConfig from "./ThemeConfig";
import { computed } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData<ThemeConfig>();
const route = useRoute();

enum UrlMatch {
    full,
    inside,
    no,
}

const urlMatch = (url: string) => {
    const extensionRegex = /\.[^.]+$/;

    url = encodeURI(url.replace(extensionRegex, ""));
    const path = route.path.replace(extensionRegex, "");

    if (path == url) {
        return UrlMatch.full;
    }

    if (url == path.slice(0, url.length)) {
        return UrlMatch.inside;
    }

    return UrlMatch.no;
};

const urlActive = (url) => {
    return urlMatch(url) != UrlMatch.no;
};

const getSideNav = () => {
    const navItems =
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(navItem.url);
            return [UrlMatch.inside, UrlMatch.full].includes(match);
        })?.children ?? [];
    return navItems;
};

const sideNav = computed(getSideNav);

const debugOut = computed(() => {
    const extensionRegex = /\.[^.]+$/;
    const curPath = route.path.replace(extensionRegex, "");

    const themeNav = site.value.themeConfig.nav;
    const sideNav = getSideNav();

    return JSON.stringify({ curPath, themeNav, sideNav }, null, 2);
});
</script>

<template>
    <div :class="$style.PageContainer">
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
                            :class="$style.Header_navLink"
                            :href="navItem.url"
                            >{{ navItem.title }}</a
                        >
                    </li>
                </ul>
            </nav>
        </header>
        <div
            :class="$style.MainContainer"
            v-if="!frontmatter.hero"
        >
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
            <main
                :class="[
                    $style.Main,
                    sideNav.length == 0 ? '' : $style.Main___sideNav,
                ]"
            >
                <section :class="$style.Main_content">
                    <Content />
                </section>
                <aside :class="$style.Toc">
                    <h2 :class="$style.Toc_title">On this page</h2>
                    <nav :class="$style.Toc_content"></nav>
                </aside>
            </main>
        </div>
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
@Toc-width: 200rem;
@Main-gap: @gap*2;

.PageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: stretch;
}

.Header {
    align-self: stretch;
    background-color: @color-dark;
    display: flex;
    gap: @gap;
    flex: 0 0 min-content;
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
    display: grid;
    place-content: center center;
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
    display: grid;
    place-content: center center;
    box-shadow: @shadow;
    transition: background-color 0.2s;
    transition: border-color 0.5s;

    &:hover {
        background-color: @color-primary-lighter;
        border-color: #fff4;
    }

    &:active {
        transform: translateY(2rem);
    }
}

.MainContainer {
    flex-grow: 1;
    display: flex;
}

.SideNav {
    width: @SideNav-width;
    flex-shrink: 0;

    // background-color: @color-gray-light;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    overflow-y: auto;

    & > ul {
        flex: 1 0 auto;
        padding-top: @Main-gap;
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

.HeroMain {
    flex-grow: 1;
    > div {
        height: 100%;
        > div {
            height: 100%;
        }
    }
}

.Main {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow-y: scroll;
    gap: @gap*4;
    padding: @Main-gap;
}

.Main___sideNav {
    border-left: 1rem solid @color-gray;
    margin-left: -1rem;
}

.Main_content {
    flex-grow: 1;
    max-width: @content-width;
    height: min-content;
    min-height: 100%;
    background-color: @color-white;
}

.Toc {
    position: sticky;
    top: 0rem;
    flex-shrink: 0;
    width: @Toc-width;
    min-height: 300rem;
    max-height: 100%;

    padding-left: @gap*0.5;

    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: @gap*0.5;
}

.Toc_title {
    flex-grow: 0;
}

.Toc_content {
    flex-grow: 1;
    position: relative;
    border-left: 1rem solid @color-gray;
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
	UI shadows
\*----------------------------------*/

.Header {
    z-index: 1;
}

.SideNav {
    z-index: 2;
}

.Header {
    box-shadow: @shadow;
}

/*
	Fonts
\*----------------------------------*/

.PageContainer {
    font-family: @font-main;
}

.SideNav_itemTitle,
.Header,
.Toc_title {
    font-family: @font-alt;
}

.Header_siteTitleContainer {
    font-family: @font-title;
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

.Header li:nth-child(3) {
    position: relative;
    &::after {
        position: absolute;
        content: "";
        left: @gap*0.25;
        bottom: calc(0rem - @gap);
        top: calc(0rem - @gap);
        right: @gap*0.25;
        border-top: @gap*0.25 solid white;
        pointer-events: none;
    }
}
</style>

<style scoped lang="less">
* {
    // outline: 1px solid red;
}
</style>
