# CSS Selectors

## Most Common Selectors

|Selector|Description</div>|Comment|
|:---|:---|:---|
|*|Any element (universal selector).|
|#elementID|Any element with `id="elementID"`.|A page should only have one element with a given `id`.|
|.enementClass|Any element with `class="elementClass"`.|An element can have multiple classes, separated by space.|
|div|Any `<div>`.|
|div#divID.divClass|Any `<div>` with `id="id"` and `class="divClass"`.|

## Combinators

|Selector|Description|Comment|
|:---|:---|:---|    
|div, p|Any `<div>`, and any `<p>`.|
|div p|Any `<p>` inside a `<div>`.|Does not have to be a direct child.|
|div > p|Any `<p>`, which is a direct child of a `<div>`.|
|div + p|Any `<p>` immediately after a `<div>`.|

## Links

|Selector|Description|
|:---|:---|
|a:link|Unvisited link.|
|a:visited|Visited link.|

## Hover and Click

|Selector|Description|
|:---|:---|
|.button:active|Any element with `class="button"`,<br>which is currently being clicked.|
|.button:hover|Any element with `class="button"`,<br>which has the cursor hovering above it.|

## Further Reading

|||
|----|----|
|MDN|[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)|
|w3school|[CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)|