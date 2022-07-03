//bindings are let = statements//
// conditional execution //

let theNumber = Number(prompt("pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of" +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

//The if keyword executes or skips a statement depending//
//on the value of a Boolean expression, followed by the//
//statement to execute://

//For more than two paths, you can chain multiple if/else pairs//

let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num <100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//0-9 returns Small, 10-99 returns Medium, 100+ returns Large//

//Control flow: loop example//

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//This loop will log all even numbers between 0 - 12 in the console//
//Statements starting with the keyword while creates a loop, followed//
//by an expression in parentheses.//

//Example of program that calculates 2 to the 10th power://
//Loop using multiple bindings//

let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//Yields 1024 in browser (2 to the 10th power)//

//A do loop is similar to a while loop, it only differs on one
//point: a do loop always executes its body at least once, and
//it starts testing whether it should stop only after that first execution.

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

//This program will force you to enter a name (something that is not
//an empty string) by repeatedly asking for a name.

//Line breaks and spacing and indentation are not required, they are
//based on preference and usualy used to make code easier to read, though
//you can write an entire program on one line if desired.
//See block of code below for example:

if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}

// Loops usually follow pattern: 1st a "counter binding," 2nd a "while loop"//
//followed by test expression to see if counter has reached end value.
//Because this is so common, JS and similar languages have a slightly shorter//
//and more comprehensive form, the "for loop"//

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

//This is the same program as earlier, the only change is that all statements//
//that are related to the "state" of the loop are grouped together after for.//
//Parenthese after a for keyword must contain two semicolons. The part before//
//the 1st semicolon initilizaes the loop, usually by defining a binding.//

//Here's another example, how to calculate 2 to the 10th power://

result = 1; //I removed "let" from before result because it was declared earlier in the code--you would need to include let for this to work on its own.//
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);

//Yields 1024//
