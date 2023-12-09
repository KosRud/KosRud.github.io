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
        { url: "/assets/icons/dev/node/icon.svg" },
        { url: "/assets/icons/dev/typescript/icon.svg" },
        { url: "/assets/icons/dev/immutable/icon.png" },
        { url: "/assets/icons/dev/typedoc/icon.png" },
        { url: "/assets/icons/dev/python/icon.svg" },
        { url: "/assets/icons/dev/cpp/icon.svg" },
        { url: "/assets/icons/dev/git/icon.svg" },
        { url: "/assets/icons/dev/doxygen/icon.png" },
    ],
    familiar: [
        { url: "/assets/icons/dev/react/icon.svg" },
        { url: "/assets/icons/dev/fastify/icon.svg" },
        { url: "/assets/icons/dev/deno/icon.svg" },
    ],
};
</script>

<template>
    <div
        :class="[
            $style.Bio,
            store.adaptiveStage == AdaptiveStage.collapsed
                ? $style.Bio___compact
                : '',
        ]"
    >
        <h2>Greetings!</h2>
        <p>
            Name's Kostiantyn, I'm a programmer from Ukraine currently residing
            in Bratislava, Slovakia. This website contains an overview of my
            work (<a href="/projects/">projects</a>,
            <a href="/papers/">papers</a>), as well as an assortment of
            condensed <a href="#">highlights</a> from the web development
            seminars I've been teaching at
            <a href="https://www.fiit.stuba.sk/en.html"
                ><span
                    title="Faculty of Informatics and Information Technologies, Slovak University of Technology"
                    >FIIT STU</span
                ></a
            >.
        </p>
        <table :class="$style.DeviconsTable">
            <tr>
                <td>I worked with:</td>
                <td>
                    <img
                        :class="$style.devIcon"
                        v-for="devIcon in devIcons.worked"
                        :src="devIcon.url"
                    />
                </td>
            </tr>
            <tr>
                <td>I am familiar with:</td>
                <td>
                    <img
                        :class="$style.devIcon"
                        :src="devIcon.url"
                        v-for="devIcon in devIcons.familiar"
                    />
                </td>
            </tr>
        </table>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.DeviconsTable {
    td:first-child {
        text-align: right;
        padding-right: @gap*1.5;
        vertical-align: top;
        white-space: nowrap;
    }
    tr {
        td {
            padding-bottom: @gap;
        }
    }
}

.Bio {
    .Content();
    flex: 1 1 400rem;

    font-size: @size-l;

    h1,
    h2,
    h3,
    h4,
    p {
        margin-bottom: @content-gap*1.5;
    }

    h2 {
        font-size: @size-xl;
        font-weight: bold;
    }
}

.Bio___compact {
    font-size: @size;

    h1,
    h2,
    h3,
    h4,
    p {
        margin-bottom: @content-gap;
    }

    h2 {
        font-size: @size-xl;
    }
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
</style>
