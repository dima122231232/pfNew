gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        /*HEADER*/
const burgers = document.querySelectorAll('.burger');
const burger = document.querySelector('.burger');
let prov =0;
burgers.forEach(burger => {
  const followCursor = ({ clientX, clientY }) => {
    const { left, top, width, height } = burger.getBoundingClientRect();
    gsap.to(burger, {
      x: clientX - left - width / 2,
      y: clientY - top - height / 2,
      duration: 0.45,
      ease: 'power2.out'
    });
  };

  burger.addEventListener('mouseenter', () => {document.addEventListener('mousemove', followCursor);});

  burger.addEventListener('mouseleave', () => {
    document.removeEventListener('mousemove', followCursor);
    gsap.to(burger, { x: 0, y: 0, duration: .6, ease: 'power2.out' });
  });
});

function headerClick(){
    if(!prov){
        gsap.timeline().to(burger.children[1], { opacity: 0, duration: 0.1 })
        .to(burger.children[0], { margin:"0px 0", duration: 0.4 }, 0)
        .to(burger.children[2], { margin:"0px 0", duration: 0.4}, 0)
        .to(burger.children[0], { rotate:-45,top:"4.75px", duration: 0.4})
        .to(burger.children[2], { rotate:45,bottom:"4.75px", duration: 0.4},.4)
        .to(".str", {right:"0vw",duration:1.2,ease: "strong.inOut"},0)
        .to(".fr", {right:"20vw",duration:1.2,ease: "strong.inOut"},0)
        .to(".burger-str", {width:"0vw",duration:1,delay:.2,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") },0)
        prov=1;
    }
    else{
        gsap.timeline().to(burger.children[0], { rotate:0,top:"0px", duration: 0.2})
        .to(burger.children[2], { rotate:0,bottom:"0px", duration: 0.2},0)
        .to(burger.children[0], { margin:"3.5px 0", duration: 0.2 }, .2)
        .to(burger.children[2], { margin:"3.5px 0", duration: 0.2}, .2)
        .to(burger.children[1], { opacity: 1, duration: 0.1 },.2)
        .to(".str", {right:"-40vw",duration:1.2,ease: "strong.inOut"},0)
        .to(".fr", {right:"-20vw",duration:1.2,ease: "strong.inOut"},0)
        .to(".burger-str", {width:"6vw",duration:1,delay:.1,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") },0)
        prov=0;
    }
}
        /*SECTION1*/
gsap.timeline().fromTo(".sec_photo1", {y:"100vh",marginLeft:"calc(var(--index)*-3)",scale:.3},{ y:"0vh",marginLeft:"calc(var(--index)*0)",scale:1.1, xPercent: -50,yPercent: -50, duration:.9,delay:1,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") })
.to(".sec_photo6",{rotate:0,duration:.35},3.1)
.fromTo(".sec_photo2", {y:"100vh",marginLeft:"calc(var(--index)*5)",scale:.3,},{ y:"0vh",marginLeft:"calc(var(--index)*5)",scale:1,yPercent: -50, duration:.9,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") },1.2)
.fromTo(".sec_photo4", {y:"100vh",marginLeft:"calc(var(--index)*-9)",scale:.3},{ y:"0vh",marginLeft:"calc(var(--index)*-5.5)",scale:1, duration:.9,yPercent: -50,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},1.4)
.fromTo(".sec_photo3", {y:"100vh",marginLeft:"calc(var(--index)*3)",scale:.3},{y:"0vh",marginLeft:"calc(var(--index)*5.5)",yPercent: -50,scale:1, duration:.9,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},1.6)
.fromTo(".sec_photo7", {y:"100vh",marginLeft:"calc(var(--index)*0)",scale:.3},{ y:"0vh",marginLeft:"calc(var(--index)*1.6)",scale:1,yPercent: -50, duration:.9,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},1.8)
.fromTo(".sec_photo5", {marginLeft:"calc(var(--index)*0)",scale:.3,rotate:"15deg"},{marginLeft:"calc(var(--index)*-6.1)",rotate:"0deg",scale:1,yPercent: -50, duration:.9,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},2.4)
.fromTo(".sec_photo5", {opacity:0},{opacity:1, duration:.1},2.4)
.fromTo(".sec_photo6", {y:"100vh",marginLeft:"calc(var(--index)*-6)",scale:.3,rotate:90},{y:"0vh",marginLeft:"calc(var(--index)*-5.6)",scale:1,yPercent: -50, duration:.9,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},2.2)
.fromTo(".sec_photo2", {marginLeft:"calc(var(--index)*5)"},{marginLeft:"calc(var(--index)*6.2)",duration:.2},3)
.to(".sec_photo1",{scale:1,duration:.5},3.2)
.to(".marquee-content",{top:"0px", duration:3,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")},1.2);

const marqueeContent = document.querySelector('.marquee-content');
const text = "CREATOR · DEVELOPER · DESIGNER · PROGRAMISTICC · ";
const modifiedText = text.replace(/ · /g, '<span class="dot"> · </span>');
marqueeContent.innerHTML = modifiedText.repeat(1000);

let scrollDirection = 1; 

function handleScroll() {
  const currentScroll = window.scrollY;

  if (currentScroll > this.lastScroll) {
    scrollDirection = 1;
  } else {
    scrollDirection = -1;
  }

  this.lastScroll = currentScroll;
  gsap.to(".marquee-content", {
    x: scrollDirection === 1 ? "100%" : "-100%", 
    duration: 10000,
    ease: "none",
    repeat: -1,
  });
}
handleScroll();
window.addEventListener('scroll', handleScroll);
