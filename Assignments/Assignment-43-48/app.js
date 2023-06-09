//1. Show an alert box on click on a link.
function message()
{
    alert("Welcome!");
}
// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user. 
function thankYou()
{
    alert("Thank you for purchasing a mobile from us");
}
// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted.  

function deleteRecord(e)
 {
    var record = e.parentNode;
    record.parentNode.remove();  
 }

//  4. Display an image in browser. Change the picture on mouseover and set the 
// first picture on mouseout. 
function increaseCount()
 {
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerHTML);
    count++;
    counter.innerHTML = count;
 }
function decreaseCount() 
{
    var counter = document.getElementById("counter");
    var count = parseInt(counter.innerHTML);
    count--;
    counter.innerHTML = count;
}