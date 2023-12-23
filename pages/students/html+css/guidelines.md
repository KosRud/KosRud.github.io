Some advice for making a clean, functional and aesthetically pleasing web page.

## Animation and hovering

Animations and `:hover` style can hint towards which elements are interactive. Don't use `:hover` on non-interactive elements to avoid confusion.

<style>
    .demo-button {
		margin-left: auto;
		margin-right: auto;
		width: fit-content;

        color: white;
        padding: 4rem;
        background-color: #55b;
        user-select: none;
        border-radius: 4rem;
        box-shadow: 0rem 5rem 0rem #336, 2rem 8rem 3rem #0008;
        border: 2rem solid #fff2;
        padding: 6rem 12rem;
		font-size: 16rem;
		cursor: pointer;

		transition: transform 0.1s, box-shadow 0.1s, border-color 0.2s, background-color 0.1s;
    }

    .demo-button:hover {
        transform: scale(1.02);
        box-shadow: 0rem 6rem 0rem #336, 3rem 10rem 7rem #0008;
        border-color: #fff3;
        background-color: #66c;
    }

    .demo-button:active{
        transform: translateY(2rem);
        box-shadow: 0rem 5rem 0rem #336, 1rem 8rem 2rem #000b;
		background-color: #55b;
    }

</style>

<div class="demo-button" onclick="alert('Thank you!')">I'm a button. Press me!</div>

## Center of the page

* Keep the main content towards the center of the page, where it is most comfortable to read. 
* Keep the left and right edges of the screen empty or reserve them for the content that will be only looked at occasionally (suggested links, tags, FAQ, menu, recent posts, etc.)

## Colors

* Don't use too many colors (2-4 is optimal).
* Pick one "primary" color which you will use the most, and use other "secondary" colors to make important elements stand out (buttons, headings, links, etc.). The accent colors are usually more saturated and vivid to attract attention.
* Use vivid colors sparingly. The "main" color should be easy on the eyes (desaturated).

<style>
    .text-color-demo {
        padding: 4rem;
        margin: 8rem;
        width: 200rem;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 8rem;
        padding-left: 16rem;
    }

    .text-color-demo-container {
        background: rgb(60,60,60);
        padding:12rem;
        display: inline-block;
        border-radius: 20rem;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top:-16rem;
    }
</style>

See color palette [tools](tools#color-palette).

## Consistency

Strive for consistency in your style. For each property (font size, color, border radius, etc.) decide on a small set of values that you will use and only add new ones when necessary.

For example: let's imagine you need a large font size for the headings. You could choose something at random like 120% and stop at that. However, a few days later you once again need a large font size for the banner. If you pick a value at random, it might end up differing from the size of headings by just a little bit. A lot of these *"close but not quite equal"* values can make a website look messy.

Using css variables gives a number of advantages:
* You have a clearly defined list of possible values in one place. No need to check with existing elements: just pick a value from the list.
* You can change all related values by editing a single line, this is great for experimenting with your design. Without variables, to change the "primary" color of your website from blue to yellow (for example) you'd have to manually edit every single style which includes that color.

```CSS
body {
    --border-radius: 5rem;
}

div.bordered {
    border-radius: var(--border-radius);
}

li.menu-item {
    border-radius: var(--border-radius);
}
```

::: tip
* Mozilla Developer Network &mdash; [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)\
* w3school &mdash; [CSS Variables &mdash; The var( ) Function](https://www.w3schools.com/css/css3_variables.asp)
:::

## Get straight to the point

People usually open a website with a purpose in mind (a shop to buy something, a wiki to find information, a messenger to chat, etc.). A full-screen image on the home page can be pretty, but it adds an unnecessary delay before the user can reach their goal, which can be annoying.

Though sometimes an image *is* the main feature of the website (such as an artist's portfolio), in which case it makes perfect sense to put it front and center.

## Menu

A [sticky](https://www.w3schools.com/howto/howto_css_sticky_element.asp) menu permanently covers a portion of the screen, reducing the available window through which the user can view content. You wouldn't want to cover a significant portion of your monitor if you can help it, so if you opt for a sticky menu, make it thin.

A non-sticky menu does not have this issue and thus can be made larger, but keep in mind that whatever the user sees upon initial page load without scrolling will form the first impression, so utilizing that space effectively is important.

## Tables

Do not use tables for layout. Element `<table>` should only be used for tabular data, otherwise it will confuse applications trying to parse the page's content and understand its structure, such as screen readers. For the page layout use `display: grid` or `display: flex` in CSS.

## Text

Text must be easy to read (size, color, contrast, font).

<style>

	.text-shadow-demo {
		color: #000;
		width: fit-content;
		display: grid;
		grid-template-columns: 1fr;
		margin-left: auto;
		margin-right: auto;
	}

    .text-shadow-demo > div {
        margin-bottom: 16rem;
        font-size: 30rem;
		font-weight: bold;
        padding: 0rem 12rem;
    }
</style>

#### Shadows

<div class="text-shadow-demo">
	<div style="text-shadow: 1rem 2rem 5rem #cc5;">This is OK</div>
	<div style="background: #666; color: #8f8; text-shadow: 2rem 3rem 0rem #000e;">This is also OK</div>
	<div style="text-shadow: 3rem 3rem 4rem rgba(0,0,0,1)">This is bad</div>
	<div style="text-shadow: 4rem 3rem 0rem rgba(0,0,0,0.8)">This is also bad</div>
</div>

#### Width

Aim to have between [60 and 90](https://visualdesignfordh.files.wordpress.com/2014/06/type-readability.pdf) characters per line of text for comfortable reading.