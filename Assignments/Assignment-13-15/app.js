//..................ARRAYS..........................
//......................Assignment # 13-15 ...............

// 1. Declare an empty array using JS literal notation to store 
// student names in future.

var stdName=[];

// 2. Declare an empty array using JS object notation to store 
// student names in future. 
var stdName={};

// 3. Declare and initialize a strings array. 
var a=["banana","apple","mango"];

// 4.  Declare and initialize a numbers array. 
var num=[67,12,34,22,21,43];

// 5.  Declare and initialize a boolean array.
var boolean=[true,false];

// 6. Declare and initialize a mixed array
var x=["Karachi",56,"Islamabad",57,89,98,"Lahore" ];

 // 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

var qualifications=["SSC","HSC","BCS"," BS","BCOM","MS","M.Phil","PhD"];
document.write(`Qualifications <br>`);
var sNo=1;
for (let i = 0; i < qualifications.length; i++) 
{
    document.write(`${sNo}) ${qualifications[i]} <br>`) 
    sNo++;
} 

// 8. Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like: 

var totalMarks=500;
var stdName=["Michael","John","Tony"];
var obtainedMarks=[320,230,480];
var percentage=[];

for (let i = 0; i < stdName.length; i++) 
{
    p=Math.round((obtainedMarks[i]/totalMarks) *100);
    percentage.push(p);
    document.write(`Score of ${stdName[i]} is ${obtainedMarks[i]}.Percentage ${percentage[i]}% <br>`);  
}
// 9. Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser. 


