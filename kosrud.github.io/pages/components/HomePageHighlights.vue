<script setup lang="ts">
import HomePageHighlightsProject from "./HomePageHighlightsProject.vue";
</script>

<template>
    <h2 :class="$style.Projects_heading">My projects</h2>
    <div :class="$style.Projects_container">
        <HomePageHighlightsProject
            :images="[
                '/content/project screenshots/Protege v2/1.png',
                '/content/project screenshots/Protege v2/2.png',
                '/content/project screenshots/Protege v2/3.png',
            ]"
            :title="'DQ skinning for Unity'"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'joplin-plugin-paginator'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'ProTeGe v2'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'ProTeGe v1'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'dice-pool-calc'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'This website'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject :title="'Material Clustering Benchmark'">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
    </div>
</template>

<style lang="less" module>
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Projects_heading {
    font-weight: bold;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

    font-size: @size-xxl;
    margin-bottom: @gap*4;

    background-image: url("/assets/smudges/2.svg");
    background-size: contain;
    padding: 5rem 50rem 21rem 40rem;
    transform: translateX(5rem);
    background-repeat: no-repeat;
    background-position: center;

    color: @color-white;

    text-shadow: 3rem 1rem 0rem black;
}

.Projects_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: @gap*2;

    > * {
        flex: 1 1 500rem;
    }
}
</style>
