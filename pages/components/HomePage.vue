<script setup lang="ts">
import HomePageFeatures from "./HomePageFeatures.vue";
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
            <section :class="$style.Bio">
                <img
                    :class="$style.Bio_photo"
                    src="/assets/icons/photo/icon.svg"
                />
                <div :class="$style.Bio_text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vulputate in dui nec pellentesque. Nullam efficitur
                        tellus turpis, ac sagittis lorem eleifend sit amet. In
                        rutrum eros metus, non egestas tortor sollicitudin
                        vitae.
                    </p>
                    <p>
                        Pellentesque auctor nisi vitae ligula luctus, vitae
                        placerat quam mollis. Ut in pellentesque massa. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Nunc ultrices imperdiet
                        molestie.
                    </p>
                </div>
            </section>
            <section>
                <HomePageFeatures />
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

    overflow-y: auto;
}

.Hero {
    flex: 0 0 auto;

    background-color: @color-primary-muted;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: @font-title;

    box-shadow: 0rem 0rem 100rem inset #0004;
}

.SiteNameContainer {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    text-shadow: 2px 2px 0px black, 4px 4px 12px #000a;
    line-height: 1.2;
    margin: @gap*4;
}

.SiteNameContainer_title {
    font-weight: bold;
    font-size: @size-hero;
}

.SiteNameContainer_subtitle {
    font-size: @size-hero-s;
}

.Bio {
    display: flex;
    flex-direction: row;
    gap: @gap*2;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
}
.Bio_text {
    flex: 1 0 300rem;
}

.Bio_photo {
    height: 200rem;
    width: 160rem;
    aspect-ratio: 1;
    flex-shrink: 0;

    background-color: #bbe;
    padding: @gap*2;

    border-radius: @gap*0.5;

    // margin-left: auto;
    // margin-right: auto;
}

.ContentWrapper {
    flex-grow: 1;
    min-height: max-content;

    padding: @gap*4;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: @shadow-inverted;

    text-align: justify;

    > section {
        flex-shrink: 0;
        width: 100%;
        max-width: 1200rem;
        height: max-content;
    }

    p {
        max-width: @content-width;
    }

    section,
    p {
        margin-bottom: @gap*2;
    }
}
</style>
