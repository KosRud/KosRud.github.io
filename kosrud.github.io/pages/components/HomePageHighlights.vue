<template>
    <h2 :class="$style.Projects_heading">Project highlights</h2>
    <div :class="$style.Projects_container">
        <div
            :class="$style.Project_banner"
            v-for="id in Array.from({ length: 8 })"
        >
            <h3 :class="$style.Project_title">Project title</h3>
        </div>
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

.Project_banner {
    flex: 1 1 500rem;

    min-height: 200rem;
    // box-shadow: @shadow-s;
    border: @border-width-s solid @color-border;
}

.Project_title {
    @Project_title-padding: @gap*0.5;
    @Project_title-clip: @gap;

    min-width: min(220rem, 100%);
    width: fit-content;

    padding: @Project_title-padding;
    padding-right: @Project_title-padding + @Project_title-clip;
    background-color: @color-background-dark;

    text-align: left;
    color: @color-white;
    clip-path: polygon(
        0% 0%,
        100% 0%,
        calc(100% - @Project_title-clip) 100%,
        0% 100%
    );

    .heading-shadow();
}
</style>
