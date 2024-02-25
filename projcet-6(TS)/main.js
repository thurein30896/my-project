import "./src/index.css";
import Swiper from 'swiper/bundle';

  //reviews-carousel
  new Swiper(".reviews-carousel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 2000,
    },
  });

const navMenu = document.querySelector("#navMenu");
const navOpen = document.querySelector("#navOpen");
const navClose = document.querySelector("#navClose");

const tab1 = document.querySelector("#tab-1");
const tab2 = document.querySelector("#tab-2");
const tab3 = document.querySelector("#tab-3");
const tabImg1 = document.querySelector("#tabImg1");
const tabImg2 = document.querySelector("#tabImg2");
const tabImg3 = document.querySelector("#tabImg3");

const showImg = document.querySelector("#showImg");
const showYoutube = document.querySelector("#showYoutube");
const imgToYoutubeBtn = document.querySelector("#imgToYoutubeBtn");

const navOpenHandler = () => {
  navMenu.classList.toggle("hidden");
  navClose.classList.toggle("hidden");
  navOpen.classList.toggle("hidden");
};

const tabHandler = () => {
  tabImg1.classList.add("hidden");
  tabImg2.classList.remove("hidden");
  tabImg3.classList.add("hidden");
  tab1.classList.add("bg-red-200");
  tab2.classList.remove("bg-red-200");
  tab3.classList.remove("bg-red-200");
};

const tabTwoHandler = () => {
  tabImg1.classList.remove("hidden");
  tabImg2.classList.add("hidden");
  tabImg3.classList.add("hidden");
  tab1.classList.remove("bg-red-200");
  tab2.classList.add("bg-red-200");
  tab3.classList.remove("bg-red-200");
};

const tabThreeHandler = () => {
  tabImg1.classList.add("hidden");
  tabImg2.classList.add("hidden");
  tabImg3.classList.remove("hidden");
  tab1.classList.remove("bg-red-200");
  tab2.classList.remove("bg-red-200");
  tab3.classList.add("bg-red-200");
};

const imgToYoutubeBtnHandler = () => {
  showImg.classList.add("hidden");
  showYoutube.classList.remove("hidden");
}

navOpen.addEventListener("click", navOpenHandler);
navClose.addEventListener("click", navOpenHandler);
tab1.addEventListener("click", tabHandler);
tab2.addEventListener("click", tabTwoHandler);
tab3.addEventListener("click", tabThreeHandler);
imgToYoutubeBtn.addEventListener("click",imgToYoutubeBtnHandler);



