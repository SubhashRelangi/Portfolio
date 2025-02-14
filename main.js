const skills = [{
  image: 'images/skills/frontend.jpg',
  name: 'Front-End Development',
  matter: `specialize in front-end development crafting visually appealing,
                            responsive, and user-friendly websites. My expertise includes HTML, CSS, and JavaScript.`
}, {
  image: 'images/skills/videoediting.jpg',
  name: 'Video Editing',
  matter: `have a strong interest in video editing
                            and multimedia design. I enjoy creating engaging visuals and enhancing content with smooth
                            transitions.`
}, {
  image: 'images/skills/photoediting.jpg',
  name: 'Photo Editing',
  matter: `have a strong interest in photo
                            and video editing, allowing me to enhance visuals and create engaging digital content.`
}, {
  image: 'images/skills/uidesign.jpg',
  name: 'UI / UX Design',
  matter: `have a keen interest in UI/UX design, focusing on creating
                            user-friendly and visually appealing digital experiences.`
}];

const projects = [{
  image: 'images/projects/rockpaperscissors.jpg',
  name: 'Rock Paper Scissor',
  note: `Note : This game is designed for single player to play with computer`,
  letter: 'Rockpaperscissor'
}, {
  image: 'images/projects/handcricket.png',
  name: 'Hand Cricket',
  note: `Note : This game is designed for single player to play with computer`,
  letter: 'handcricket'
}];

let displayskills = '';
let displayprojects = '';

// skills Div 

skills.forEach(({ image, name, matter }) => {
  displayskills += `<div class="Skills">
                <div class="imageforskill">
                    <img class="skillImage" src="${image}">
                </div>
                <div class="matterforskill">
                    <h1 class="skillName">${name}</h1>
                    <div class="ratingDiv">
                        <p class="paraforskill">
                            <span style="padding-left: 20px;">I</span> ${matter}
                        </p>
                    </div>
                </div>
            </div>`
});

// Projects Div

document.querySelector('.SkillDiv').innerHTML = displayskills;

projects.forEach(({ image, name, note, letter }) => {
  displayprojects += `<div class="Skills">
                    <div class="imageforskill">
                        <img class="skillImage" src="${image}">
                    </div>
                    <div class="matterforskill">
                        <h1 class="skillName">${name}</h1>
                        <div class="ratingDiv">
                            <p class="paraforskill">${note}</p>
                        </div>
                        <div class="buttonDiv"><button class="visitbutton ${letter}">Visit</button></div>
                    </div>
                </div>`
});

document.querySelector('.projectsDiv').innerHTML = displayprojects;

//Education Section Html

document.querySelector('.educationSection').innerHTML = `<div class="BackArrowDiv">
                <a class="anchorforEducationArrow">
                    <i class="fa-solid fa-arrow-left arrowRight1"></i>
                </a>
            </div>
            <h1 class="educationHeading">Education Details</h1>
            <div class="educationDiv">
                <div class="educationDetailsDiv">
                    <h3 class="headingTag">🎓 Diploma in Computer Engineering</h3>
                    <p class="para1">📍 Andhra Polytechnic, Kakinada</p>
                    <p class="para2">2023-Present</p>
                    <p class="para3">
                        <span style="padding-left: 90px;">I</span> am currently pursuing a
                        Diploma in Computer Engineering, where I am gaining hands-on experience in software development,
                        web technologies, and problem-solving.
                        The curriculum has provided me with in-depth knowledge of Skills, programming languages.
                    </p>

                    <h3 class="headingTag">🎓 Secondary School Certificate (SSC)</h3>
                    <p class="para1">📍 Sree Vidyaniketan High School, Angara</p>
                    <p class="para2">Completed: 2023</p>
                </div>
            </div>`


// About Me Div Html

document.querySelector('.AboutMeDiv').innerHTML = ` <div class="BackArrowDiv">
                <a class="Anchorforarrow">
                    <i class="fa-solid fa-arrow-left arrowRight"></i>
                </a>
            </div>
            <div class="imageDivMe">
                <img class="Image1" src="images/profile.jpg" alt="Profile Picture">
            </div>
            <div class="aboutDiv">
                <h1 class="name">Relangi Lova Subhash</h1>
                <p class="Me">
                    <span style="padding-left: 70px;">Hey</span>, I'm Subhash, a web developer with a passion for the
                    last 6 months. I specialize in Front-End development.
                </p>
                <p class="Me">
                    <span style="padding-left: 70px;">My</span> journey in tech was sparked by a deep curiosity about
                    how things work behind the scenes on the web, and I was inspired by a close friend who encouraged me
                    to dive into development. This motivation has driven me to continuously learn and improve. With a
                    solid foundation in web development, I've worked on several projects, including 
                    <a href="https://subhashrelangi.github.io/Rock-paper-scissor/" target="_blank" class="anchorforgame">
                        Rock Paper Scissors
                    </a> and 
                    <a href="https://subhashrelangi.github.io/Hand-cricket/" target="_blank" class="anchorforgame">
                        Hand Cricket
                    </a>.
                </p>
                <p class="Me">
                    <span style="padding-left: 70px;">I</span> specialize in front-end development, but I have a deep
                    interest in back-end processes as well, allowing me to approach projects with a well-rounded
                    perspective and tackle diverse challenges effectively. Beyond coding, I love exploring emerging
                    technologies, playing badminton, drawing, and expanding my expertise in multimedia and design.
                </p>
            </div>`


document.querySelector('.aboutButton').addEventListener('click', () => {
  const displayAboutMe = document.querySelector('.AboutMeDiv');
  const displaycontentsection = document.querySelector('.contentDiv');
  displayAboutMe.style.display = displayAboutMe.style.display === 'flex' ? 'none' : 'flex';
  displaycontentsection.style.display = displaycontentsection.style.display === 'none' ? 'flex' : 'none';
});

document.querySelector('.Anchorforarrow').addEventListener('click', () => {
  const displayAboutMe = document.querySelector('.AboutMeDiv');
  const displaycontentsection = document.querySelector('.contentDiv');
  displayAboutMe.style.display = displayAboutMe.style.display === 'flex' ? 'none' : 'flex';
  displaycontentsection.style.display = displaycontentsection.style.display === 'none' ? 'flex' : 'none';
});

document.querySelector('.anchorEducation').addEventListener('click', () => {
  const displayEducation = document.querySelector('.educationSection');
  displayEducation.style.display = displayEducation.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelector('.anchorforEducationArrow').addEventListener('click', () => {
  const displayEducation = document.querySelector('.educationSection');
  displayEducation.style.display = displayEducation.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelector('.anchorHome').addEventListener('click', () => {
  location.reload();
});

document.querySelector('.handcricket').addEventListener('click', () => {
  window.open("https://subhashrelangi.github.io/Hand-cricket/", "_blank");
});

document.querySelector('.Rockpaperscissor').addEventListener('click', () => {
  window.open("https://subhashrelangi.github.io/Rock-paper-scissor/", "_blank");
});