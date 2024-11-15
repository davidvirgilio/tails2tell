import Swiper from 'swiper'
import { Navigation, Pagination} from 'swiper/modules'  

const slideCount = document.querySelectorAll(' .card-content .swiper-slide ').length;
let swiperBreakPoints ;

if(slideCount == 1){

  swiperBreakPoints = null;

} else if(slideCount == 2){

  swiperBreakPoints = {
    600:{
      slidesPerView: 2,
    }
  };

} else{

  swiperBreakPoints = {
    600:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    }
  }

}

      
      // console.log(swiperBreakPoints);
      
      let swiperCards = new Swiper('.card-content', {
    // Optional parameters

    modules:[Pagination, Navigation],

    spaceBetween: 40,
    grabCursor: true,
    speed: 500,
    loop: slideCount > 2,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: swiperBreakPoints,
  
  });