//............VARIABLES FOR STRINGS...............
// 1. Declare a variable called username.

 var username;

//  2. Declare a variable called myName & assign to it a string 
// that represents your Full Name.

var myName="Hafsa Khursheed" ;

// 3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box.

var message="Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes. 

var sName="Jhone Doe";
var sAge="15 years old";
var course="certified Mobile Application Development";

alert(sName);
alert(sAge);
alert(course);

// 5. Write a script to display the following alert using one JS 
// variable: 

var item="PIZZA";
var limit=item.length;
 for (let i =0; i<item.length; i++)
 {
    for (let j = 0; j < limit; j++)
    {
     document.write(item[j]);
    }
    limit--;
  document.write("<br>");
 } 
 

//  6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)

var email ="abc@gmail.com"
alert("my email address is " + email)

// 7. Declare a variable called book & give it the value “A 
// smarter way to learn JavaScript”. Display the following 
// message in an alert box: 

var book=" A smarter way to learn JavaScript";
alert("I am trying to learn from the Book" +"  " + book)

// 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through Javascript"); 

// 9. Store following string in a variable and show in alert and 
// browser through JS 
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);