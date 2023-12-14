<script setup lang="ts">
import HomePageHighlightsProject from "./HomePageHighlightsProject.vue";
import GrungeHeading from "./GrungeHeading.vue";

const props = defineProps<{ dummies: number }>();
</script>

<template>
    <GrungeHeading text="My projects" />
    <div :class="$style.ProjectsContainer">
        <HomePageHighlightsProject :title="'DQ skinning for Unity'">
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
        <HomePageHighlightsProject :title="'joplin-plugin-paginator'">
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
        <HomePageHighlightsProject
            :title="'ProTeGe v2'"
            :images="[
                '/content/project screenshots/Protege v2/1.png',
                '/content/project screenshots/Protege v2/3.png',
            ]"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <HomePageHighlightsProject
            :title="'ProTeGe v1'"
            :images="['/content/project screenshots/Protege v1/1.png']"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            dignissim nibh. Sed pharetra sem et congue faucibus. Maecenas eget
            libero lacus. Nunc non eros id risus accumsan ullamcorper. Nullam
            sit amet purus risus. Aliquam erat volutpat. Vivamus et lacus
            posuere, rutrum magna quis, faucibus nunc.
        </HomePageHighlightsProject>
        <div
            :class="$style.ProjectsContainer_dummy"
            v-for="_ in Array.from({ length: props.dummies })"
        ></div>
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
    background-size: 100% 100%;
    padding: 5rem 50rem 21rem 40rem;
    transform: translateX(5rem);
    background-repeat: no-repeat;
    background-position: center;

    color: @color-white;

    text-shadow: 3rem 1rem 0rem black;
}

.ProjectsContainer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: @gap*2;

    > * {
        flex: 1 1 500rem;
    }
}
</style>
