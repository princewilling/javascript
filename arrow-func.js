// Arrow functions, the basics

// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

let func_ = (arg1, arg2, ..., argN) => expression;

// In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};

// Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

//     If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

//     For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

// If there are no arguments, parentheses are empty, but they must be present:

    let sayHi = () => alert("Hello!");

    sayHi();

// Arrow functions can be used in the same way as Function Expressions.

// For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

// Multiline arrow functions

// Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can 
// enclose them in curly braces. The major difference is that curly braces require a return within them to return 
// a value (just like a regular function does).

// Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3