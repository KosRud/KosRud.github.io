# Naming Things

Following consistent guidelines when creating names for your functions, variables, and classes will make your code much easier to maintain. Different programming languages and different projects can have different conventions, but the most important thing is consistency. When working with libraries and existing projects, it is usually best to adopt the established conventions and keep the codebase uniform. Some general guidelines are provided below.

## Variable mames

### Single-letter Names

Names should be sufficiently informative, describing the purpose of the variable. Avoid single-letter names such as `let x = 5`. When you have many such variables, it is very hard to keep track of their meaning.

### Visually similar letters

Variable names must be sufficiently different visually, as to not create an opportunity for accidentally confusing them. Keep in mind that even if the font in your IDE makes `i` and `j` sufficiently distinct, other developers might be using a different font.

```js
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let sumMatrix = 0;

/*
	if the code inside the loop gets longer and more complex,
	it is very easy to confuse the two indices

	using "k" instead of "j" would prevent this
*/

for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++){
        sumMatrix += matrix[i][j];
    }
}
```

Counter variables (`i`, `j` in the example above) should be avoided (when possible) in favor of "for of", "for in" loops, and functions like `Array.filter()`, `Array.map()`, `Array.reduce()`, `Array.forEach()`:

```js
const matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];

const sumMatrix = matrix.map(
	// row => sum of the row
	row => row.reduce(
		(a,b) => a + b;
	)
).reduce(
	(a,b) => a + b
)

for (row of matrix) {
	for (element of row) {
		console.log(element);
	}
}
```

## Function names

Function name should be a verb describing what the function does:

```
let health = 20;

function getIsDead() {
	return health >= 0;
}
```

In this example the verb "get" hints that `getIsDead()` is a function, because it **does** something.