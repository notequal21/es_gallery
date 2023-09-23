import { gsap } from 'gsap/dist/gsap.js';
import Inputmask from '../../../node_modules/inputmask/dist/inputmask.es6.js';

export const anchors = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export const burger = () => {
  if (document.querySelector('.header-body__burger')) {
    const openBtn = document.querySelector('.header-body__burger');
    const menu = document.querySelector('.header');
    const body = document.querySelector('body');

    let toggleBurger = () => {
      if (openBtn.classList.contains('_open')) {
        openBtn.classList.remove('_open');
        menu.classList.remove('_open');
        body.classList.remove('lock');
      } else {
        openBtn.classList.add('_open');
        menu.classList.add('_open');
        body.classList.add('lock');
      }
    };

    openBtn.addEventListener('click', toggleBurger);
  }
};

export const modal = () => {
  if (document.querySelector('.modal-open-btn')) {
    const openBtn = document.querySelectorAll('.modal-open-btn');
    const modal = document.querySelector('.contactus');
    const modalBg = document.querySelector('.contactus__bg');
    const body = document.querySelector('body');
    const content = document.querySelectorAll('.container');

    let toggleModal = (e) => {
      e.preventDefault();

      let div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();

      if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        body.classList.remove('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `1320px`;
            item.style.padding = ` 0 20px`;
          });
        }
      } else {
        modal.classList.add('active');
        body.classList.add('lock');
        if (window.innerWidth > 992) {
          content.forEach((item) => {
            item.style.maxWidth = `${1320 + scrollWidth}px`;
            item.style.padding = ` 0 ${scrollWidth + 20}px 0 20px`;
          });
        }
      }
    };

    openBtn.forEach((item) => {
      item.addEventListener('click', toggleModal);
    });
    modalBg.addEventListener('click', toggleModal);
  }
};

// export const parallax = () => {
//   if (document.documentElement.clientWidth > 1200) {
//     let videoElem = document.querySelector('.kanuvoye-pomesucud');
//     window.addEventListener('mousemove', function (e) {
//       let x = e.clientX / window.innerWidth;
//       let y = e.clientY / window.innerHeight;
//       videoElem.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
//     });
//   }
// };

export const spoilerJQ = () => {
  $(document).ready(function () {
    $('.spoiler__btn').click(function (event) {
      if ($('.services__body').hasClass('one')) {
        $('.spoiler__btn').not($(this)).removeClass('active');
        $('.services__item-content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });
};

export const sticky = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the header
  var header = document.getElementById('myHeader');

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }
};

export const tabs = () => {
  var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
  jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var id = this.getAttribute('data-tab'),
        content = document.querySelector(
          '.js-tab-content[data-tab="' + id + '"]'
        ),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');

      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2

      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
  });
};

export const upBtn = () => {
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
        btn.classList.add('show');
        // Иначе прячем
      } else {
        btn.classList.remove('show');
      }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
    };
  });
};

export const preloader = () => {
  if (document.querySelector('.preloader')) {
    let preloader = document.querySelector('.preloader');
    let body = document.querySelector('body');
    body.classList.add('lock');
    const videoBlock = document.querySelector('.main-body__video');
    const videoItem = videoBlock.querySelector('video');

    const isTablet = window.innerWidth < 1201 && window.innerWidth > 767;
    const isMobile = window.innerWidth < 768;

    function counter(ms, className) {
      let counter = 0;
      let interval = setInterval(() => {
        document.querySelector(className).innerHTML = `${++counter} %`;
        counter === 100 ? clearInterval(interval) : false;
      }, ms);
    }

    document.addEventListener('DOMContentLoaded', () => {
      counter(12.5, '.preloader__percent');

      setTimeout(() => {
        body.classList.remove('lock');
      }, 2000);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 2000);
      setTimeout(() => {
        videoItem.play();
      }, 1900);

      gsap.fromTo(
        '.preloader__logo',
        { opacity: 0 },
        { opacity: 1, duration: 2.5 }
      );
      gsap.fromTo(
        '.preloader__percent',
        { opacity: 0 },
        { opacity: 1, duration: 2.5 }
      );
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0.5,
        delay: 1.4,
      });

      gsap.to('#main-logo-elem-1', {
        x: isTablet ? -293 : isMobile ? -127 : -278,
        duration: 1.3,
        delay: 1.7,
      });
      gsap.to('#main-logo-elem-2', {
        x: isTablet ? 280 : isMobile ? 117 : 265,
        duration: 1.3,
        delay: 1.7,
      });
      gsap.to('.main-body__video', {
        width: videoBlock.offsetHeight,
        duration: 1,
        delay: 1.9,
      });
    });

    if (document.documentElement.clientWidth > 1200) {
      setTimeout(() => {
        let videoElem = document.querySelector('.main-body__video');
        window.addEventListener('mousemove', function (e) {
          let x = e.clientX / window.innerWidth;
          let y = e.clientY / window.innerHeight;
          videoElem.style.transform = `translate(calc(-50% - ${
            x * 7
          }px),calc(-50% + ${y * 7}px))`;
        });
        let logoElem = document.querySelector('.main-body__logo');
        window.addEventListener('mousemove', function (e) {
          let x = e.clientX / window.innerWidth;
          let y = e.clientY / window.innerHeight;
          logoElem.style.transform = `translate(calc(-50% + ${
            x * 5
          }px),calc(-50% - ${y * 5}px))`;
        });
      }, 2700);
    }
  }
};

export const phoneNumberMask = () => {
  if (document.querySelector('#phone-number-callback-input')) {
    const selectorOrder = document.querySelector(
      '#phone-number-callback-input'
    );
    const select = document.querySelector('#phone-number-callback-select');
    const numberInput = document.querySelector('#phone-number-callback-input');
    Inputmask({ mask: '+7 (999) 999-99-99' }).mask(selectorOrder);

    const selectPhoneNumberFormat = (value) => {
      numberInput.value = '';
      Inputmask({ mask: value }).mask(selectorOrder);
    };

    select.addEventListener('change', () => {
      selectPhoneNumberFormat(select.value);
    });
  }
};
