# CSS selectors

!!! note "Links"
    * Mozilla Developer Network - [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
    * w3school - [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)

## Most common selectors

|Selector|<div style="width:300px;">Description</div>|Comment|
|:---|:---|:---|
|*|any element (universal selector)|
|#elementID|any element with `id="elementID"`|a page should only have one element with a given `id`|
|.enementClass|any element with `class="elementClass"`|an element can have multiple classes, separated by space|
|div|any `<div>`|
|div#divID.divClass|any `<div>` with `id="id"` and `class="divClass"`|

### Combinators

|Selector|Description|Comment|
|:---|:---|:---|    
|div, p|any `<div>`, and any `<p>`|
|div p|any `<p>` inside a `<div>`|`<p>` can be a child<br>of a child<br>of a `<div>`|
|div > p|any `<p>`, which is a direct child of a `<div>`|
|div + p|any `<p>` immediately after a `<div>`|

### Links

|Selector|Description|
|:---|:---|
|a:link|unvisited link|
|a:visited|visited link|

### Hover and click

|Selector|Description|
|:---|:---|
|.button:active|any element with `class="button"`,<br>which is currently being clicked|
|.button:hover|any element with `class="button"`,<br>which has the cursor hovering above it|