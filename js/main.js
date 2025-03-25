const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass =  '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if(mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.replace(navClosedClass, navOpenedClass);
  } else {
    mobileNav.classList.replace(navOpenedClass, navClosedClass);
  }

  toggleNavButton();
});

function toggleNavButton() {
  closeBtnIcon.classList.toggle(arrowLeftClass);
  closeBtnIcon.classList.toggle(arrowRightClass);
};

// swiper js

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

// faq 
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach(item => {
  const faqBtn = item.querySelector('.faq__btn');
  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// scroll reveal animations 
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
 /*  reset: true, */
});
sr.reveal('.hero__title', {
  origin: 'top',
});
sr.reveal('.hero__image');
sr.reveal('.stats__image', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'top',
});
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');
sr.reveal('.team__title');
sr.reveal('.team__slider');
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});
sr.reveal('.departments__bg');
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});
sr.reveal('.brands__logo', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');
sr.reveal('.footer__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});