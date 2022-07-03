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
