//...................IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS.....................
//.........................Assignment # 12-13 ............................

// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
var input =prompt("type a letter or a number")

if(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90)
 {
    alert(`${input} is UpperCase letter`)
 }
else if(input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122)
 {
    alert(`${input} is LowerCase letter`)
 }
 else if(input.charCodeAt(0) >= 48 && input.charCodeAt(0) <= 57)
 {
    alert(`${input} is Number`)
 }

// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal. 

var num1 =prompt("Enter first value ");
var num2 =prompt("Enter second value ");

if (num1>num2)
{
    alert(`${num1} is greater number`);
}
else if (num1==num2)
{
    alert(`Both numbers are equal`);
}
else{
    alert(`${num2} is greater number`);
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

var num =prompt("Enter a number ");


if (num>0)
{
    alert(`${num} is a positive number`);
}
else if (num< 0)
{
    alert(`${num} is a negative number`);
}

// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise 
var input=prompt("Enter any letter to check if its vowel or not")
var vowels=["a","e","i","o","u"];

 if(input.toLowerCase()=="a"||input.toLowerCase()=="e"||input.toLowerCase()=="i"||input.toLowerCase()=="o"||input.toLowerCase()=="u")
    {
        alert (`${input} is vowel letter`)
    }
else{
    alert (`${input} is not a vowel letter`)
    
   }


// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

var greeting; 
var hour = 13; 
if (hour < 18)
{ 
 greeting = "Good day"; 
}
else 
{
 greeting = "Good evening"; 
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements 

var time =prompt("Enter current time in 24 hour format(i.e 1400=2pm)")
 if (time>=0000 && time<1200)
    {
        alert(`Good Morning`);
    }
    else if (time>=1200 && time<1700)
    {
        alert(`Good Afternoon`);
    }
    else if (time>=1700 && time<2100)
    {
        alert(`Good Evening`);
    }
    else if (time>=2100 && time<=2359)
    {
        alert(`Good Night`);
    }
  