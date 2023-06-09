// ..........................USER INPUT & CONDITIONAL STATEMENT ...........................
//...........................Assignment # 9-10  ............................

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 
 
var cityName=prompt("Enter city name");

if(cityName.toLowerCase()=="karachi") 
{
alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender= prompt("Enter gender");
if(gender.toLowerCase()=="male") 
{
alert("Good Morning Sir");
}
else if(gender.toLowerCase()=="female")
{
alert("Good Morning Ma’am");
}
// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var trafficSignal=prompt("Enter color of traffic signal light");
if(trafficSignal.toLowerCase()=="red")
{
    alert(`Must Stop`)}
else if(trafficSignal.toLowerCase()=="yellow")
{
        alert(`Ready to move`)}
else if(trafficSignal.toLowerCase()=="green")
{
     alert(`Move now`)}

// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var remainingFuel= prompt("Enter remaining fuel in litres");
if(remainingFuel<0.25) 
alert("Please refill the fuel in your car");
// 5. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs. 
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    }

// 6. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute 
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade & 
// remarks like: 
var grade;
var remarks;
var percentage;
var subject1=prompt("Type Subject Name");
var subject2=prompt("Type Subject Name");
var subject3=prompt("Type Subject Name");

var totalMark1=+prompt("Type total marks of "+ subject1);
var obtainedMarks1 =+ prompt("Type obtained marks of "+ subject1 );
var totalMark2=+prompt("Type total marks of "+ subject2);
var obtainedMarks2 =+ prompt("Type obtained marks of "+ subject2 );
var totalMark3=+prompt("Type total marks of "+ subject3);
var obtainedMarks3 =+ prompt("Type obtained marks of "+ subject3 );

var totalMarks=totalMark1+totalMark2+totalMark3;
var obtainedMarks =obtainedMarks1+ obtainedMarks2+ obtainedMarks3;
percentage=Math.round((obtainedMarks/totalMarks) *100);

if (percentage>=80)
{
    grade="A-ONE";
    remarks="Excellent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B";
    remarks="You need to improve";
}
else if(percentage<60)
{
    grade="Fail";
    remarks="Sorry";   
}
document.write("Total Marks: " +totalMarks+"<br>");
document.write("Marks Obtained: " +obtainedMarks+"<br>");
document.write("Percentage: " + percentage +"%<br>");
document.write("Grade: " + grade +"<br>");
document.write("Remarks: " + remarks);

// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”.

var secretNum=8;
var userInput=prompt("Guess the number");

if  (userInput==secretNum)
{
    alert("Bingo! Correct answer."); 
}
else if(userInput==secretNum+1)
{
    alert("Close enough to the correct answer"); 
}
else{
    alert("Try Again"); 
}
// 8. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var num =+prompt("Enter a number to check whether its divisible by 3 or not")
if( num %3 ==0)
{
    alert(`${num} is divisible by 3`)
}
else
{
    alert(`${num} is not divisible by 3`)
}
// 9. Write a program that checks whether the given input is an 
// even number or an odd number.

var number = prompt("Enter a number: ");
if(number % 2 == 0) {
    alert("The number is even.");
}

else {
    alert("The number is odd.");
}
// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var T=prompt("Enter temperature");

if  (T>40)
{
    alert("It is too hot outside."); 
}
else if(T>30)
{
    alert("The Weather today is Normal."); 
}
else if(T>20)
{
    alert("Today’s Weather is cool."); 
}
else if(T>10)
{
    alert("OMG! Today’s weather is so Cool."); 
}
// 11-Write a program to create a calculator for +,-,*, / & % 
// using if statements.Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.

var firstNum =+prompt("Enter First Number")
var secondNum =+prompt("Enter Second Number")
var operator =prompt("Enter the operator")
var result;

if (operator== "+")
{
 result= firstNum + secondNum;
}
else if(operator=="-")
{
 result= firstNum - secondNum;
}
else if (operator=="*")
{
 result= firstNum * secondNum;
}
else if (operator=="/")
{
 result= firstNum / secondNum;
}
else if (operator=="%")
{
 result= firstNum % secondNum;
}
alert(`${firstNum} ${operator} ${secondNum} = ${result}`);