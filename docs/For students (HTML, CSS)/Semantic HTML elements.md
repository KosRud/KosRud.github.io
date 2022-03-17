# Semantic HTML elements

Semantic elements convey their purpose on the page (example: `<nav>` provides navigation links), and help define the structure of your page.

Non-semantic elements, on the other hand, do not have a strictly defined purpose. Example:&nbsp;`<div>`.

By examining the semantic elements on your page, a program can automatically determine the hierarchical structure of your content, and build a table of contents. This is useful for search engines and screen readers, among other things.

!!! note "Links"
    * Mozilla developer network - [Semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html)
    * w3schools - [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

## Example layout

<style>
    .semantic-example-container {
        width: 500px;
        --semantic-example-margin: 12px;
        margin-bottom: 40px;
        margin-top: 40px;
    }
    .semantic-example {
        border: 2px solid black;
        box-sizing: border-box;
        text-align: center;
        margin: var(--semantic-example-margin);
        padding-top: 4px;
        padding-bottom: 4px;
        color: black;
        background: #CCCCFF;
        box-shadow: var(--shadow-offset-high-X) var(--shadow-offset-high) var(--shadow-blur-high) var(--shadow-color-high);
    }

    .semantic-example > .semantic-example {
        background: #CCFFCC;
    }

    .semantic-example > .semantic-example > .semantic-example {
        background: #FFCCCC;
    }

    .semantic-example > .semantic-example > .semantic-example > .semantic-example {
        background: #FFFFAA;
    }

    .semantic-example-flex {
        display: flex;
        gap: var(--semantic-example-margin);
        margin-left: var(--semantic-example-margin);
        margin-right: var(--semantic-example-margin);
    }

    .semantic-example-flex.horizontal-nav > div:nth-child(1) {
        flex-grow: 1;
    }

    .semantic-example-flex.horizontal-nav > div:nth-child(2) {
        width: 100px;
    }

    .semantic-example-flex > * {
        margin: 0px;
    }

    .semantic-example-flex.vertical-nav > div:nth-child(2) {
        flex-grow: 1;
    }

    .semantic-example-flex.vertical-nav > div:nth-child(3) {
        width: 100px;
    }

    .semantic-example-flex.vertical-nav > div:nth-child(1) {
        width: 100px;
    }
    
</style>

### Horizontal menu

<div class="semantic-example-container">
    <div class="semantic-example">
        header
    </div>
    <div class="semantic-example">
        nav
    </div>
    <div class="semantic-example-flex horizontal-nav">
        <div class="semantic-example">
            main
            <div class="semantic-example">
                section
                <div class="semantic-example">
                    article
                </div>
                <div class="semantic-example">
                    article
                </div>
            </div>
            <div class="semantic-example">
                section
                <div class="semantic-example">
                    article
                </div>
                <div class="semantic-example">
                    article
                </div>
            </div>
        </div>
        <div class="semantic-example">
            aside
        </div>
    </div>
    <div class="semantic-example">
        footer
    </div>
</div>

### Vertical menu

<div class="semantic-example-container">
    <div class="semantic-example">
        header
    </div>
    <div class="semantic-example-flex vertical-nav">
        <div class="semantic-example">
            nav
        </div>
        <div class="semantic-example">
            main
            <div class="semantic-example">
                section
                <div class="semantic-example">
                    article
                </div>
                <div class="semantic-example">
                    article
                </div>
            </div>
            <div class="semantic-example">
                section
                <div class="semantic-example">
                    article
                </div>
                <div class="semantic-example">
                    article
                </div>
            </div>
        </div>
        <div class="semantic-example">
            aside
        </div>
    </div>
    <div class="semantic-example">
        footer
    </div>
</div>