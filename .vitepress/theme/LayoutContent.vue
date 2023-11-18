<script setup lang="ts">
import { useData, useRoute } from "vitepress";
const route = useRoute();
</script>

<template>
    <section :class="$style.Main_content">
        <header :class="$style.CurrentLocation">
            <strong>You are here:</strong> {{ route.path }}
        </header>
        <Content />
    </section>
</template>

<style lang="less" module>
@import "./style/variables/index.less";

.CurrentLocation {
    margin-bottom: @gap*2;
    text-transform: capitalize;
}

.Main_content {
    flex-grow: 1;
    max-width: @content-width;
    height: min-content;
    min-height: 100%;

    padding: @Main-gap;
    background-color: @color-white;
    border-right: 1rem solid @color-gray;
    border-left: 1rem solid @color-gray;

    h1,
    h2,
    h3,
    h4,
    p,
    table {
        margin-bottom: @gap;
    }

    /*
		Bold, Italics
	\*----------------------------------*/

    strong {
        font-weight: bold;
    }

    /*
		Headings
	\*----------------------------------*/

    h1,
    h2,
    h3,
    h4 {
        font-family: @font-alt;
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
            // font-weight: bold;
            // background-color: @color-primary;
            // text-shadow: 2rem 0rem 0rem @color-black;
            // font-family: @font-alt;
        }

        tr:nth-child(2n) {
            // background-color: @color-gray-lighter;
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
        font-family: @font-alt;
    }
}
</style>
