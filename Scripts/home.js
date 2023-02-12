document.body.style.backgroundColor = "#00BFFF";
document.body.style.backgroundImage = "url('images/background.j')";
// javascript for home page
const welcomeSection = document.getElementById("welcome-section");
welcomeSection.style.backgroundImage = "img src='./images/background.webp'";
welcomeSection.style.height = "400px";
welcomeSection.style.backgroundSize = "cover";

const welcomeText = document.createElement("h1");
welcomeText.innerHTML = "Welcome to the portfolio of Yudhistir Gnawali and Riya Panchal";
welcomeText.style.textAlign = "center";
welcomeText.style.color = "Black";
welcomeText.style.paddingTop = "130px";

const welcomePara = document.createElement("p");
welcomePara.innerHTML = "A passionate computer programming student. This website showcases our projects and achievements in the field of computer science.We are dedicated to learning and growing our skills in programming, and we are eager to use our knowledge to create innovative solutions to real-world problems. Browse through our portfolio to get a glimpse of our work and feel free to contact us if you have any questions.";
welcomePara.style.textAlign = "center";
welcomePara.style.color = "Black";
welcomePara.style.paddingTop = "100px";

welcomeSection.appendChild(welcomeText);
welcomeSection.appendChild(welcomePara);

let AboutUsButton = document.getElementById("AboutUsButton");
    AboutUsButton.addEventListener("click", function()
    {
        location.href = "about.html";
    });
// This change the product link to projects
let link = document.getElementById("productsLink");

// Create a new text node with the text "projects"
let newText = document.createTextNode("Projects");

// Replace the current content of the link with the new text node
link.innerHTML = "";
link.appendChild(newText);

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




    