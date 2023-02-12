document.body.style.backgroundColor = "#00BFFF";
document.body.style.backgroundImage = "url('images/image.jpg')";

console.log("JS script wirred in");

// It redirect function after entered fields
function timedRedirect()
{
    let name = document.querySelector('name').value;
    let number = document.querySelector('number').value;
    let email = document.querySelector('email').value;
    let message = document.querySelector('message').value;
    console.log("Name: " + name + "\nContact Number: " + number + "\nEmail Address: " + email + "\nShort Message: " + message);
    e.preventDefault();
    setTimeout(function () {
        window.location.href = "index.html";
    }, 3000)
}

// After clicking the button, redirect to the index.html page
let submitButton = document.getElementById('submit-btn');
if (submitButton) { submitButton.addEventListener('click', timedRedirect); }


// Bottom Copy right Navbar
const date = new Date();
const year = date.getFullYear();
const copyrightText = `&copy; Copyright ${year}`;

const bottomNavbar = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
  <div class="container-fluid">
    <span class="navbar-text mr-auto">
      ${copyrightText}
    </span>
  </div>
</nav>
`;

document.getElementById("bottomNavbarContainer").innerHTML = bottomNavbar;
