<script setup>
const highlights = [
    { name: "Programming languages" },
    { name: "Communication" },
    { name: "Technologies" },
];
</script>

<template>
    <div :class="$style.HomePage">
        <section :class="$style.Hero">
            <div :class="$style.SiteNameContainer">
                <h2 :class="$style.SiteNameContainer_title">
                    Kostiantyn Rudenko
                </h2>
                <h3 :class="$style.SiteNameContainer_subtitle">
                    personal website
                </h3>
            </div>
        </section>
        <div :class="$style.ContentWrapper">
            <section :class="$style.ContentWrapper_content">
                <section :class="$style.CardGallery">
                    <article
                        :class="$style.CardGallery_card"
                        v-for="highlight in highlights"
                    >
                        {{ highlight.name }}
                    </article>
                    <article
                        :class="[
                            $style.CardGallery_card,
                            $style.CardGallery_card___dummy,
                        ]"
                        v-for="_ in Array.from({ length: 16 })"
                    ></article>
                </section>
            </section>
        </div>
    </div>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.HomePage {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.Hero {
    flex-grow: 0;

    background-color: @color-primary-muted;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-family-compact;

    box-shadow: 0rem 0rem 100rem inset #0004;
}

.SiteNameContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
    line-height: 1.2;
    margin: @gap*8;
}

.SiteNameContainer_title {
    font-weight: bold;
    font-size: @size-hero;
}

.SiteNameContainer_subtitle {
    font-size: @size-hero-s;
}

.ContentWrapper {
    flex-grow: 1;

    padding: @gap*2;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-inverted;
}

.ContentWrapper_content {
    max-width: 1200rem;
}
.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap*4;
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
    border: 1rem solid @color-gray;
    padding: @gap;
}

.CardGallery_card___dummy {
    min-height: 0rem;
    border: none;
    padding: 0rem;
}
</style>
