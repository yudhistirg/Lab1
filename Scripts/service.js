const skills = [
    {
      name: "Programming",
      description: "I have extensive experience in developing software using various programming languages such as Java, Python, and JavaScript. I have worked on various projects ranging from simple command-line applications to complex web applications.",
      image: "ADD IMAGE YOU LIKE",
      

    },
    {
      name: "Art",
      description: "I have a passion for creating visually appealing designs and illustrations. I have experience with digital tools such as Adobe Photoshop and Illustrator, as well as traditional mediums like pencil and paint.",
      image: "ADD IMAGE YOU LIKE",
    },
    {
      name: "Music",
      description: "Music has always been a big part of my life. I have been playing the piano for over 10 years and have a deep understanding of musical theory and composition. I have also experience with recording and producing music using digital audio workstations.",
      image: "ADD IMAGE YOU LIKE",
    }
  ];
  
  const skillsContainer = document.getElementById("skills-container");
  
  for (const skill of skills) {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = `
      <h2>${skill.name}</h2>
      <p>${skill.description}</p>
      <img src="${skill.image}" alt="${skill.name}">
    `;
    skillsContainer.appendChild(skillDiv);
  }
  