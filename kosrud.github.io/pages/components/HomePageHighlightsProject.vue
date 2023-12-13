<template>
    <div :class="$style.Project">
        <div :class="$style.Project_description">
            <h3 :class="$style.Project_title">Project title</h3>
        </div>
        <div :class="$style.Project_images"></div>
    </div>
</template>

<style lang="less" module>
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Project {
    min-height: 200rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-items: stretch;
    align-items: stretch;

    border: @border-width-s solid @color-border;
}

.Project_description {
    flex: 1 1;

    background-color: #a003;
}

.Project_images {
    flex: 1 1;

    background-color: #0a03;
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
