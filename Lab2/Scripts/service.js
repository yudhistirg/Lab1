//sets the background colour and image
document.body.style.backgroundColor = "#00BFFF";
document.body.style.backgroundImage = "url('images/back.jpg')";


const skills = [
    {
      title: "Custom Programming",
  description: "We offer custom programming services to help clients bring their ideas to life. Whether you need a standalone software solution, or a complex web application, we have the technical expertise to deliver quality results. We work closely with clients to understand their requirements and provide tailored solutions that meet their unique needs.",
  skills: "Some of the programming languages we specialize in include Java, Python, and JavaScript. We have extensive experience in developing software solutions across various platforms, including Windows, MacOS, and Linux.",
  image: "images/custom.png"
      

    },
    {
     title: "Mobile Development",
  description: "We offer mobile development services to help clients bring their ideas to life on mobile platforms. We specialize in developing applications for both iOS and Android, using languages such as Swift and Java.",
  skills: "We have experience in developing applications for a wide range of purposes, including entertainment, productivity, and e-commerce. We also have experience in using mobile development frameworks such as React Native, which allow us to create high-quality applications that are optimized for performance and user experience.",
  image: "images/mobile.png"
    },
    {
      title: "Web Design",
  description: "We provide professional web design services that help clients create visually appealing and user-friendly websites. We work closely with clients to understand their design preferences, target audience, and goals for their website. We then use this information to create custom designs that meet their requirements.",
  skills: "We have expertise in using design tools such as Adobe Photoshop and Illustrator to create visually stunning websites that are both functional and aesthetically pleasing. We also have experience in HTML, CSS, and JavaScript, which allows us to create websites that are optimized for performance and search engines.",
  image: "images/website.jpg"
    }
  ];

// image soources are provided below
  
  const skillsContainer = document.getElementById("skills-container");
  
  for (const skill of skills) {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = `
    <h1>${skill.title}</h1>
    <img src="${skill.image}" alt="${skill.name}">

      <p>${skill.description}</p>
      <p>${skill.skills}</p>
    `;
    skillsContainer.appendChild(skillDiv);
  }
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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-text mr-auto">
            ${copyrightText}
          </span>
        </div>
      </nav>
      `;

document.getElementById("bottomNavbarContainer").innerHTML = bottomNavbar;
  
//image source
//https://www.freecodecamp.org/news/the-programming-language-pipeline-91d3f449c919/
//https://www.simform.com/blog/steps-for-ecommerce-mobile-app-development/
