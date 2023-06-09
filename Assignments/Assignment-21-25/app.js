//................STRING METHODS.................
//................Assignment # 21-25 ............

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

var firstName =prompt("Type your First Name")
var LastName =prompt("Type your Last Name")
var fullName = firstName +" "+LastName;
alert(`Welcome ${fullName}!`)

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
 
var modelName = prompt("type the name of your Favourite mobile model" );
document.write(`My favourite phone is : ${modelName} <br>`);
document.write(`Length of string : ${modelName.length}`);
// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .
 
var input="Pakistani";

for (let i = 0; i < input.length; i++)
{
   if(input[i]=="n")
   {
    document.write(`String: Pakistani <br>`)
   document.write(`Index of "n": ${i}`)
   }
   
}
// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

var text = "Hello World";
var result = text.lastIndexOf("l");
document.write(`String: Hello World <br>`)
document.write(`Last index of "l": ${result}`)

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 

var input="Pakistani";

for (let i = 0; i < input.length; i++)
{
   if(i==3)
   {
    document.write(`String: Pakistani <br>`)
   document.write(`Character at index 3: ${input[i]}`)
   } 
}

//6. Repeat Q1 using string concat() method. 

var firstName =prompt("Type your First Name")
var LastName =prompt("Type your Last Name")
var fullName = firstName.concat(LastName);

alert(`Welcome ${fullName}!`)

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. 
var city="Hyderabad";
var afterReplacement=city.replace("Hyder","Islam")
document.write(`City: ${city} <br>`)
document.write(`After replacement: ${afterReplacement}`)


// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”; 

var message = "Ali and Sami are best friends. They play cricket and football together.";
var afterReplacement=message.replace(/and/gi,"&");
document.write(message +"<br>");
document.write(afterReplacement);


// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser. 
 
var valueBefore="472";
var valueAfter=parseInt(valueBefore);
var typeBefore=typeof valueBefore;
var typeAfter=typeof valueAfter;

document.write(`Value: ${valueBefore} <br>`)
document.write(`Type: ${typeBefore} <br>`)
document.write(`Value: ${valueAfter} <br>`)
document.write(`Type: ${typeAfter} `)


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.


var input =prompt("Type a word")
var res=input.toUpperCase();
document.write(`User input: ${input} <br>`)
document.write(`Upper case: ${res}`)

// 11. Write a program that takes user input. Convert and 
// show the input in title case. 

var userInput = prompt("Enter your word");
var result =userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase() ;
alert(result);