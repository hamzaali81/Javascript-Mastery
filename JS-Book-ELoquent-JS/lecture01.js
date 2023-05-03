// Values Types and Operators

// JavaScript uses a fixed number of bits, 64 of them, to store a single number
// value. There are only so many patterns you can make with 64 bits, which means
// that the number of different numbers that can be represented is limited. With
// N decimal digits, you can represent 10N numbers. Similarly, given 64 binary
// digits, you can represent 264 different numbers, which is about 18 quintillion
// (an 18 with 18 zeros after it).

// 1. Arithmetic
// +, -, *, /, %, **
// 1. Operator precedence describes the order in which operations are performed 
// in an arithmetic expression.

// 2. Multiplication (*) and division (/) have higher precedence 
// than addition (+) and subtraction (-).
// Example
// let x = 100 + 50 * 3;
// console.log(x); // 250


// 3. When using parentheses, operations inside the parentheses are computed first:
// let x = (100 + 50) * 3;
// console.log(x); // 450

// 4. Operations with the same precedence 
// (like * and /) are computed from left to right:
// let x = 100 / 50 * 3;
// console.log(x); // 6


// 5 .The exponentiation operator (**) is a recent 
// addition to the set of JavaScript operators.
// console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36



// console.log(3 + 10 * 2); // 23
// console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
// console.log((3 + 10) * 2); // 26, because the parentheses change the order


// a = b = 5; // same as writing a = (b = 5);


// As another example, the unique exponentiation operator has right-associativity, 
// whereas other arithmetic operators have left-associativity.

// const a = 4 ** 3 ** 2; // Same as 4 ** (3 ** 2); evaluates to 262144
// const b = 4 / 3 / 2; // Same as (4 / 3) / 2; evaluates to 0.6666...



// const a = 1;
// const b = 2;
// typeof a + b; // Equivalent to (typeof a) + b; result is "number2"


// 2. Special Numbers
// 1. Nan
// console.log(0 / 0); // NaN

// 2. Infinity
// console.log(Infinity); // Infinity
// 3. -Infinity
// console.log(-Infinity); // -Infinity
// 4. -0
// console.log(-0); // -0
// 5. 0
// console.log(0); // 0
// 3. Strings
// Strings are used to represent text

// 1. String literals
// const a = "This is the first line\nAnd this is the second"
// console.log(a);

// const b = "A newline character is written like \"\\n\"."
// console.log(b)

// "con" + "cat" + "e" + "nate";
// `half of 100 is ${100 / 2}`

// 2. Unary operators
// Operators that use two values are called binary operators, 
// while those that take one are called unary operators.

// console.log(typeof 4.5); // number
// console.log(typeof "x"); // string

// 3. Boolean values
// There are two more types of values, null and undefined, that are
// used to denote the absence of a meaningful value. They are themselves
// values, but they carry no information.

console.log(3 > 2)
// → true
console.log(3 < 2)
// → false


// 4. Logical operators
console.log("Aardvark".length < "Zoroaster".length)
console.log("Aardvark".length, "Zoroaster".length)
// → true

console.log("Itchy" != "Scratchy")
// → true

console.log("Apple" == "Orange")
// → false

console.log(typeof NaN)
console.log(NaN == NaN)
// → false

// 4. Logical operators
// There are also some operations that can be applied to Boolean values them-
// selves. JavaScript supports three logical operators: and, or, and not. These
// can be used to “reason” about Booleans.
// The && operator represents logical and. It is a binary


console.log(true && false)
// → false
console.log(true && true)
// → true

// Not is written as an exclamation mark (!). It is a unary operator that flips
// the value given to it—!true produces false, and !false gives true.

console.log(true ? 1 : 2);

// 5. Empty values

// There are two special values, written null and undefined, that are used to
// denote the absence of a meaningful value. They are themselves values, but
// they carry no information.
// null and undefined


// Many operations in the language that don’t produce a meaningful value
// (you’ll see some later) yield undefined simply because they have to yield some
// value.
// The difference in meaning between undefined and null is an accident of
// JavaScript’s design, and it doesn’t matter most of the time. In cases where
// you actually have to concern yourself with these values, I recommend treating
// them as mostly interchangeable.


// 6. Automatic type conversion

// console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51

console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true


// 7. Short-circuiting of logical operators
// The logical operators && and || handle values of different types in a peculiar
// way. They will convert the value on their left side to Boolean type in order
// to decide what to do, but depending on the operator and the result of that
// conversion, they will return either the original left-hand value or the right-
// hand value.
// The || operator, for example, will return the value to its left when that can
// be converted to true and will return the value on its right otherwise. This has
// the expected effect when the values are Boolean and does something analogous
// for values of other types.

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

































































