<script setup>
const features = [
    { name: "Programming languages" },
    { name: "Communication" },
    { name: "Technologies" },
];
</script>

<template>
    <section :class="$style.CardGallery">
        <article
            :class="$style.Card"
            v-for="feature in features"
        >
            <h2 :class="$style.Card_title">{{ feature.name }}</h2>
            <div :class="$style.Card_content">
                <table>
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ukrainian</td>
                            <td>native</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
        <article
            :class="[$style.Card, $style.CardGallery_card___dummy]"
            v-for="_ in Array.from({ length: 16 })"
        ></article>
    </section>
</template>

<style module lang="less">
@import "../../.vitepress/theme/style/main/index.less";

.CardGallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: @gap*4;
    justify-content: stretch;
    align-items: start;
    width: 100%;
}

.Card {
    flex: 1 0 0rem;
    min-height: 200rem;
    min-width: 300rem;

    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    background: @color-gray-light;
    box-shadow: @shadow;
    border: 1rem solid @color-gray;
    padding: @gap;
}

.Card_title {
    font-size: @size-l;
    // font-family: @font-compact;
    text-align: center;
}

.Card_content {
    flex-grow: 1;

    // background-color: red;

    table {
        width: 100%;
    }
}

.CardGallery_card___dummy {
    min-height: 0rem;

    border: none;
    padding: 0rem;
}
</style>
