    new Swiper('.swiper', {
      loop: true,
      effect: 'fade',
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
