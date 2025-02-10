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

document.querySelector('.anchorHome').addEventListener('click',() => {
    location.reload();
});

document.querySelector('.handcricket').addEventListener('click',() => {
    window.open("https://subhashrelangi.github.io/Hand-cricket/" , "_blank");
});

document.querySelector('.Rockpaperscissor').addEventListener('click',() => {
    window.open("https://subhashrelangi.github.io/Rock-paper-scissor/" , "_blank");
});