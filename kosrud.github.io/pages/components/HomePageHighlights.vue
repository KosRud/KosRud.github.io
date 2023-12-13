<script setup lang="ts">
import HomePageHighlightsProject from "./HomePageHighlightsProject.vue";
</script>

<template>
    <h2 :class="$style.Projects_heading">Project highlights</h2>
    <div :class="$style.Projects_container">
        <HomePageHighlightsProject
            v-for="id in Array.from({ length: 8 })"
            :class="$style.Project"
        >
        </HomePageHighlightsProject>
    </div>
</template>

<style lang="less" module>
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Projects_heading {
    .heading2();

    font-size: @size-xl;
    margin-bottom: @gap*4;
}

.Projects_container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: @gap*2;
}

.Project {
    flex: 1 1 500rem;
}
</style>
