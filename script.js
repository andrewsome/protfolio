const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const subText = intro.querySelector("h2");

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

const videoScene = new ScrollMagic.Scene({
  duration: 800,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

const textAnim1 = TweenMax.fromTo(text, 7, { opacity: 1 }, { opacity: 0.3 });
const textAnim2 = TweenMax.fromTo(subText, 7, { opacity: 1 }, { opacity: 0.3 });

const textScene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim1, textAnim2)
  .addTo(controller)

let scrollPosition = 0;
videoScene.on("update", e => {
  scrollPosition = e.scrollPos / 1000;
});

setInterval(() => {
  video.currentTime = scrollPosition;
}, 33.3);

const lightSwitch = document.querySelector(".switch");
const projects = document.querySelector(".projects");
const interests = document.querySelector(".interests");
const sideBar = document.querySelector(".side-navbar");
const carousel = document.querySelector(".carousel");
const parallax = document.querySelector(".parallax");

lightSwitch.addEventListener('click', () => {
  lightSwitch.classList.toggle("active");
  intro.classList.toggle("dark");
  projects.classList.toggle("dark");
  interests.classList.toggle("dark");
  sideBar.classList.toggle("dark");
  carousel.classList.toggle("dark");
  parallax.classList.toggle("dark");
});