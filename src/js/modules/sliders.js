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
  if (document.querySelector('.artist-slider')) {
    const sliderList = document.querySelectorAll('.artist-slider');

    sliderList.forEach((item) => {
      const artistSliderBig = new Swiper(
        item.querySelector('.artist-slider__big'),
        {
          modules: [Navigation, Controller],
          speed: 600,

          navigation: {
            prevEl: item.querySelector('.artist-slider__nav-prev'),
            nextEl: item.querySelector('.artist-slider__nav-next'),
          },
        }
      );
      const artistSliderSmall = new Swiper(
        item.querySelector('.artist-slider__small'),
        {
          modules: [Navigation, Controller],
        }
      );

      artistSliderBig.controller.control = artistSliderSmall;
      artistSliderSmall.controller.control = artistSliderBig;
    });
  }
};
