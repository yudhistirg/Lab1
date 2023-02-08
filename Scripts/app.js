// Hardcoded text for site content
const welcomeText = "Welcome to My Site";

// Injecting the text into the page
document.getElementById("home-link").innerHTML = welcomeText;

// Changing the Products link to Projects
document.getElementById("product-link").innerHTML = "Projects";

// Adding Human Resources link
const hrLink = document.createElement("li");
hrLink.classList.add("nav-item");
hrLink.innerHTML = '<a class="nav-link" href="#">Human Resources <i class="fa fa-user"></i></a>';

// Finding the About Us link
const aboutUsLink = document.getElementById("about-us-link").parentElement;

// Inserting the Human Resources link before the About Us link
aboutUsLink.parentNode.insertBefore(hrLink, aboutUsLink.nextSibling);

// Adding bottom navbar
const bottomNavbar = document.createElement("nav");
bottomNavbar.classList.add("navbar", "navbar-light", "bg-light", "fixed-bottom");
bottomNavbar.innerHTML = '<div class="container"><p class="text-center">Copyright &copy; ' + new Date().getFullYear() + ' My Site</p></div>';

// Appending the bottom navbar to the page
document.getElementById("navbar-bottom").appendChild(bottomNavbar);
