# Requirements

## URL format

Make sure to familiarize yourself with the URL format.

!!! note "Reading materials"
	* [MDN &mdash; what is a URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)
	* [w3school &mdash; html links](https://www.w3schools.com/html/html_links.asp)
	* [w3school &mdash; html filepaths](https://www.w3schools.com/html/html_filepaths.asp)

In the checkpoints 3 and 4 you must use either *relative*, or *"implicit domain name"* URLs for links between pages of your website. When making links to other websites, use full URL format.

!!! note "Example"
	* relative
		* `images/example.png`
		* `../../css/example.css`
	* implicit domain
		* `/index.html`
		* `/images/phone/example.jpg`
	* full URL
		* `https://developer.mozilla.org/en-US/docs/Learn`
		* `https://google.com`

!!! warning
	Using a `file://` URL will be considered a **major** mistake in checkpoints 3 and&nbsp;4. These links only work on your computer, and will break if you move the website to another folder!

	[file URI scheme &mdash; Wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme)

## Code in the report

Minifier
:	A *"minifier"* is a tool, which can compress your HTML and CSS code by removing spaces and line breaks. This does not prevent the code from working, but makes it difficult to read for humans. On the positive side, it becomes more compact.

Beautifier
:	A *"beautifier"* is a tool, which automatically inserts spaces and line breaks into your HTML and CSS code, making it easier to read. It can restore minified code to a readable state.

When inserting code into the pdf report:

* use a monospace font for code (`Liberation Mono`, `Courier New`, or similar)
* use a smaller font size, than normal text
	* normal text: 14 pt
	* code: 10 pt
* do NOT copy the formatting from your IDE (background, font color, etc.)
* run your code through a minifier prior to inserting into pdf

!!! warning
	Run every .html and .css file through a validator before submitting!

	* [html validator](https://validator.w3.org/)
	* [css validator](https://jigsaw.w3.org/css-validator/)

## Server

For php code to function, you need a server. Simply opening a .php file in your browser will not work. Most web server extensions for VS code do NOT support php, either.

You can use any server you like. I recommend [xampp](https://www.apachefriends.org/) &mdash; it contains everything you need in a single package, that is ready to use after installation.

## Layout

For examples of creating the page layout, look [here](https://kosrud.github.io/For%20students%20%28HTML%2C%20CSS%29/Examples%20and%20snippets/). In particular:

* Repl.it &mdash; CSS demo &mdash; Multi-column layout
* Repl.it &mdash; CSS demo &mdash; Grid layout example

[Grid](https://www.w3schools.com/css/css_grid.asp) and [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) serve a similar function, and in most cases you could use either. I recommend starting with flexbox, as it is somewhat simpler.

### Inspector

In order to simulate smaller screen width, you can use the inspector panel ([firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [chrome](https://www.browserstack.com/guide/inspect-element-in-chrome), [edge](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/overview), [safari](https://www.browserstack.com/guide/how-to-inspect-element-on-mac)). Usually you can open the inspector with F12 key, or with "right click &mdash; inspect element". Depending on how your PC is configured, you might need to press Fn key together with F12.

Make the inspector panel vertical, and change its width to make your website view wider, or narrower:

![inspector-dock-right](Requirements/inspector-dock-right.png)

!!! warning
	Some browsers offer "responsive design mode" in the inspector, promising to simulate how your website would look on a smartphone. Last time I tried this, simply changing the width of the page provided more accurate representation of how your website would look on a smartphone, than any of these tools. I do not recommend using them.

## CSS animations

In order to get full points for CSS animations, use both [@keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp) and [transitions](https://www.w3schools.com/css/css3_transitions.asp) (separately).

## Box-sizing

Use [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) set to `border-box` for all elements:

```
* {
	box-sizing: border-box;
}
```
## Layout

Use [flexbox](https://www.w3schools.com/css/css3_flexbox.asp) or [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) for layout. Look at [Examples and Snippets](../Examples and Snippets/).

!!! warning
	Using `<table>` for layour is NOT allowed. It should only be used for actual tables.

### Responsive page

Checkpoint 3 requires your website to be responsive. This can be achieved in multiple ways, but for this project you MUST use [@media](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) rules.

The LAYOUT of your website must change SIGNIFICANTLY between different screen widths. Simply changing font size, or some colors, is NOT sufficient.

Look at "Grid layout example" in [repl](https://replit.com/@KostiantynRuden/CSS-demo).

Use [viewport meta tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#background): `<meta name="viewport" content="width=device-width">`

### Semantic elements

Use [semantic elements](../Semantic HTML elements/) when appropriate. At the very least you should have:

* `<nav>`
* `<main>`
* `<article>` or `<section>` (one is sufficient, because the distinction between the two is not always clear)