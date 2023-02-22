

const arrowPointing = document.querySelectorAll('.arrow-pointing');
const reasonImg = document.querySelectorAll('.reason-img');
const heroSection = document.querySelector('.hero');
const headerSection = document.querySelector('.header');
const mainSection = document.querySelector('main');
const goUpIcon = document.querySelector('.go-up-icon');

const shadowEffect = function (entry) {
 
  if (entry.target.classList.contains('reason-img')) {
    entry.target.classList.toggle('shadow-effect', entry.isIntersecting);
  }
};

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    shadowEffect(entry);
  });
}, {
  root: null,
  threshold: 1,
  rootMargin: '-10px',
});


reasonImg.forEach((img) => imgObserver.observe(img));

const stickNav = function (entry) {
  if (!entry.isIntersecting) {
    headerSection.classList.add('sticky');
    mainSection.style.marginTop = '9.6rem';
    goUpIcon.style.opacity = '1';
    goUpIcon.style.transform = 'translateY(25rem)';
  } else {
    headerSection.classList.remove('sticky');
    mainSection.style.marginTop = '0rem';
    goUpIcon.style.transform = 'translateY(0)';
    goUpIcon.style.opacity = '0';
  }
};

const stickyNavObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    stickNav(entry);
  });
}, {
  root: null,
  threshold: 0,
});

stickyNavObserver.observe(heroSection);
