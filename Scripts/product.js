document.body.style.backgroundColor = "#00BFFF";
document.body.style.backgroundImage = "url('images/image.jpg')";
// header
const header = document.querySelector('#header');
header.textContent = "Our Projects";

const projectList = document.querySelector('#project-list');




// An Arry that describes our project
const ourproject = [
    {
        Application: "To-Do List App",
        image: "",
        description:"A web application that allows users to create and manage a list of tasks. The app allows users to add tasks, mark them as complete, and delete them. This project can be built using HTML, CSS, and JavaScript.",
    },
    {
        Application: "Weather App",
        image: "images/app2.png",
        description:" A web application that displays the current weather for a given location. The app retrieves weather data from an API and displays the temperature, conditions, and a weather icon. This project can be built using HTML, CSS, and JavaScript.",
    },
    {
        Application: "Quiz Game",
        image: "images/app3.png",
        description:"A web application that allows users to take a quiz on a specific subject. The quiz can have multiple-choice questions, and the app will keep track of the user's score and display it at the end. This project can be built using HTML, CSS, and JavaScript.",
    }
];

// Function to display the list of our project
ourproject.forEach(app => {


    const appDiv = document.createElement('div');
    const appApplication = document.createElement('h2');
    appApplication.textContent = app.Application;
    appDiv.appendChild(appApplication);


    const appImage = document.createElement('img');
    appImage.src = app.image;
    appDiv.appendChild(appImage);

    const appdescription = document.createElement('p');
    appdescription.textContent = `description: ${app.description}`;
    appDiv.appendChild(appdescription);



    projectList.appendChild(appDiv);

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
