function initSwiper() {
  new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function initBarba() {
  barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });
  
  barba.hooks.after(() => {
    initSwiper(); // Reinitialize Swiper after page transition
  });
}

// Initial Swiper setup
initSwiper();

// Check if the screen width is above 1024px (or your desired breakpoint)
if (window.innerWidth > 1024) {
  initBarba(); // Only initialize Barba on desktop
}
