# Semantic HTML elements

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