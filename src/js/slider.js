import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
  });