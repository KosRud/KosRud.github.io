## Most common selectors

|Selector|Description|Comment|
|:---|:---|:---|
|*|Any element (universal selector).|
|#elementID|Any element with `id="elementID"`.|A page should only have one element with a given `id`.|
|.enementClass|Any element with `class="elementClass"`.|An element can have multiple classes separated by space.|
|div|Any `<div>`.|
|div#divID.divClass|Any `<div>` with `id="id"` and `class="divClass"`.|

## Combinators

|Selector|Description|
|:---|:---|  
|div, p|any `<div>` and any `<p>`|
|div p|any `<p>` inside a `<div>`<br>*(does not have to be a direct child)* |
|div > p|any `<p>` which is a direct child of a `<div>`|
|div + p|any `<p>` immediately after a `<div>`|

## Links

|Selector|Description|
|:---|:---|
|a:link|unvisited link|
|a:visited|visited link|

## Hover and click

|Selector|Description|
|:---|:---|
|.button:active|any element with `class="button"` <br> which is currently being clicked|
|.button:hover|any element with `class="button"` <br> which has the cursor hovering above it|

## Further reading

MDN
:	[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

w3school
:	[CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)