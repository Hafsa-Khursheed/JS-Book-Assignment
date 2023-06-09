// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
//  <div>
//  <h1> DOM </h1>
//  <div id=”form-content” class=”content”>
//  <label for=”first-name”>First Name</label>
//  <input type=”text” id=”first-name” />
//  <label for=”last-name”>Last Name</label>
//  <input type=”text” id=”last-name” />
//  <label for=”email”>Email</label>
//  <input type=”text” id=”email” />
//  </div>
//  <div id=”main-content” class=”content”>
//  <p class=”render”> First Name : Alex</p>
//  <p class=”render” id=”lastName”>Last Name: Bank</p>
//  <p class=”render”> Email : alexbank@example.com</p>
//  <p class=”render”> Country : Pakistan </p>
//  <p class=”render”> contact : +92 300 1234567</p>
//  </div>
//  </div>
//  i. Get element of id “main-content” and assign them in a variable.
//  ii. Display all child elements of “main-content” element.
//  iii. Get all elements of class “render” and show their innerHTML 
//  in browser.
//  iv. Fill input value whose element id first-name using javascript.
//  v. Repeat part iv for id ”last-name” and “email”

// //........i....................
var x = document.getElementById("main-content");

// //........ii....................
var y = x.childNodes;
console.log(y);

//........iii....................
var renderedElements = document.getElementsByClassName("render");
for (var i = 0; i < renderedElements.length; i++) 
{
  console.log(renderedElements[i].innerHTML);
}
//........iv....................

document.getElementById("first-name").value = "Michel";

// ...........v...................
document.getElementById("last-name").value = "harry";
document.getElementById("email").value = "Michelharry@abc.com";


// 2.  use HTML code of question 1 and  show the result on browser.
//  i.What is node type of  element having id “form-content”.
//  ii.Show node type of element having id “lastName” and its child node.
//  iii. Update child node of element having id “lastName”.
//  iv. Get First and last child of id “main-content”.
//  v. Get next and previous siblings of id “lastName”.
//  vi. Get parent node and node type of element having id “email


//.........................i................................
var formContent = document.getElementById("form-content");
console.log(`Node type of  element having id form-content ${formContent.nodeType}`);

//.........................ii................................
var a = document.getElementById("lastName");
console.log(`Node type of  element having id lastName ${a.nodeType}`);
console.log(`Node type of the child node of element having id lastName ${a.childNodes[0].nodeType}`);

//.........................iii................................
lastName.innerHTML =" ";
lastName.innerHTML ="Last Name: Ronald";

//.........................iv................................
var mainContent = document.getElementById("main-content");
console.log(`First child of id main content ${mainContent.firstChild}`);
console.log(`Last child of id main content ${mainContent.lastChild}`);

//.........................v................................
var b = document.getElementById("lastName");
console.log(`Next sibling of id lastName ${b.nextSibling}`);
console.log(`Previous sibling of id lastName ${b.previousSibling}`);

//.........................vi................................

var e = document.getElementById("email");
console.log(`Node type of element having id email ${e.nodeType}` );
console.log(`Parent Node of element having id email ${e.parentNode}`);
