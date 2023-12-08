# Semantic HTML Elements

Semantic elements work similarly to `<div>`, but they also convey their purpose on the page (example: `<nav>` provides navigation links), and help define the structure of your page.

Non-semantic elements, on the other hand, do not have a strictly defined purpose 
(example:&nbsp;`<div>`).

By examining the semantic elements on your page, a program can automatically determine the hierarchical structure of your content, and build a table of contents. This is useful for search engines and screen readers, among other things. It also makes the HTML code easier to read and understand for humans.

The following is NOT a complete list of semantic elements (refer to [Further Reading](#further-reading) section to learn about other semantic elements):

nav
:	Provides navigation (menu). Can be placed inside a `<header>`, `<aside>`, or on its own.

header
:	Placed on top of the page. Can contain headings (`<h1>`, `<h2>`, ...), navigation (`nav`), website logo, search form.

footer
:	Placed at the bottom of th page. Can contain author contacts, credits, copyright, links to related documents, non-essential information.

article
:	A self-contained block of content, which does not depend on surrounding elements of the page to make sense. For example, a single product in an online shop can be represented as an `<article>`. It might appear in different contexts and still make sense, for example: in the list of available products, in the list of discounted products, and in the shopping cart.

section
:	A part of a whole. This can be a section of the page, or a section of the article. Section is less "strict" than article, as it does not require the content inside it to be independent (self-contained). A single product record in an online shop (`<article>`) can have separate sections for the picture, description, and comments.

aside
:	Should be placed as a sidebar (left or right).

	Might contain links to related articles, tags, interesting facts, a highlight of recent updates, advertising, download links, etc. Content of `<aside>` should be less important than the content of `<main>`. Most of the time the user should spend interacting with `<main>`, and only looking at `<aside>` occasionally.

main
:	Main content of the page.


## Further reading

|||
|----|----|
|MDN|[Semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html)|
|w3school|[HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)|

## Example layout

<style>
    
    .semantic-example-container {
        width:100%;
        max-width: 500px;
        min-width: 400px;
        --semantic-example-margin: 10px;
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
    }

    .semantic-example > .semantic-example {
        background: #CCFFCC;
    }

    .semantic-example > .semantic-example > .semantic-example {
        background: #FFCCCC;
    }

    .semantic-example-nav,
    .semantic-example .semantic-example-nav {
        background: #FFFFAA;
    }

    .semantic-example-flex {
        display: flex;
        gap: var(--semantic-example-margin);
        margin-left: var(--semantic-example-margin);
        margin-right: var(--semantic-example-margin);
    }

    .semantic-example-flex > * {
        margin: 0px;
    }

    .semantic-example-flex > div:nth-child(2) {
        flex-grow: 1;
    }

    .semantic-example-flex > div:nth-child(3) {
        width: 100px;
    }

    .semantic-example-flex > div:nth-child(1) {
        width: 100px;
    }    
</style>

### Horizontal menu

<div class="hor-scroll-wrapper">
    <div class="semantic-example-container">
        <div class="semantic-example">
            header
        </div>
        <div class="semantic-example semantic-example-nav">
            nav
        </div>
        <div class="semantic-example-flex">
            <div class="semantic-example">
                aside
            </div>
            <div class="semantic-example">
                main
                <div class="semantic-example">
                    article
                    <div class="semantic-example">
                        section
                    </div>
                    <div class="semantic-example">
                        section
                    </div>
                </div>
                <div class="semantic-example">
                    article
                    <div class="semantic-example">
                        section
                    </div>
                    <div class="semantic-example">
                        section
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
</div>

### Vertical menu

<div class="hor-scroll-wrapper">
    <div class="semantic-example-container">
        <div class="semantic-example">
            header
        </div>
        <div class="semantic-example-flex">
            <div class="semantic-example">
                aside
				<div class="semantic-example semantic-example-nav">
					nav
				</div>
            </div>
            <div class="semantic-example">
                main
                <div class="semantic-example">
                    article
                    <div class="semantic-example">
                        section
                    </div>
                    <div class="semantic-example">
                        section
                    </div>
                </div>
                <div class="semantic-example">
                    article
                    <div class="semantic-example">
                        section
                    </div>
                    <div class="semantic-example">
                        section
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
</div>