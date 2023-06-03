// Template Name: Saasbox - Multipurpose HTML Template for Saas & Agency
// Template Author: Designing World
// Template Author URL: https://themeforest.net/user/designing-world
// Version: 2.0.0
// Last Updated: Sep 26, 2021

// [Index - Active JS]
// 1.0 Custom Code
//  1.1 Mobile Dropdown Menu
//  1.2 Sticky Header
//  1.3 Anchor Prevent Default
//  1.4 Price Table Switching
//  1.5 Page Scroll Indicator
//  1.6 Password Visibility
//  1.7 Scroll to Top
// 2.0 Third Party Plugins Activation
//  2.1 Tiny Sliders
//   2.1.1 Hero 3 Area Slides
//   2.1.2 Portfolio One Slides
//   2.1.3 Portfolio Two Slides
//   2.1.4 Client Feedback Slides
//   2.1.5 Partner Slides
//   2.1.6 Hero 4>1 Slides
//   2.1.7 Hero 4>2 Slides
//   2.1.8 Related Project Slides
//   2.1.9 Product Details Slides
//  2.2 Isotope
//  2.3 Counter Up
//  2.4 Portfolio Image Zoom
//  2.5 Popup Video
//  2.6 Count Down
//  2.7 WOW - On Scroll Animation
// 3.0 Bootstrap Features Activation
//  3.1 Tooltip Activation
//  3.2 Toast Activation
//  3.3 Popover Activation
// 4.0 Preloader

'use strict';

// 1.2 Sticky Header

// let navarToggler = document.querySelector('.navbar-toggler');
// let header = document.querySelector('.header-area');

// if (navarToggler) {
//   navarToggler.addEventListener('click', function () {
//     header.classList.toggle('mobile-menu-open');
//   });
// }

// if (header) {
//   function stickyNavigation() {
//     if (window.pageYOffset > 10) {
//       header.classList.add('sticky-on');
//     } else {
//       header.classList.remove('sticky-on');
//     }
//   }

//   window.addEventListener('load', stickyNavigation);
//   window.addEventListener('scroll', stickyNavigation);
// }

// 1.3 Anchor Prevent Default

let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
  for (let i = 0; i < anchorLength; i++) {
    anchor[i].addEventListener('click', function (e) {
      e.preventDefault();
    });
  }
}

// 1.4 Price Table Switching

function pricingTable() {
  let planCard = document.querySelectorAll('.pricing-card');
  let planCardlen = planCard.length;

  for (let i = 0; i < planCardlen; i++) {
    if (planCard[i].classList.contains('monthly-plan')) {
      planCard[i].classList.remove('monthly-plan');
      planCard[i].classList.add('yearly-plan');
    } else {
      planCard[i].classList.add('monthly-plan');
      planCard[i].classList.remove('yearly-plan');
    }
  }
}

let priceSwitching = document.getElementById('priceSwitching');

if (priceSwitching) {
  priceSwitching.addEventListener('click', pricingTable);
}

// 1.5 Page Scroll Indicator

let scrollDiv = document.getElementById('scrollIndicator');

if (scrollDiv) {
  window.addEventListener('scroll', function () {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrollDiv.style.width = scrolled + '%';
  });
}

// 1.6 Password Visibility

let inputPasswordId = document.getElementById('registerPassword');
let passwordButton = document.querySelector('.label-psswd');

if (inputPasswordId) {
  function passwordHideShow() {
    if (inputPasswordId.type === 'password') {
      inputPasswordId.type = 'text';
      passwordButton.innerHTML = 'Hide';
    } else {
      inputPasswordId.type = 'password';
      passwordButton.innerHTML = 'Show';
    }
  }
  passwordButton.addEventListener('click', passwordHideShow);
}

// 1.7 Scroll to Top

let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > topdistance ||
      document.documentElement.scrollTop > topdistance
    ) {
      scrollButton.classList.add('scrolltop-show');
      scrollButton.classList.remove('scrolltop-hide');
    } else {
      scrollButton.classList.add('scrolltop-hide');
      scrollButton.classList.remove('scrolltop-show');
    }
  });

  scrollButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

// 2.2 Isotope [This code depends on {Imagesloaded & Isotope} plugins.]

let grid = document.querySelector('.saasbox-portfolio-filter');

if (grid) {
  imagesLoaded(grid, function () {
    let iso = new Isotope(grid, {
      itemSelector: '.portfolio-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.portfolio-item',
      },
    });

    let filtersElem = document.querySelector('.filters-button-group');

    if (filtersElem) {
      filtersElem.addEventListener('click', function (event) {
        if (!matchesSelector(event.target, 'button')) {
          return;
        }
        let filterValue = event.target.getAttribute('data-filter');
        iso.arrange({
          filter: filterValue,
        });
      });
    }

    let buttonGroups = document.querySelectorAll('.filters-button-group');
    let buttonGroupslen = buttonGroups.length;

    for (let i = 0; i < buttonGroupslen; i++) {
      let buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener('click', function (event) {
        if (!matchesSelector(event.target, 'button')) {
          return;
        }
        buttonGroup.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');
      });
    }
  });
}

// // 2.3 Counter Up [This code depends on {CounterUp} plugin.]
// let counterlen = document.querySelectorAll('.counter').length;

// if (counterlen > 0) {
//   let counterUp = window.counterUp.default;

//   let callback = (entries) => {
//     entries.forEach((entry) => {
//       let counterElement = entry.target;
//       if (
//         entry.isIntersecting &&
//         !counterElement.classList.contains('is-visible')
//       ) {
//         counterUp(counterElement, {
//           duration: 2000,
//           delay: 20,
//         });
//         counterElement.classList.add('is-visible');
//       }
//     });
//   };

//   let IO = new IntersectionObserver(callback, {
//     threshold: 1,
//   });

//   let counterUpClass = document.querySelectorAll('.counter');
//   let counterUpClasslen = counterUpClass.length;

//   for (let i = 0; i < counterUpClasslen; i++) {
//     IO.observe(counterUpClass[i]);
//   }
// }

// 2.4 Portfolio Image Zoom [This code depends on {BaguetteBox} plugin.]

let imgZoom = document.querySelectorAll('.portfolio-img-zoom');
let imgZoomlen = imgZoom.length;

if (imgZoomlen > 0) {
  window.addEventListener('load', function () {
    baguetteBox.run('.portfolio-img-zoom', {
      buttons: 'auto',
      animation: 'slideIn',
      overlayBackgroundColor: 'rgba(30, 39, 46, .9)',
    });
  });
}

// 2.5 Popup Video [This code depends on {MediaBox} plugin.]

let playButton = document.querySelectorAll('.play-button').length;

if (playButton > 0) {
  MediaBox('.play-button');
}

// 2.6 Count Down [This code depends on {Countdown} plugin.]

let comingSoonClock = document.getElementById('comingSoonClock');

if (comingSoonClock) {
  new countdown({
    target: '#comingSoonClock',
    dayWord: ' Days',
    hourWord: ' Hours',
    minWord: ' Min',
    secWord: ' Sec',
  });
}

// // 2.7 WOW - On Scroll Animation [This code depends on {WOW} plugin.]
// let wowlen = document.querySelectorAll('.wow').length;

// if (wowlen) {
//   new WOW().init();
// }

// 4.0 Preloader

let preloader = document.getElementById('preloader');

if (preloader) {
  window.addEventListener('load', function () {
    let fadeOut = setInterval(function () {
      if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
      }
      if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.1;
      } else {
        clearInterval(fadeOut);
        preloader.remove();
      }
    }, 20);
  });
}
