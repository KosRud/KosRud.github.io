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

    let path = route.path.replace(extensionRegex, "");

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

const sideNav = computed(() => {
    const navItems =
        site.value.themeConfig.nav.find((navItem) => {
            const match = urlMatch(navItem.url);
            return [UrlMatch.inside, UrlMatch.full].includes(match);
        })?.children ?? [];
    return navItems;
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
        <div :class="$style.MainContainer">
            <aside :class="$style.SideNav_container">
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
                                :href="
                                    urlActive(navItem.url)
                                        ? undefined
                                        : navItem.url
                                "
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
                                    <span
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</span
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <span
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</span
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <span
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</span
                                    >
                                </li>
                                <li
                                    :class="[
                                        $style.SideNav_item,
                                        $style.SideNav_item___level2,
                                    ]"
                                >
                                    <span
                                        :class="[
                                            $style.SideNav_itemTitle,
                                            $style.SideNav_itemTitle___level2,
                                        ]"
                                        >Some page name</span
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main :class="$style.Main">
                <section :class="$style.Page">
                    <br />
                    <pre>{{ JSON.stringify(route, null, 2) }}</pre>
                    <br /><Content />
                </section>
                <aside :class="$style.Toc"></aside>
            </main>
        </div>
    </div>
    <!-- <div v-if="frontmatter.home">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
        <ul>
            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
            <li><a href="/api-examples.html">API Examples</a></li>
        </ul>
    </div>
    <div v-else>
        <a href="/">Home</a>
        <Content />
    </div> -->
</template>

<style lang="less" module>
@import "./style/variables/index.less";
@SideNav-width: 250rem;
@Toc-width: 200rem;

/*
	When SideNav scrollbar appears, it forces clipping of overflow on the right side. This is the amount of space reserved for showing overflow. The margin is adjusted with negative value to prevent this reserved space from affecting layout.

	Setting to 0 lets the clipping happen.
*/
@SideNav-extra-width: 0vw;

.PageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.Header {
    align-self: stretch;
    background-color: @color-dark;
    display: flex;
    gap: @gap;
}

.Header_nav > ul {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: @gap;
    padding-top: @gap;
    padding-bottom: @gap;
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
    min-width: @gap*12;
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
    background-color: @color-gray;
}

.SideNav_container {
    width: calc(@SideNav-width + @SideNav-extra-width);
    margin-right: calc(0rem - @SideNav-extra-width);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}

.SideNav {
    flex: 1 0 0px;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    transform: scaleX(-1);
    overflow-y: auto;
    padding-left: @SideNav-extra-width;

    color: @color-white;

    & > ul {
        flex: 1 0 auto;
        transform: scaleX(-1);
        padding-left: @gap*2;
        padding-top: @gap * 2;
        background-color: @color-dark;
        // padding-right: @gap;
    }

    // &::-webkit-scrollbar-thumb {
    //     border: @gap*0.25 solid transparent;
    //     background-clip: padding-box;
    //     border-radius: 10000rem;
    //     background-color: @color-gray-light;
    // }
    // &::-webkit-scrollbar {
    //     width: @gap*1.5;
    //     border-radius: 10000rem;
    //     background-color: #fff4;
    // }

    // &::-webkit-scrollbar-button:single-button {
    //     background-color: @color-gray;
    //     border-radius: 10000rem 10000rem 0rem 0rem;
    //     display: block;
    //     height: 13px;
    //     width: 16px;
    // }
}

.SideNav_item {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &::before {
        content: none;
    }
}

.SideNav_itemTitle,
.SideNav_itemTitle:link,
.SideNav_itemTitle:visited {
    padding-left: @gap;
    color: @color-white;
    text-decoration: inherit;
}

.SideNav_itemTitle___level2 {
    color: @color-black;
}

.SideNav_item___level1 {
    // border-radius: @gap 0rem 0rem @gap;
    overflow: hidden;

    > ul {
        padding: @gap;
        background-color: @color-gray-light;
    }

    &:not(.active):hover {
        background-color: @color-primary-lighter;
    }

    &.active {
        &:not(:first-child) {
            margin-top: @gap * 0.5;
        }

        &:not(:last-child) {
            margin-bottom: @gap * 0.5;
        }

        & .SideNav_itemTitle___level1 {
            background-color: @color-white;
            color: @color-black;
            position: relative;
            padding-top: @gap*0.25;
            padding-bottom: @gap*0.25;
            padding-right: 40rem;
            &::after {
                content: "\01F441";
                display: grid;
                place-items: center center;
                font-size: 30rem;
                padding-bottom: 6rem;
                padding-right: @gap*0.5;
                position: absolute;
                right: 0px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
}

.SideNav_item___level2 {
    &:hover:not(.active) {
        background-color: @color-primary-lighter;
        border-radius: @gap*0.5;
        .SideNav_itemTitle___level2 {
            color: @color-white;
        }
    }
}
.Main {
    @Main-gap: @gap*2;

    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-y: auto;
    padding-top: @gap*2;
    padding-right: calc(@SideNav-width - @Toc-width - @Main-gap);
    gap: @Main-gap;
}
// @shadow: 0rem 0rem 2px 1px #0003, 0rem 3px 3px #0004;

.Page {
    flex-grow: 1;
    max-width: 800rem;
    min-height: 100%;
    background-color: @color-white;
    margin-bottom: 200rem;
}

.Toc {
    width: @Toc-width;
    background-color: @color-gray-light;
    align-self: flex-start;
    min-height: 300rem;
    border-radius: @gap*0.5;
    position: sticky;
    top: 0rem;
}

.Header_siteTitleContainer,
.Header_siteTitleContainer:link,
.Header_siteTitleContainer:visited {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: @color-white;
    width: @SideNav-width;
    line-height: 1;
    position: relative;
    text-decoration-line: inherit;

    &::after {
        content: "";
        position: absolute;
        left: @gap*2;
        right: @gap*2;
        top: 0rem;
        bottom: 0rem;
        border-bottom: 1px solid @color-white;
    }

    > div {
        width: max-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
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

.Header,
.SideNav,
.Toc,
.Page {
    box-shadow: @shadow;
}

.SideNav_item___level1.active .SideNav_itemTitle___level1 {
    box-shadow: @shadow;
    clip-path: polygon(
        0% 0%,
        calc(100% + 100vw) 0%,
        calc(100% + 100vw) calc(100% + 100vh),
        0% calc(100% + 100vh)
    );
    z-index: 1;
}

/*
	Fonts
\*----------------------------------*/

.Header {
    font-family: @font-family-Montserrat;
}

.PageContainer {
    font-family: @font-family-Montserrat;
}

.Header_siteTitleContainer {
    font-family: @font-family-Roboto;
}
</style>

<style scoped lang="less">
* {
    /* outline: 1px solid red; */
}
</style>
