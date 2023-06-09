// 1. Create a signup form and display form data in your web 
// page on submission.
function submission()
 {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  document.write(`First Name: ${firstName}<br>`);
  document.write(`Last Name: ${lastName}<br>`);
  document.write(`Email: ${email}<br>`);
  document.write(`Password: ${password}<br>`);
}

// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed.  
function readMore()
{
  var r=document.getElementById("myBtn")
  r.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae sce erisque enim ligula venenatis dolor. Maecenas nisl est, mcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum.Sed dapibus pulvinar nibh tempor porta"
  }
