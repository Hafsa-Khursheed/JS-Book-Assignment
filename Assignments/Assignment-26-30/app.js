//..........................MATH METHODS.........................
//..........................Assignment # 26-30 ..................

// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

var number=3.45214;
document.write(`Number: ${number} <br>`);
document.write(`Round off Value: ${Math.round(number)} <br>`);
document.write(`Floor Value: ${Math.floor(number)} <br>`);
document.write(`Ceil Value: ${Math.ceil(number)} `);

// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

var number=prompt("Type a negative floating point number i.e(-7.91823) ");
document.write(`Number: ${number} <br>`);
document.write(`Round off Value: ${Math.round(number)} <br>`);
document.write(`Floor Value: ${Math.floor(number)} <br>`);
document.write(`Ceil Value: ${Math.ceil(number)} `);

// 3. Write a program that displays the absolute value of a 
// number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
 
var number =prompt(" Enter a number for absolute value")
document.write(`The Absolute value of ${number} is ${Math.abs(number)}`)

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

var userInput=+prompt("Enter a number between 1 and 10")   
var randomNumber =8;
if (userInput==randomNumber)
{
   alert("Congratulations You guessed the secret number ")
}
else 
{
   alert("try again")
}