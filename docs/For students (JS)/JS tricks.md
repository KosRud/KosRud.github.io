# JS tricks

!!! note
    The same result could be achieved without using these constructs, albeit the code would be longer and messier.

## For loops

### For of

Iterates over values.

```js
let arr = [10, 20, 30];
    
for (const value of arr) {
   console.log(value);
}
```

### For in

Iterates over indices.

```js
let arr = [10, 20, 30];

for (const i in arr) {
  console.log(arr[i]);
}
```

```js
let dict = {
    red: "rgb(255,0,0)",
    green: "rgb(0,255,0)",
    blue: "rgb(0,0,255)"
}

for (const i in dict) {
    console.log(dict[i]);
}
```

### For each

Runs the given function on every value.

```js
let arr = [10, 20, 30];

arr.forEach(
	(val) => {
  	    console.log(val);
	}
);
```

!!! note "Links"
    * Mozilla Developer Network - [for..of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
    * Mozilla Developer Network - [for..in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
    * Mozilla Developer Network - [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


## Template strings

Conveniently insert variables into your strings.

### Example

```js
let foo = 5;

console.log(`the value of foo is: ${foo}`);
// "the value of foo is: 5"
```

You can also do this:

```js
let foo = 5;

console.log(`foo to the power of 3 is: ${foo ** 3}`);
// foo to the power of 3 is: 125
```

```js
human = {
    name: "Jack",
    age: 13
}

console.log(`${human.name} is ${human.age} years old`);
// Jack is 13 years old
```

!!! note "Links"
    Mozilla Developer Network - [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## Destructuring assignment

Destructuring assignment syntax allows unpacking values from arrays, and properties from objects.

This has several convenient applications, such as swapping variables without creating a temporary variable, or creating functions with named arguments.

### Examples

#### Swap variables

```js
let a = 1,
    b = 2;

[a,b] = [b, a];

// a = 2
// b = 1
```

#### Named function arguments

With named function arguments you don't have to remember the order of arguments, when calling a function.

```js
function sayTimes(
    {
        phrase,
        times
    }
){
    for(let i = 0; i < times; i++){
        console.log(phrase);
    }
}

sayTimes(
    {
        times: 5,
        phrase: "Repetition is the mother of all learning"
    }
);
```

!!! note "Links"
    Mozilla Developer Network - [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Optional chaining

Normally, if you try to call a method, or read an attribute, which does not exist, you'd raise an error.

With optional chaining you can call a method, or receive an attribute (if it exists), and move on without raising an error, if it doesn't.

This is useful, when iterating over an array, where some objects might be `null`, or lack the relevant method/attribute.

### Example

```js
class Pet {
    constructor(name){
        this.name = name;
    }

    call(){
        console.log(`Come here, ${this.name}!`);
    }
}

let petOwners = [
    {
        name: "Steve",
        cat: new Pet("couch")
    },
    {
        name: "Glen",
        dog: new Pet("Woofer")
    },
    null
]

for (let petOwner of petOwners) {
    petOwner?.dog?.call();
    // if petOwner == null, do nothing
    // if petOwner doesn't have a dog, do nothing
}
```

!!! note "Links"
    Mozilla Developer Network - [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Console.table

Useful tool for debugging - display objects and their properties in console, formatted as a table.

### Example

```js
let arr = [
	{
    	name: "Ivy",
      	age: 29
	},
   {
     	name: "Dilan",
     	age: 42,
     	cat: {
        	name: "Whiskers",
          	age: 3
        }
   }
];

console.table(arr);
```

|(index)|name|age|cat|
|---|---|---|---|
|0|Ivy|29| |
|1|Dilan|42|Object { name: "Whiskers", age: 3 }|

!!! note "Links"
    Mozilla Developer Network - [console.table()](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)


## Spread syntax (...)

### Array unpacking

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(
    sum(...numbers)
);
// 6
```

### Merging arrays

```js
let arr = [0, 1, 2];
let newNumber = 12;
arr = [...arr, newNumber];
```

### Assigning variable number of elements


Using [Destructuring assignment](#destructuring-assignment)

```js
const [a, ...b] = [1, 2, 3];
// a = 1
// b = [2, 3]
```

```js
const [a, ...b] = [1, 2, 3, 4, 5];
// a = 1
// b = [2, 3, 4, 5]
```

### Shallow copy

```js
let obj = {
    attr_1: "a",
    attr_2: "b",
};

let copy = {
    ...obj,
    newAttr :"c"
};

console.log(obj);
/*
    attr_1: "a",
    attr_2: "b"
*/
console.log(copy);
/*
    attr_1:  "a",
    attr_2:  "b",
    newAttr: "c"
*/

```

!!! warning
    Shallow copy sets attributes of the target object identical to the source object.

    This means, that if the source object had a reference (non-[primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) attribute, the target object will be referencing the same thing!

    There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

    <img src="../images.JS tricks.md/shallow copy.png">

### Remove duplicates

```js
let arr = [
  1,1,
  2,2,
  3,3,
  4,4,4,4,4,
  5,5,5,5,5
];

arr = [...new Set(arr)];

console.log(arr);
// [1,2,3,4,5]
```

!!! note "Links"
    Mozilla Developer Network - [Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
