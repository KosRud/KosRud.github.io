<script setup lang="ts">
import { AdaptiveStage } from "../../.vitepress/theme/components/composables/adaptiveStages";
import { useStore } from "../../.vitepress/theme/components/pinia/store";

const store = useStore();

const devIcons = {
    worked: [
        { url: "/assets/icons/dev/unity/icon.svg" },
        { url: "/assets/icons/dev/csharp/icon.svg" },
        { url: "/assets/icons/dev/hlsl/icon.svg" },

        { url: "/assets/icons/dev/vue/icon.svg" },
        { url: "/assets/icons/dev/pinia/icon.svg" },

        { url: "/assets/icons/dev/javascript/icon.svg" },
        { url: "/assets/icons/dev/typescript/icon.svg" },

        { url: "/assets/icons/dev/html5/icon.svg" },
        { url: "/assets/icons/dev/css3/icon.svg" },
        { url: "/assets/icons/dev/less/icon.svg" },

        { url: "/assets/icons/dev/immutable/icon.svg" },
        { url: "/assets/icons/dev/typedoc/icon.png" },
        { url: "/assets/icons/dev/node/icon.svg" },

        { url: "/assets/icons/dev/python/icon.svg" },

        { url: "/assets/icons/dev/cpp/icon.svg" },

        { url: "/assets/icons/dev/doxygen/icon.png" },
        { url: "/assets/icons/dev/git/icon.svg" },
    ],
    dabbled: [
        { url: "/assets/icons/dev/react/icon.svg" },
        { url: "/assets/icons/dev/redis/icon.svg" },
        { url: "/assets/icons/dev/mongodb/icon.svg" },
        { url: "/assets/icons/dev/fastify/icon.svg" },
        { url: "/assets/icons/dev/deno/icon.svg" },
        { url: "/assets/icons/dev/cython/icon.svg" },
        { url: "/assets/icons/dev/lua/icon.svg" },
        { url: "/assets/icons/dev/rust/icon.svg" },
    ],
};
</script>

<template>
    <div
        :class="[
            store.adaptiveStage == AdaptiveStage.collapsed
                ? $style.Bio___compact
                : '',
        ]"
    >
        <div :class="$style.Bio_titleContainer">
            <div :class="$style.Bio_titleSpacer"></div>
            <h2 :class="$style.Bio_title">Greetings!</h2>
        </div>

        <div :class="$style.Bio_content">
            <img
                :class="$style.Bio_photo"
                src="/assets/photo.png"
            />
            <div :class="[$style.Bio_text]">
                <p>
                    Name's Kostiantyn. I'm a programmer from Ukraine currently
                    residing in Bratislava, Slovakia. This website contains an
                    overview of my work (<a href="/projects/">projects</a>,
                    <a href="/papers/">papers</a>), as well as an assortment of
                    condensed <a href="#">highlights</a> from the web
                    development seminars I've been teaching at
                    <a href="https://www.fiit.stuba.sk/en.html"
                        ><span
                            title="Faculty of Informatics and Information Technologies, Slovak University of Technology"
                            >FIIT STU</span
                        ></a
                    >.
                </p>
                <table :class="$style.DeviconsTable">
                    <tr>
                        <td>I have experience working with:</td>
                        <td>
                            <img
                                :class="$style.devIcon"
                                v-for="devIcon in devIcons.worked"
                                :src="devIcon.url"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>I have dabbled with:</td>
                        <td>
                            <img
                                :class="$style.devIcon"
                                :src="devIcon.url"
                                v-for="devIcon in devIcons.dabbled"
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

@Bio_photo-width: 130rem;
@Bio_photo-to-content-gap: @gap * 4;
@Bio_content-gap: @gap*1.5;

.DeviconsTable {
    td:first-child {
        text-align: right;
        padding-right: @gap*1.5;
        vertical-align: top;
        white-space: nowrap;
    }

    td {
        padding-bottom: @gap*0.5;
        padding-top: @gap*0.5;
    }
}

.Bio_title {
    flex: 1 1 400rem;

    font-size: @size-xl;
    font-weight: bold;
    max-width: @content-width;
    margin-bottom: @Bio_content-gap;
}

.Bio_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    gap: @Bio_content-gap @Bio_photo-to-content-gap;
    justify-content: center;
    align-items: start;

    margin-right: @Bio_photo-width + @Bio_photo-to-content-gap;
}

.Bio_text {
    .Content();
    flex: 1 1 400rem;

    font-size: @size-l;

    h1,
    h2,
    h3,
    h4,
    p {
        margin-bottom: @Bio_content-gap;
    }
}

.Bio_titleContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: @Bio_photo-width + @Bio_photo-to-content-gap;
}

.Bio_titleSpacer {
    flex: 0 0 @Bio_photo-width + @Bio_photo-to-content-gap;
    height: 0rem;
}

.Bio_photo {
    flex: 0 1 @Bio_photo-width;
    border-radius: 50% @gap @gap 30% / 50% @gap @gap 50%;
    box-shadow: @shadow;

    object-fit: cover;

    margin-top: @size-l*0.3;
    margin-bottom: @gap;
}

.devIcon {
    height: @size*2;
    vertical-align: middle;

    &:first-child {
        margin-left: @gap*0.5;
    }
    margin: @gap*0.25;
    transform: translateY(-15%);
}

/*
	Responsive
\*----------------------------------*/

.Bio___compact {
    font-size: @size;

    h2 {
        font-size: @size-xl;
    }

    .Bio_content {
        gap: @gap*2 @gap*4;
        margin-right: 0rem;
    }

    .Bio_titleContainer {
        margin-right: 0rem;
    }

    .Bio_photo {
        // border-radius: 50% / 20%;
    }

    .DeviconsTable {
        td {
            white-space: wrap;
            text-align: left;
        }

        tr {
            display: flex;
            flex-wrap: wrap;
        }
    }
}
</style>
