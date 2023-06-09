//.....................DATE METHODS.....................................
//.....................Assignment # 31-34 .........................

// 1. Write a program that displays current date and time in 
// your browser.
var currentDateAndTime = new Date()
alert(currentDateAndTime);

// 2. Write a program that alerts the current month in words. 
// For example December.
var months=["January", "February", "March", "April", "May", "June","July",
 "August", "September", "October", "November", "December"];
var currentMonth = new Date();
var monthNo=currentMonth.getMonth();
alert(`Current Month:${months[monthNo]}`);

// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun.
var days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date();
var dayNo=currentDay.getDay();
alert(`Today is:${days[dayNo]}`);

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
var currentDay = new Date();
 var dayNo=currentDay.getDay();
if(dayNo=="0" || dayNo=="6")
{
    alert("It’s Fun day")
}

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
var currentDate = new Date();
var date=currentDate.getDate();
 if(date<16)
 {document.write("First fifteen days of the month")}
 else
 {document.write("Last days of the month")}

 // 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”. 
var currentDate = new Date();
var hour = currentDate.getHours();
if (hour < 12)
 {alert("It's AM");}
 else 
 {alert("It's PM");}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 
var laterDate = new Date();
laterDate.setFullYear(2020);
laterDate.setMonth(11); 
laterDate.setDate(31);
console.log("Later Date: " + laterDate);

// 9. Create a date object of the starting date of this Ramadan 
//and alert the number of days past since 1st Ramadan?  
var startingDate = new Date(2023, 2, 23); 
var currentDate = new Date();
var timeInMilisecond = currentDate.getTime() - startingDate.getTime();
var daysPassed=Math.round(timeInMilisecond/(1000*60*60*24));
alert(daysPassed);

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015. 
var startingDate=new Date(2015,0,1);
var referenceDate=new Date();
var timeElapsed= Math.round((referenceDate-startingDate)/1000);
document.write(`On reference date ${referenceDate},${timeElapsed}
 seconds had passed since beginning of 2015`)

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 

var currentDate=new Date();
document.write(`Current Date:${currentDate} <br>`)
var oneHourAge=currentDate.getHours()-1;
currentDate.setHours(oneHourAge);
document.write(`1hour ago,it was ${currentDate}`);
  
// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back? 
var currentDate=new Date();
document.write(`Current Date:${currentDate} <br>`)
var hundredYearsAgo=currentDate.getFullYear()-100;
currentDate.setFullYear(hundredYearsAgo);
document.write(`100 years back,it was ${currentDate}`);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 
var currentDate=new Date();
var age=prompt("Enter your Age" )
document.write(`Your age is ${age}<br>`)
document.write(`Your birth year is ${currentDate.getFullYear()-age}`)

// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where
// Net Amount Payable (within DueDate) =Number of units *Charges per unit 
// Gross Amount Payable (after DueDate) =Net Amount +Late Payment Surcharge

var customerName =prompt("Type Customer Name")
var month =prompt("Type Current Month")
var units =+prompt("Type Number of units")
var chargesPerUnit=16;
var lateSurcharge=350;
var netAmount=units*chargesPerUnit;

document.write(`Customer Name: ${customerName}<br>`)
document.write(`Current Month  : ${month}<br>`)
document.write(`Number of units : ${units}<br>`)
document.write(`Charges per unit :16 <br>`)
document.write(`Net Amount Payable (within DueDate):${netAmount}<br>`)
document.write(`Late Payment Surcharge:350 <br>`)
document.write(`Gross Amount Payable (after Due Date):${netAmount+lateSurcharge}`)