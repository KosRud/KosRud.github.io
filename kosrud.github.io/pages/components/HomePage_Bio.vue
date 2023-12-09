<script setup lang="ts"></script>

<template>
    <div :class="$style.Bio">
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
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/variables/index.less";
@import "../../.vitepress/theme/style/mixins/index.less";

.Bio {
    .Content();

    font-size: @size-l;

    h1,
    h2,
    h3,
    h4,
    p {
        margin-bottom: @content-gap*1.5;
    }

    h2 {
        font-size: @size-xxl;
    }
}
</style>
