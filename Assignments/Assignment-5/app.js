// ..........................MATH EXPRESSIONS...........................
// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser. 

var num1 =+prompt("Enter a value");
var num2 =+prompt("Enter a value");
var result=num1 + num2;
document.write("Sum of "+num1+ " and " +num2+ " is "+result+"<br>");

// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. 

var num1 =+prompt("Enter a value");
var num2 =+prompt("Enter a value");
var result=num1 - num2;
document.write("Subtraction of "+num1+ " and " +num2+ " is "+result+"<br>");

var num1 =+prompt("Enter a value");
var num2 =+prompt("Enter a value");
var result=num1 * num2;
document.write("Multiplication of "+num1+ " and " +num2+ " is "+result+"<br>");

var num1 =+prompt("Enter a value");
var num2 =+prompt("Enter a value");
var result=num1 / num2;
document.write("Division of "+num1+ " and " +num2+ " is "+result+"<br>");

var num1 =+prompt("Enter a value");
var num2 =+prompt("Enter a value");
var result=num1 % num2;
document.write("Modulus of "+num1+ " and " +num2+ " is "+result+"<br>");

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  
// l. Output : “The remainder is : 0”.

var x;
document.write("Value after declaration is : "+x +"<br>")
x=7;
document.write("Initial value: "+ x +"<br>")
x++;
document.write("Value after increment is: " + x +"<br>")
x+=7;
document.write("Value after addition is: " + x +"<br>")
x--;
document.write("Value after decrement is: " + x +"<br>")
var res=x%3;
document.write("The remainder is: " +res +"<br>")

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:
var ticketPrice = 600;
var numberOfTickets=5;
var res= ticketPrice * numberOfTickets;
document.write("Total cost to buy "+ numberOfTickets+" tickets to a movie is "+ res+"PKR"+"<br>")

// 5. Write a script to display multiplication table of any 
// number in your browser.
var x= prompt("Enter a number to generate a Table" );

    for (let j = 1; j <=10; j++) {
        res=x*j;
         document.write(x+"x" +j+"="+res+"<br>");
        
    }


    