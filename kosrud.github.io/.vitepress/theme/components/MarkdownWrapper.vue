<template>
    <div :class="$style.Markdown">
        <slot />
    </div>
</template>

<style lang="less" module>
@import "../style/variables/index.less";

.Markdown {
    max-width: @content-width;
    width: 100%;

    text-align: justify;

    h1,
    h2,
    h3,
    h4,
    p,
    table {
        margin-bottom: @content-gap;
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
        font-family: @font-techy;
    }

    h1 {
        font-size: @size-xl;
        font-weight: bold;
        color: @color-white;
        text-align: center;

        background-color: @color-background-dark;
        padding: @gap*0.75;
    }

    h2 {
        min-width: min(350rem, 100%);
        width: min-content;
        margin-left: auto;
        margin-right: auto;

        border: @border-width solid @color-background-dark;
        border-radius: @gap;

        font-size: @size-l;
        text-align: center;
        font-weight: bold;
    }

    h3 {
        min-width: min(220rem, 100%);
        width: fit-content;

        padding: @gap*0.5;
        background-color: @color-background-dark;

        text-align: left;
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
        margin-bottom: @content-gap*2;
    }

    * + * {
        &h1,
        &h2,
        &h3 {
            margin-top: @content-gap*4;
        }
    }

    /*
		Tables
	\*----------------------------------*/

    table {
        margin-left: auto;
        margin-right: auto;
        display: block;
        max-width: max-content;
        overflow-x: auto;
        border-collapse: collapse;
        text-align: left;

        th {
            background-color: @color-background-dark;
            color: @color-white;
            text-align: center !important; // override markdown
            padding: @gap*0.5 @gap;
        }

        td {
            border: 1px solid @color-border;
            padding: @gap*0.5 @gap;
        }

        th:not(:last-child) {
            border-right: 1px solid @color-border;
        }
    }

    /*
		Code
	\*----------------------------------*/

    pre {
        white-space: pre-wrap;
    }

    /*
		ETC
	\*----------------------------------*/

    a {
        font-weight: bold;
        text-decoration: underline;
    }
}
</style>
