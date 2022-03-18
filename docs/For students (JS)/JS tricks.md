# JS tricks

These are not necessary to use, but offer convenience and make your code more concise.

## Template strings

Conveniently insert variables into your strings.

### Example

```js
let foo = 5;
console.log(`the value of foo is: ${foo}`);
// prints "the value of foo is: 5"

// you can also do this:
console.log(`foo to the power of 3 is: ${foo ** 3}`);
human = {
    name: "Jack",
    age: 13
}
console.log(`${human.name} is ${human.age} years old`);
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

!!! note Link
    Mozilla Developer Network - [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

