<script setup lang="ts">
import { useData } from "vitepress";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter, theme } = useData();
</script>

<template>
    <div :class="$style.PageContainer">
        <header :class="$style.Header">
            <div :class="$style.Header_siteTitleContainer">
                <div>
                    <span :class="$style.Header_siteTitle">
                        {{ site.title }}</span
                    >
                    <span :class="$style.Header_siteDescription">
                        {{ site.description }}</span
                    >
                </div>
            </div>
            <nav :class="$style.Header_nav">
                <ul>
                    <li :class="$style.Header_navItem">
                        <a
                            :class="$style.Header_navLink"
                            href="#"
                            >About me</a
                        >
                    </li>
                    <li :class="$style.Header_navItem">
                        <a
                            :class="$style.Header_navLink"
                            href="#"
                            >My projects</a
                        >
                    </li>
                    <li :class="$style.Header_navItem">
                        <a
                            :class="$style.Header_navLink"
                            href="#"
                            >For students</a
                        >
                    </li>
                    <li :class="$style.Header_navItem">
                        <a
                            :class="$style.Header_navLink"
                            href="#"
                            >Blog</a
                        >
                    </li>
                </ul>
            </nav>
        </header>
        <div :class="$style.MainContainer">
            <aside :class="$style.SideNav">
                <nav :class="$style.SideNav_recess">
                    <ul></ul>
                </nav>
            </aside>
            <main :class="$style.Main">
                <section :class="$style.Page"><Content /></section>
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

.PageContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.Header {
    align-self: stretch;
    background-color: @color-dark;
    display: flex;
    overflow: visible;
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
        content: "";
    }
    display: grid;
    place-content: center center;
}

.Header_navLink {
    @Header_navLink-border-width: 2rem;

    &:link,
    &:visited {
        color: white;
        text-decoration: none;
    }
    background: @color-primary;
    background-clip: border-box;
    border: @Header_navLink-border-width solid #fff1;
    // border: @Header_navLink-border-width solid transparent;
    border-radius: @gap;
    line-height: 1;
    padding: @gap - @Header_navLink-border-width;
    min-width: @gap*12;
    display: grid;
    place-content: center center;
    box-shadow: @shadow;
    transition: background-color 0.2s;
    transition: border-color 0.5s;

    &:hover {
        background-color: screen(@color-primary, #242424);
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

.SideNav {
    width: @SideNav-width;
    background-color: @color-dark;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
}

.SideNav_recess {
    //
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
    max-width: 900rem;
    min-height: 100%;
    background-color: white;
    margin-bottom: 200rem;
}

.Toc {
    width: @Toc-width;
    background-color: @color-gray-light;
    align-self: flex-start;
    min-height: 300rem;
    border-radius: @gap;
    position: sticky;
    top: 0rem;
}

.Header_siteTitleContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: @SideNav-width;
    line-height: 1;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: @gap*2;
        right: @gap*2;
        top: 0rem;
        bottom: 0rem;
        border-bottom: 1px solid white;
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

.Header,
.SideNav,
.Toc,
.Page {
    box-shadow: @shadow;
}
.Header {
    clip-path: polygon(
        0% 0%,
        100% 0%,
        100% calc(100% + 100vh),
        @SideNav-width calc(100% + 100vh),
        @SideNav-width 100%,
        0% 100%
    );
}

/*
	Fonts
\*----------------------------------*/

.Header {
    font-family: @font-family-Roboto;
}

.PageContainer {
    font-family: @font-family-Lato;
}
</style>

<style scoped lang="less">
* {
    /* outline: 1px solid red; */
}

// &::-webkit-scrollbar-thumb {
//     border-radius: 100vw;
//     background-color: @color-primary;
// }
// &::-webkit-scrollbar {
//     width: @gap;
//     background-color: @color-dark;
// }
</style>
