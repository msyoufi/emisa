const aboutBtn = document.getElementById('about_button');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');

aboutBtn.addEventListener('click', onAboutclick);

let isOnHome = true;

function onAboutclick() {
  if (isOnHome) {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'block';
    aboutBtn.textContent = 'HOME';

  } else {
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    aboutBtn.textContent = 'ABOUT';
  }

  isOnHome = !isOnHome;
}