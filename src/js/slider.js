import Swiper from 'swiper/bundle';


const swiper = new Swiper('.swiper', {
    loop: true,

    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: true,
        behavior: 'smooth',
        draggable: true,
      },
  });

  const container = document.getElementById('container-clients-reviews');
  const elementToScrollTo = container.querySelector('.element-to-scroll-to');
  elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
  
  