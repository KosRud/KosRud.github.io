# Naming Things

Following consistent guidelines when creating names for your functions, variables, and classes will make your code much easier to maintain. Different programming languages and different projects can have different conventions, but the most important thing is consistency. When working with libraries and existing projects, it is usually best to adopt the established conventions and keep the codebase uniform. Some general guidelines are provided below.

## Variable names

### Single letter names

Names should be sufficiently informative, describing the purpose of the variable. Avoid single-letter names such as `let x = 5`. When you have many such variables, it is very hard to keep track of their meaning.

An exception can be made when the variable is only visible within a tiny fragment of code and its purpose is obvious:

```js
function sum(a,b){
	return a+b;
}
```

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

When possible, prefer `for in`, `for of`, `Array.map()`, `Array.filter()`, `Array.reduce()`, etc. instead of manually handling array indices. This eliminates a common source of errors and reduces the number of things you need to constantly double-check when writing the code.

## Functions and variables

A variable *is* something, while a function *does* something. Use nouns for variable names and verbs for function names:

```js
let health = 20;

function getIsDead() {
	return health >= 0;
}
```
