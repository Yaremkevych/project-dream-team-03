import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 200,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.pagination',
      clickable: true,
    },
  });
  