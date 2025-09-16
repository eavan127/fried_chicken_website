/*====================== SHOW MENU ===============================*/
const navMenu  = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

/* Menu show */
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => { 
    navMenu.classList.add('show-menu');
  });
}

/* Menu hidden */
if (navClose && navMenu){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*====================== REMOVE MENU ON MOBILE ===================*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => navMenu && navMenu.classList.remove('show-menu');
navLink.forEach(n => n.addEventListener('click', linkAction));

/*====================== ADD SHADOW HEADER =======================*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (!header) return;
  window.scrollY >= 50
    ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', scrollHeader);

/*====================== SHOW SCROLL UP ===============================*/
const scrollUp = () => {
    const scrollBtn = document.getElementById('scroll-up');
    if (!scrollBtn) return;
    window.scrollY >= 350
      ? scrollBtn.classList.add('show__scroll')
      : scrollBtn.classList.remove('show__scroll');
}
window.addEventListener('scroll', scrollUp)

/*====================== SCROLL SECTIONS ACTIVE LINK ===============================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight, 
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active__link');
        } else {
            sectionsClass.classList.remove('active__link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*====================== SCROLL REVEAL ===============================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2000,
    delay: 300,
    // reset: true, // Animation repeats
});

sr.reveal('.home__data,.about__data,.footer__container');
sr.reveal('.home__images', {delay: 1000});
sr.reveal('.home__dam-1', {delay: 1000, scale:0, rotate:{z:45}});
sr.reveal('.home__dam-2,.home__dam-3', {delay: 1400, scale:0, rotate:{z:45}});
sr.reveal('.home__dam-4', {delay: 1700, scale:0, rotate:{z:45}});
sr.reveal('.home__dam-5', {delay: 1800, scale:0, rotate:{z:45}});
sr.reveal('.about__img-1', {delay: 600, origin: 'right'});
sr.reveal('.about__img-2', {delay: 800, origin: 'right'});
sr.reveal('.about__tooltip-1', {delay: 1600, origin: 'left'});
sr.reveal('.about__tooltip-2', {delay: 1800, origin: 'right'});
sr.reveal('.order__card:nth-child(1)', {origin: 'right'});
sr.reveal('.order__card:nth-child(2)', {origin: 'left'});
sr.reveal('.order__tooltip-1', {delay: 800, origin: 'right'});
sr.reveal('.order__tooltip-2', {delay: 800, origin: 'left'});
sr.reveal('.combo__titles', {origin:'bottom'});
sr.reveal('.combo__img', {delay: 1000});
sr.reveal('.combo__data', {delay: 1600});
sr.reveal('.combo__numbers', {delay: 1600, origin:'bottom'});
sr.reveal('.contact__data', {origin:'right'});
sr.reveal('.contact__info', {origin:'left'});
sr.reveal('.contact__img-1', {delay: 1000, distance: 0, scale: 0, rotate: {z:-45}});
sr.reveal('.contact__img-2', {delay: 1200, distance: 0, scale: 0, rotate: {z:45}});
sr.reveal('.contact__dam-1', {delay: 1400, scale: 0, rotate: {z:45}});
sr.reveal('.contact__dam-3', {delay: 1600, scale: 0, rotate: {z:45}});
sr.reveal('.contact__dam-2', {delay: 1800, scale: 0, rotate: {z:45}});
sr.reveal('.contact__dam-4', {delay: 2000, scale: 0, rotate: {z:45}});
