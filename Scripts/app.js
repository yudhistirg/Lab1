const welcomeSection = document.getElementById("welcome-section");
welcomeSection.style.backgroundImage = "img src='./images/background.webp'";
welcomeSection.style.height = "400px";
welcomeSection.style.backgroundSize = "cover";

const welcomeText = document.createElement("h1");
welcomeText.innerHTML = "Welcome to our Site";
welcomeText.style.textAlign = "center";
welcomeText.style.color = "Black";
welcomeText.style.paddingTop = "130px";

const welcomePara = document.createElement("p");
welcomePara.innerHTML = "Write your RIYA AND OTHER MEMBER INTRODUCTION";
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