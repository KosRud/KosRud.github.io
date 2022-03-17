# Web page design

Some advice for making a clean, functional and aesthetically pleasing web-page.


### Animation and hovering

Animations and `:hover` style can hint which elements are interactive. Don't use `:hover` on non-interactive elements to avoid confusion.

<style>
    .demo-button {
        color: white;
        padding: 4px;
        background: rgb(13,13,57);
        display: inline-block;
        border-radius: 8px;
        box-shadow: 1.5px 1.5px 2px rgba(0,0,0,0.6);
    }

    .demo-button > div {
        padding : 4px;
        box-shadow: 0px 0px 4px rgba(255,255,255,0.5);
        background: rgba(255,255,255,0.2);
    }

    .demo-button:hover {
        transition-duration: 0.1s;
        transition-timing-function: linear;
        transform: translateY(-1px);
        box-shadow: 1.5px 2.5px 2px rgba(0,0,0,0.6);
    }

    .demo-button:hover > div{
        transition-duration: 0.5s;
        transition-timing-function: ease;
        background: rgba(255,255,255,0.3);
        box-shadow: 0px 0px 5px rgba(255,255,255,0.75);
    }

    .demo-button:active{
        transition-duration: 0.1s;
        transition-timing-function: cubic-bezier(.95,.05,.8,.04);
        box-shadow: 0px 0px 0px black;
        transform: translateY(1px);
        
    }

    .demo-button:active>div{
        transition-duration: 0.1s;
        box-shadow: 0px 0px 4px rgba(255,255,255,0.5);
        background: rgba(255,255,255,0.2);
    }
</style>

<p>
<div class="demo-button" onclick="alert('thanks!')"><div>I'm a button. Press me!</div></div>
</p>

### Center of the page

Keep the main content towards the center of the page, where it is most comfortable to read.

Keep the left and right edges of the screen empty, or reserve them for the content, which the user looks at only occasionally (suggested links, tags, FAQ, menu, recent posts, etc.)

### Colors

Don't use too many colors (2-4 is optimal).

Pick one "main" color which you will use the most, and use the other "secondary" colors for accents (buttons, headings, etc.). The accent colors usually should be more saturated and vivid to attract attention.

Use vivid colors sparingly. The "main" color should be easy on the eyes (desaturated).

<style>
    .text-color-demo {
        padding: 4px;
        margin: 8px;
        width: 200px;
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        padding-left: 16px;
    }

    .text-color-demo-container {
        background: rgb(60,60,60);
        padding:12px;
        display: inline-block;
        border-radius: 20px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top:-16px;
    }
</style>

!!! note "Color scheme tools"
    * [Paletton](https://paletton.com)
    * [Material design color palette generator](https://www.materialpalette.com)
    * [ColourCode](https://www.toptal.com/designers/colourcode)

### Consistency

Have consistency in your style - for example, have a list of preset colors instead of selecting a "roughly similar" color by hand every time. Same with border styles, rounded corners, etc.

Use CSS variables:

```CSS
body {
    --border-radius: 5px;
}

div.bordered {
    border-radius: var(--border-radius);
}

li.menu-item {
    border-radius: var(--border-radius);
}
```

### Get straight to the point

When the user opens your website, they should immediately see the content they came for - not the full page logo (no matter how much you like it).

### Menu

If the menu is on the top and [sticky](https://www.w3schools.com/howto/howto_css_sticky_element.asp), it should be very thin, to maximize the amount of useful content that fits on the screen.

With a non-sticky menu you can afford a bit more vertical space.

### Tables

Do not use tables for layout! Element `<table>` and style `display: table` should only be used for tabular data.

For the page layout use `display: grid` or `display: flex` in CSS.

### Text

Text must be easy to read (size, color, contrast, font).

<style>
    .text-shadow-demo > div {
        margin-bottom: 16px;
        font-size: 200%
    }
</style>

!!! warning "Be careful with shadows"
    <div class="text-shadow-demo">
        <div style="text-shadow: 3px 3px 3px rgba(0,0,0,0.8)">This is bad</div>
        <div style="text-shadow: 3px 3px 0px rgba(0,0,0,0.8)">This is also bad</div>
        <div style="text-shadow: 1px 1px 0px rgba(0,0,0,0.8);">This is OK</div>
        <div style="font-size: 200%; margin-bottom: 8px"">This is no shadow</div>
    </div>

#### Width

Text is easier to read, when it doesn't span the entire width of the screen. If you have a lot of text, consider multiple columns.    

#### Reduced contrast

Having *almost* black text on *almost* white background (or vice versa) can be easier on the eyes, than maximum contrast. But don't go overboard, to the point of *gray background with slightly darker gray text*.

<p>
    <div class="text-color-demo-container">
        <div class="text-color-demo" style="background: white;">
            <div style="color: black">Maximum contrast</div>
        </div>
        <div class="text-color-demo" style="background: rgb(246,246,246);">
            <div style="color: rgb(14,14,14)">Reduced contrast</div>
        </div>
        <div class="text-color-demo" style="background: rgb(240,240,240);">
            <div style="color: rgb(60,60,60)">Not enough contrast</div>
        </div>
    </div>
</p>