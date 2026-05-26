// JavaScript Code Challenge Questions 

// Section 1: console.log & Comments 
// 1. Write a line of JavaScript that prints “Hello JavaScript World” to the console. 
console.log("Hello JavaScript World");

// 2. Write a single-line comment and a multi-line comment explaining your code.
// 3. Write code that logs your name, age, and country in one line. 
let name = "Ansam";
let age = 21;
let country = "Palestine";
console.log(name, age, country);

/*4. What will be printed by this code? 
  5. console.log("5" + 5); */ 
// The output will be "55" because the + operator concatenates the string "5" with the number 5, and the result is a string "55".

/*6. Predict and test the output: 
  7. console.log(10 + 20 + "30"); */
// The output will be "3030" because the + operator is evaluated from left to right. First, 10 + 20 is evaluated to 30, and then "30" is concatenated with the result, and the result is the string "3030".

//*********************************************************************

// Section 2: var, let, const 
// 6. Declare a variable x using var and assign it a value of 5. Then redeclare it with a new value of 10 and log the result. 
var x = 5;
var x = 10;
console.log(x); // Output: 10

// 7. Try the same operation using let instead of var. What happens?
let y = 5;
let y = 10; 
console.log(y); 
// This will throw a SyntaxError because let does not allow redeclaration of the same variable within the same scope.

// 8. Create a constant PI with the value 3.14. Try changing its value and see the error. 
const PI = 3.14;
PI = 4.13;
// This will throw a TypeError because constants cannot be reassigned after they have been declared.

// 9. Write a code snippet showing the difference between global scope and block scope using var and let.
if (true) {
    var globalVar = "I am a global variable";
    let blockVar = "I am a block variable";
}
console.log(globalVar); // Output: "I am a global variable"
console.log(blockVar); // This will throw a ReferenceError because blockVar is not defined outside the block scope.


/* 10. 
Which of these will throw an error? 
const city = "Paris"; 
city = "London"; */
// The line "city = "London";" will throw a TypeError because city is declared as a constant and cannot be reassigned to a new value.


//************************************************* */

// Section 3: Data Types 
//11. Declare five variables of types: number, string, boolean, undefined, and null.
let num = 21;
let str = "Hello";
let bool = true;
let undefinedVar;
let nul = null;

//12. Write a console.log() that prints the type of each variable using typeof. 
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof undefinedVar);
console.log(typeof nul);

//13. Predict and check the output: console.log(typeof null); 
console.log(typeof null);    // The output will be "object". 

//14. Create an array called colors with three string values and print the second color. 
let colors = ["blue", "white", "yellow"];
console.log(colors[1]);

//15. Create an object person with keys: name, age, and job. Log both the object and one of its properties.
let person = {
    name: "Ansam",
    age: 21,
    job: "Engineer"
}
console.log(person);
console.log(person.name);

//*********************************

// Section 4: Arithmetic Operators 
//16. Write code that calculates and logs the result of (15 + 3) * 2 - 8 / 4. 
let result = (15 + 3) * 2 - 8 / 4;
console.log(result);

//17. Use % (modulus) to check if a number is even or odd. 
let number = 10;
if (number % 2 === 0) {
    console.log(number + " is even.");
}
else {
    console.log(number + " is odd.");
}

//18. Write a short program that takes two numbers a and b and prints their sum, difference, and product. 
let a = 5, b = 3;
console.log("Sum: " + (a + b));
console.log("Difference: " + (a - b));
console.log("Product: " + (a * b));

//19. Predict the output: console.log(5 + 10 * 2);
console.log(5 + 10 * 2); // The output will be 25 because the multiplication operator has a higher precedence than the addition operator,
// so 10 * 2 is evaluated first to get 20, and then 5 is added to it to get the final result of 25. 

//20. Increment a variable by 1 in three different ways. 
let num1 = 5;
num1 = num1 + 1; 
num1 += 1;
num1++;

//******************************* */

// Section 5: Assignment Operators
//21. Write code that uses +=, -=, *=, /=, and %= on a variable num = 10. 
let num2 = 10;
num2 += 5;
num2 -= 3;
num2 *= 2;
num2 /= 4;
num2 %= 3;
console.log(num2);


/*22. What is the final value of x? 
let x = 5; 
x += 10; 
x -= 3; 
x *= 2; 
console.log(x); */
let x = 5; 
x += 10; 
x -= 3; 
x *= 2; 
console.log(x); // The final value of x will be 24 because the operations are evaluated in order:
// 1. x += 10;  x becomes 15
// 2. x -= 3;   x becomes 12
// 3. x *= 2;   x becomes 24

//23. Show how to concatenate two strings using the += operator. 
let str1 = "Hello, ";
str1 += "world!";
console.log(str1);

//24. Use the **= operator to square a number. 
let num3 = 4;
num3 **= 2;
console.log(num3); // The output will be 16.



//***************************** */

// Section 6: Comparison Operators
//25. What’s the difference between == and ===? Show it using an example. 
// The == operator checks for equality of values, while the === operator checks for both value and type equality.
console.log(5 == "5"); // true, because the values are equal after type coercion
console.log(5 === "5"); // false, because the types are different (number vs string)

/*26. Predict the output: 
console.log(5 == "5"); 
console.log(5 === "5"); */
console.log(5 == "5"); // true, because the values are equal after type coercion
console.log(5 === "5"); // false, because the types are different (number vs string)


//27. Write a condition that checks if a number is greater than 10 and less than 50.
let num4 = 21;
if (num4 > 10 && num4 < 50) {
    console.log(num4 + " is greater than 10 and less than 50.");
}

/*28. What will be the result of: 
console.log(10 != "10"); 
console.log(10 !== "10"); */
console.log(10 != "10"); // false, because the values are equal after type coercion
console.log(10 !== "10"); // true, because the types are different (number vs string) and !== checks for both value and type inequality



//************************** */

// Section 7: Logical & String Operators 
//29. Use logical operators to check if a variable age is between 18 and 60 inclusive.
let age = 21;
if (age >= 18 && age <= 60) {
  console.log(age + " is between 18 and 60 inclusive.");
}

//30. Combine two strings "JavaScript" and "is fun" using both + and template literals `${}`. 
let word1 = "JavaScript";
let word2 = " is fun";

// Using + operator
let combined1 = word1 + word2;
console.log(combined1);

// Using template literals
let combined2 = `${word1}${word2}`;
console.log(combined2);


//                                                                            Thanks☺️!
