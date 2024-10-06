    new Swiper('.swiper', {
      loop: true,
      effect: 'fade',
      speed: 900,
      autoplay: true,
      autoplay: {
        delay: 3000,
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
