//.............................FUNCTIONS.....................................
//.............................Assignment # 35-38............................
// 1. Write a function that displays current date & time in your 
// browser. 

function dateAndTime()
{
    var currentDateAndTime = new Date()
    alert(currentDateAndTime);
}
dateAndTime();

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name. 

function greet(firstname ,lastname)
{
    alert("Welcome " + firstname+" "+lastname )
}
var fname=prompt("Enter First Name ")
var lname=prompt("Enter Last Name ")
greet(fname,lname);

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

function add(a,b)
{
 var result= a + b;
 alert (`The Sum of ${a} and ${b} is ${result}`)
}
var firstValue =+prompt("Enter First Value ")
var secondValue =+prompt("Enter Second Value ")
add(firstValue,secondValue);

// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 

function calculator(num1,num2,operator)
{
    if(operator=="+")
    {
        result = num1 + num2;
    }
    else if(operator=="-")
    {
        result = num1 - num2;
    }
    else if(operator=="*")
    {
        result = num1 * num2;
    }
    else if(operator=="/")
    {
        result = num1 / num2;
    }
    else if(operator=="%")
    {
        result = num1 % num2;
    }
    return result;
}
var a =+prompt("Enter First Value")
var b =+prompt("Enter Second Value")
var operator=prompt("Choose operator(+,-,*,/,%)")
alert(`${a} ${operator} ${b}= ${calculator(a,b,operator)}`);

// 5. Write a function that squares its argument.
function square(x)
{
    var res= x*x;
    return res;
}
alert(square(prompt("Enter a number")));

// 6. Write a function that computes factorial of a number. 

function factorial(x)
{
    var res=1;
    for (let i = x; i > 0; i--)
    {    
        res=res*i;
    }
    return res;
}
alert(factorial(prompt("Enter a number")));

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
 
function counting(initial,final )
{
    for (let i = initial;i <= final; i++)
    {
       document.write(i +"<br>");
    }
}
var initial=prompt("Enter starting number")
var final=prompt("Enter ending number")
counting(initial,final);

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2  
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 

function hypotenuse(base ,perpendicular)
{
    function square(x)
    {
        var res= x*x;
        return res;
    }
    var hypSquare=square(base)+ square (perpendicular)
    var hyp= Math.pow(hypSquare,0.5)
    return hyp;
}
alert(hypotenuse(prompt("Enter value of Base" ),prompt("Enter value of Perpendicular" )))

// 9. Write a function that calculates the area of a rectangle. 
//      A = width * height 
//     Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 

function rectangleArea(width,height)
{
     var area =width*height;
     alert("The area of triangle is " + area)
}
var w=prompt("Enter width")
var h=prompt("Enter height")
rectangleArea(w,h);
rectangleArea(4,5);
 
// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same
// backward as 
// forward, e.g., madam. 
// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development' 

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o'  

function numberOfOccurences(str,letter)
{
    var count=0;
    for (let i = 0; i < str.length; i++) 
    {
        if(str[i]==letter)
        {
            count++;
        }       
    }
    alert (`The letter ${letter} occurs ${count} times`)
}
var str=prompt("Type a sentence")
var letter=prompt("Type a letter to check its occurence")
numberOfOccurences(str,letter);

// 14.Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area is NN". 
// Circumference of circle    =     2πr 
// Area of circle       =     πr2 

function calcCircumference(radius)
{
    var circumference=2*3.14*radius;
    alert(`The circumference is ${circumference}`)
}
function calcArea(radius)
{
    var area =3.14*radius*radius;
    alert(`The Area is ${area.toFixed(3)}`)
}
var r =+prompt("Enter radius")
calcCircumference(r);
calcArea(r);

