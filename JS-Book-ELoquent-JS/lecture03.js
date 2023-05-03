// Function
// A function definition is a regular binding where the value of the binding is
// a function.

// Example: (Exponential)
// const power = function(base, exponent) {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//     result *= base;
//     }
//     return result;
//     };
// console.log(power(2, 3));

// Bindings declared with let and const are in fact local to the block that they
// are declared in, so if you create one of those inside of a loop, the code before and
// after the loop cannot “see” it
let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
// → 60
}
// y is not visible here
console.log(x + z);
// → 40


// Function As Values

// let launchMissiles = function() {
//     missileSystem.launch("now");
//     };
//     if (safeMode) {
//     launchMissiles = function() {/* do nothing */};
//     }

// Function Decleration

// function future() {
//     return "You'll never have flying cars";
//     }

// Arrow Function
// const power = (base, exponent) => {
//     let result = 1;
//     for (let count = 0; count < exponent; count++) {
//     result *= base;
//     }
//     return result;
//     };

// Optional Arguments

// function square(x) { return x * x; }
// console.log(square(4, true, "hedgehog"));
// → 16

// Closure
// The ability to treat functions as values, combined with the fact that local
// bindings are re-created every time a function is called, brings up an interesting
// question. What happens to local bindings when the function call that created
// them is no longer active?
// The following code shows an example of this. It defines a function, wrapValue,
// that creates a local binding. It then returns a function that accesses and returns
// this local binding.
function wrapValue(n) {
let local = n;
return () => local;
}



// Recursion
// It is perfectly okay for a function to call itself, as long as it doesn’t do it so
// often that it overflows the stack. A function that calls itself is called recursive.
// Recursion allows some functions to be written in a different style. Take, for
// example, this alternative implementation of power:
function power(base, exponent) {
if (exponent == 0) {
return 1;
}
else {
return base * power(base, exponent - 1);
}
}

console.log(power(2, 3));
// Recursion is not always just an ineﬀicient alternative to looping. Some prob-
// lems really are easier to solve with recursion than with loops. Most often these
// are problems that require exploring or processing several “branches”, each of
// which might branch out again into even more branches.
// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite set of numbers can be produced. How
// would you write a function that, given a number, tries to find a sequence of
// such additions and multiplications that produces that number?
// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.
// Here is a recursive solution:
// function findSolution(target) {
// function find(current, history) {
// if (current == target) {
// return history;
// } else if (current > target) {
// return null;
// } else {
// return find(current + 5, `(${history} + 5)`) ||
// find(current * 3, `(${history} * 3)`);
// }
// }
// return find(1, "1");
// }
// console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)



// Growing Functions
// It is tempting to start writing code as soon as you’ve come up with an idea.
// Even if you’re not sure whether it’s going to work. Doing this often leads to
// sloppy programs. It’s better to think a bit longer and make a plan. Design your
// programs before you start coding.
// The process of finding a good program design is called problem solving.
// You won’t immediately be able to solve a complicated problem. So don’t
// expect to be able to write anything brilliant immediately after reading this
// book—or even after you’ve ﬁnished the book. That is normal. We are not born
// knowing this stuff. We learn through practice and repetition.
// The example program in this chapter is about controlling the ﬂow of pro-
// gram execution. It is not a particularly useful program, but it is short and
// relatively easy to understand. It will help you practice the kind of thinking that
// is required to solve real problems and build useful programs.
// The program will output all numbers from 0 to 7. But it will do so in a rather
// dumb way, by calling console.log eight times with diﬀerent arguments. A
// function that calls itself is called recursive. Recursion allows some functions to
// be written in a diﬀerent style. Take, for example, this alternative implementation
// of power:

// This is rather close to the way mathematicians define exponentiation and

// Function and Side Effects
// Functions can be roughly divided into those that are called for their side effects
// and those that are called for their return value. (Though it is definitely also
// possible to both have side effects and return a value.)
// The first helper function in the farm example, printZeroPaddedWithLabel,
// is called for its side effect: it prints a line. The second version, zeroPad, is
// called for its return value. It is no coincidence that the second is useful in more
// situations than the first. Functions that create values are easier to combine in
// new ways than functions that directly perform side effects.
// A pure function is a specific kind of value-producing function that not only
// has no side effects but also doesn’t rely on side effects from other code—for
// example, it doesn’t read global bindings whose value might change. A pure
// function has the pleasant property that, when called with the same arguments,
// it always produces the same value (and doesn’t do anything else). A call to
// such a function can be substituted by its return value without changing the
// meaning of the code. When you are not sure that a pure function is working
// correctly, you can test it by simply calling it and know that if it works in that
// context, it will work in any context. Nonpure functions tend to require more
// scaffolding to test.
// Still, there’s no need to feel bad when writing functions that are not pure or
// to wage a holy war to purge them from your code. Side effects are often useful.
// There’d be no way to write a pure version of console.log, for example, and
// console.log is good to have. Some operations are also easier to express in an
// eﬀicient way when we use side effects, so computing speed can be a reason to
// avoid purity.

// Exercise 1: Minimum


