---
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Clean Code

Some advice about keeping your code clean and manageable

## Long functions

When a function becomes too long, extract parts of it into separate functions.

#### Example

```js
function DrawEverything(canvas) {
    // lots of code
    // ...
    // ...
    // ...
}
```
Becomes:
```js
function DrawEverything(canvas) {
    drawBackground(canvas);
    drawEnemies(canvas);
    drawPlayer(canvas);
    drawProjectiles(canvas);
}
```

## Long classes

Same as long functions, try to break them up.

## Too many arguments

If you have functions with 6+ arguments, create a class to group the related values into a single package.

#### Example

```js
function printDocument(
    paperSize,
    marginLeft,
    marginRight,
    marginTop,
    marginBotton,
    numCopies,
    resolution,
    text,
    fontColor,
    fontSize,
    fontFamily,
    lineSpacing,
    paragraphIndentation
) {
    // do the printing
}
```
Becomes:
```js
class Margin {
    constructor (left, right, top bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}

class PrintParameters {
    constructor (paperSize, margin, numCopies, resolution) {
        this.paperSize = paperSize;
        this.margin = margin;
        this.numCopies = numCopies;
        this.resolution = resolution;
    }
}

class Font {
    constructor (color, size, family) {
        this.color = color;
        this.size = size;
        this.family = family;
    }
}

class DocumentFormat {
    constructor (font, lineSpacing, paragraphIndentation) {
        this.font = font;
        this.lineSpacing = lineSpacing;
        this.paragraphIndentation = paragraphIndentation;
    }
}

class TextDocument {
    constructor (text, format) {
        this.text = text;
        this.format = format;
    }
}

function printDocument(printParameters, textDocument) {
    // do the printing
}
```

## Too many attributes

Similar to the previous issue, but instead of having too many function arguments, you have too many attributes in a class.

When a class has too many attributes, group them into new classes.

## Data duplication

Avoid having multiple variables holding copies of the same value. Also, if certain value can be trivially computed from existing variables, it's usually better to provide a function for computing it, instead of storing it in a variable.

#### Example
```js
class Player {
	constructor(health) {
		this.health = health;
		this.isDead = false;
	}
	
	receiveDamage(amount) {
		this.health -= amount;
		if (this.health < 0) {
			this.health = 0;
		}
		
		if (this.health == 0) {
			this.isDead = true;
		}
	}
	
	heal(amount) {
		this.health += amount;
		
		if (this.health > 0) {
			this.isDead = false;
		}
	}
}
```
Becomes:
```js
class Player {
	constructor (health) {
		this.health = health;
	}
	
	receiveDamage(amount) {
		this.health -= amount;
		
		if (this.health < 0) {
			this.health = 0;
		}
	}
	
	heal(amount) {
		this.health += amount;
	}
	
	getIsDead ( ) {
		return this.health <= 0;
	}
}
```

::: info
* Second variant is shorter, because there is no need to update `this.isDead` every time health changes.
* In the second variant it is impossible for the value to be incorrect, as long as the function `isDead( )` is correct. In the first variant forgetting to update `this.isDead` (or updating it incorrectly) will introduce a bug, which can be difficult to find.
:::

## Code duplication in classes

If you have multiple classes with similar methods and/or attributes, consider extracting the common part into a base class and using inheritance.

#### Example

```js
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Player {
    constructor(name){
        this.position = new Vector2(0,0);
        this.name = name;
    }

    move(offset){
        this.position.x += offset.x;
        this.position.y += offset.y;
    }

    // Player-related methods
    // ...
    // ...
}

class Skeleton {
    constructor(){
        this.position = new Vector2(0,0);
        this.name = "Skeleton";
    }

    move(offset){
        this.position.x += offset.x;
        this.position.y += offset.y;
        console.log("rattling of bones echoes through the dungeon");
    }

    // Skeleton-related methods
    // ...
    // ...
}

class Slime {
    constructor(){
        this.position = new Vector2(0,0);
        this.name = "Slime";
    }

    move(offset){
        this.position.x += offset.x;
        this.position.y += offset.y;
    }

    // Slime-related methods
    // ...
    // ...
}
```
Becomes:
```js
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Character {
    constructor(name){
        this.position = new Vector2(0,0);
        this.name = name;
    }

    move(offset){
        this.position.x += offset.x;
        this.position.y += offset.y;
    }
}

class Player extends Character {
    constructor(name){
        super(name);
    }

    // Player-related methods
    // ...
    // ...
}

class Skeleton extends Character {
    constructor(){
        super("Skeleton");
    }

    move(offset){
        super.move(offset);
        console.log("rattling of bones echoes through the dungeon");
    }

    // Skeleton-related methods
    // ...
    // ...
}

class Slime extends Character {
    constructor(){
        super("Slime");
    }

    // Slime-related methods
    // ...
    // ...
}
```

## Code duplication in functions

If you have multiple functions with similar code, consider extracting the common part into a separate function.

#### Example

```js
function castFireball() {
    console.log("preparing to cast...");    // inconsistency
    console.log("reading the spell scroll: Fireball...");
    console.log("a massive sphere of flame flies towards the enemy!");
}

function castHeal() {
    console.log("preparing to cast a spell...");    // inconsistency
    console.log("reading the spell scroll: Heal...");
    console.log("you summon healing energies, which make you feel better");
}
```
Becomes:
```js
function readSpell(name) {
    console.log("preparing to cast a spell...");
    console.log(`reading the spell scroll: ${name}...`);
}

function castFireball() {
    readSpell("Fireball");
    console.log("a massive sphere of flame flies towards the enemy!");
}

function castHeal() {
    readSpell("Heal");
    console.log("you summon healing energies, which make you feel better");
}
```
::: info
In the first version you could modify one of the functions and forget to modify the other, introducing an inconsistency.

The second version protects you from this.
:::

## Panic early

If you have a feeling that something might go wrong in your code, implement a sanity check to receive an immediate warning. Javascript is particularly notorious for pretending like everything is fine and continuing the execution with corrupt data (undefined, etc).

MDN link: [throw statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

#### Example
```js
class Player {
    constructor (health) {
        this.health = health;
    }
    
    receiveDamage(amount) {
        this.health -= amount;
        
        if (this.health < 0) {
            this.health = 0;
        }
    }
    
    heal(amount) {
        this.health += amount;
    }
    
    getIsDead ( ) {
        if (this.health < 0) {
           throw "health should never be negative!";
           // something clearly went wrong, no reason to continue execution!
        }
        return this.health == 0;
    }
}
```

## Magic numbers

When using numeric constants (for example, $\pi$), create named constants instead of writing the values directly in your code.

#### Example

```js
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    getCircumference(){
        return this.radius * 2.0 * 3.1415;
    }

    getArea(){
        return 3.14 * (this.radius ** 2);
    }
}
```
Becomes:
```js
const PI = 3.1415;

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    getCircumference(){
        return this.radius * 2.0 * PI;
    }

    getArea(){
        return PI * (this.radius ** 2);
    }
}
```

::: info
In the first variant different precision was used for $\pi$ in different places. This can create confusion.

Creating a constant ensures the value is always the same throughout the code.
:::