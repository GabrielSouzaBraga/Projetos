//Botão de voo

const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
  rotateBtn.classList.add('active');
  setTimeout(() => {
    rotateBtn.classList.remove('active');
  }, 2100)


  slides.forEach(slide =>{
      if(slide.classList.contains('active')){
        slide.classList.add('after-active');
      }
      else {
        slide.classList.remove('after-active');
      }
  })
  slides[index].classList.remove('active');
  index++;

  if (index == totalSlides){
    index=0;
  }

  slides[index].classList.add('active');
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };

  });
};

// login

const wrapper = document.querySelector('.wrapper');
const mediaoptions = document.querySelector('.media-options')
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');

registerLink.onclick = () => {
  wrapper.classList.add('active');
  mediaoptions.classList.add('active');
};

loginLink.onclick = () => {
  wrapper.classList.remove('active');
  mediaoptions.classList.remove('active');
};

btnPopup.onclick = () => {
  wrapper.classList.add('active-popup');
  mediaoptions.classList.remove('active');
};

iconclose.onclick = () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
};

//section destinos

const filterbuttons = document.querySelectorAll(".buttons-destinations button");
const filterablecards = document.querySelectorAll(".destinations-cards .card");

console.log(filterbuttons,filterablecards);

const filtercards = e => {
  document.querySelector(".selected").classList.remove("selected");
  e.target.classList.add("selected");
  filterablecards.forEach(card => {
    card.classList.add("hide");
  if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
    card.classList.remove("hide");
  }

  });
};

filterbuttons.forEach(button => button.addEventListener("click", filtercards));