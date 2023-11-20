<script setup lang="ts">
import { useData, useRoute } from "vitepress";
const route = useRoute();
</script>

<template>
    <div :class="$style.Markdown"><slot /></div>
</template>

<style lang="less" module>
@import "./style/variables/index.less";

.Markdown {
    max-width: @content-width;
    width: 100%;

    text-align: justify;
    font-family: @font-readable;

    h1,
    h2,
    h3,
    h4,
    p,
    table {
        margin-bottom: @gap;
    }

    > *:last-child {
        margin-bottom: 0rem;
    }

    /*
		Headings
	\*----------------------------------*/

    h1,
    h2,
    h3,
    h4 {
        font-family: @font-ui;
    }

    h1 {
        font-size: @size-xl;
        font-weight: bold;
        color: @color-white;
        text-align: center;

        background-color: @color-gray-dark;
        padding: @gap*0.75;
    }

    h2 {
        min-width: 350rem;
        width: min-content;
        margin-left: auto;
        margin-right: auto;

        border: @gap*0.25 solid @color-gray-dark;
        border-radius: @gap;

        font-size: @size-l;
        text-align: center;
        font-weight: bold;
    }

    h3 {
        width: max-content;
        min-width: 220rem;

        padding: @gap*0.5;
        background-color: @color-gray-dark;

        color: @color-white;
    }

    h1,
    h2,
    h3 {
        box-shadow: @shadow;
    }

    /*
		Headings.Margins
	\*----------------------------------*/

    h1,
    h2 {
        margin-bottom: @gap*2;
    }

    * + h2,
    * + h3 {
        margin-top: @gap*4;
    }

    /*
		Tables
	\*----------------------------------*/

    table {
        width: 100%;
        border-collapse: collapse;

        th {
            background-color: @color-gray-dark;
            color: @color-white;
            text-align: center;
            padding: @gap*0.5 @gap;
        }

        td {
            border: 1px solid @color-gray;
            padding: @gap*0.5 @gap;
        }

        th:not(:last-child) {
            border-right: 1px solid @color-gray;
        }
    }

    a {
        font-weight: bold;
        text-decoration: underline;
    }
}
</style>
