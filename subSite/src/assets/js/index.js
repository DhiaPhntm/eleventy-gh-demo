import "../css/index.scss";
import Swiper, { Navigation, Pagination } from "swiper";

// https://stackoverflow.com/questions/69154197/module-not-found-cant-resolve-swiper-css
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

window.addEventListener("load", function () {
  const swiper = new Swiper(".swiper-container", {
    modules: [Navigation, Pagination],
    centeredSlides: true,
    loop: true,
    // loop: true,
    // speed: 500,
    // slidesPerView: 1,
    spaceBetween: 40,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: { el: ".swiper-pagination", clickable: true, type: "bullets" },
    breakpoints: {
      1200: {
        // slidePerView: "auto",
        slidesPerView: 3,
        spaceBetween: 300,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: false,
      },
    },
  });
});
