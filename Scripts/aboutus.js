document.body.style.backgroundColor = "#00BFFF";
document.body.style.backgroundImage = "url('images/image.jpg')";

// Get the content div and title element from the DOM
const content = document.getElementById("content");
const title = document.getElementById("title");

// Set the title text
title.textContent = "About Us";

// Create the content for the page
const text = 
`Hello, and welcome to our website! We are a team of computer programming students with a passion for creating innovative solutions through code. Our journey in computer science started with a simple interest in technology, but it quickly grew into a love for the limitless possibilities of programming.

Our mission through this website is to share our projects and experiences as computer programming students, and to connect with others who share our passion for coding. We believe that learning is a continuous process, and we are always eager to grow our skills and knowledge.

On this website, you will find a portfolio of our projects, including web applications and other software we have built during our studies. From simple web apps to more complex projects, our work showcases our passion for solving problems through code.

If you have any questions or just want to connect, feel free to reach out to us through the contact form on this website. We would love to hear from you!

Thank you for visiting our website, and we hope you enjoy exploring what we have to offer. <br/>

<p>LinkedIn account link: </p>`;

// Add the content to the page
content.innerHTML = text;

const imgElement = document.createElement("img");
imgElement.src = "images/Prem.jpg";
imgElement.alt = "Your image description";
imgElement.style.width = "200px";
imgElement.style.height = "200px";
imgElement.style.borderRadius = "20%";
imgElement.style.margin = "50px";




const parentElement = document.querySelector("#image-container");
parentElement.appendChild(imgElement);


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
