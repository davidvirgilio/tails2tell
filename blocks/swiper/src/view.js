import Swiper from 'swiper'
import { Navigation, Pagination} from 'swiper/modules'
console.log('Hola desde Javascript')


const swiper = new Swiper('.swiper', {

    modules: [Navigation, Pagination],
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });
