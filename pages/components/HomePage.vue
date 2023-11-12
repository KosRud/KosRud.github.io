<script setup>
const highlights = [
    { name: "Programming languages" },
    { name: "Communication" },
    { name: "Technologies" },
];
</script>

<template>
    <section :class="$style.Hero">
        <div :class="$style.SiteNameContainer">
            <h2 :class="$style.SiteNameContainer_title">Kostiantyn Rudenko</h2>
            <h3 :class="$style.SiteNameContainer_subtitle">personal website</h3>
        </div>
    </section>
    <section :class="$style.CardGallery">
        <article
            :class="$style.CardGallery_card"
            v-for="highlight in highlights"
        >
            {{ highlight.name }}
        </article>
        <article
            :class="[$style.CardGallery_card, $style.CardGallery_card___dummy]"
            v-for="_ in Array.from({ length: 16 })"
        ></article>
    </section>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.Hero {
    height: 500rem;
    background-color: @color-primary;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-family-compact;
}

.SiteNameContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
}

.SiteNameContainer_title {
    font-size: @size-hero;
}

.SiteNameContainer_subtitle {
    font-size: @size-hero-s;
}
.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap;
    justify-content: stretch;
    align-items: start;
    width: 100%;
}

.CardGallery_card {
    background: @color-gray-light;
    min-height: 200rem;
    min-width: 200rem;
    flex: 1 0 0rem;
    box-shadow: @shadow;
}

.CardGallery_card___dummy {
    min-height: 0rem;
}
</style>
