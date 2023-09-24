import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';

export const eventAboutSlider = () => {
  if (document.querySelector('.event_about-slider')) {
    const swiperImg = new Swiper('.event_about-slider', {
      modules: [Navigation],
      speed: 600,

      navigation: {
        prevEl: '#event-about-slider-prev',
        nextEl: '#event-about-slider-next',
      },
    });
  }
};

export const artistSlider = () => {
  if (document.querySelector('#artist-slider-big')) {
    const artistSliderBig = new Swiper('#artist-slider-big', {
      modules: [Navigation, Controller],
      speed: 600,

      navigation: {
        prevEl: '#artist-slider-nav-prev',
        nextEl: '#artist-slider-nav-next',
      },
    });
    const artistSliderSmall = new Swiper('#artist-slider-small', {
      modules: [Navigation, Controller],
    });

    artistSliderBig.controller.control = artistSliderSmall;
    artistSliderSmall.controller.control = artistSliderBig;
  }

  if (document.querySelector('#artist-slider-big-second')) {
    const artistSliderBig = new Swiper('#artist-slider-big-second', {
      modules: [Navigation, Controller],
      speed: 600,

      navigation: {
        prevEl: '#artist-slider-small-second-prev',
        nextEl: '#artist-slider-small-second-next',
      },
    });
    const artistSliderSmall = new Swiper('#artist-slider-small-second', {
      modules: [Navigation, Controller],
    });

    artistSliderBig.controller.control = artistSliderSmall;
    artistSliderSmall.controller.control = artistSliderBig;
  }
};
