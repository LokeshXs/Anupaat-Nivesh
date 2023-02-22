
let arrowPointing = document.querySelectorAll('.arrow-pointing');

let reasonImg = document.querySelectorAll('.reason-img');

let heroSection = document.querySelector('.hero');

let headerSection = document.querySelector('.header');

let mainSection = document.querySelector('main');

let goUpIcon = document.querySelector('.go-up-icon');







const showArrow = function(entries,observer){
const [entry] = [...entries];

entry.target.classList.toggle('set-opacity-visible',entry.isIntersecting);

if(entry.target.classList.contains('reason-img')){
  entry.target.classList.toggle('shadow-effect',entry.isIntersecting);
}

}

const arrowObserver = new IntersectionObserver(showArrow,{
  root:null,
  threshold:1,
  rootMargin:'-100px'
});

arrowPointing.forEach((arrow)=>arrowObserver.observe(arrow));

reasonImg.forEach((img)=>arrowObserver.observe(img));


// Implementing Sticky Navigation

const stickNav = function(entries,observer){
  const [entry] = [...entries];
  console.log(entry);
  
  if(!entry.isIntersecting){
    console.log('1');
headerSection.classList.add('sticky');
mainSection.style.marginTop="9.6rem";
goUpIcon.style.opacity="1";
goUpIcon.style.transform="translateY(25rem)";

  }else{
    headerSection.classList.remove('sticky');
    mainSection.style.marginTop="0rem";
    goUpIcon.style.transform="translateY(0)";
    goUpIcon.style.opacity="0";
  }


};

const stickyNavObserver = new IntersectionObserver(stickNav,{
root:null,
threshold:0,

});

stickyNavObserver.observe(heroSection);

