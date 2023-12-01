const swiperConfigs = (Width) => ({
  slidesPerView: 3.5,
  navigation: Width < 1024 ? false : true,
  spaceBetween: 27,

  breakpoints: {
    320: {
      slidesPerView: 1.7,
      centeredSlides: false,
      spaceBetween: 8,
    },
    360: {
      slidesPerView: 1.6,
      initialSlide: 0,

      centeredSlides: false,
      spaceBetween: 8,
    },
    410: {
      slidesPerView: 1.9,
      centeredSlides: false,
      initialSlide: 0,

      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2,
      centeredSlides: true,
      initialSlide: 2,

      spaceBetween: 18,
    },
    560: {
      slidesPerView: 2.3,
      centeredSlides: true,
      initialSlide: 2,

      spaceBetween: 18,
    },
    640: {
      slidesPerView: 2.6,
      centeredSlides: true,
      initialSlide: 2,

      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2.5,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 27,
      centeredSlides: false,
    },
    1366: {
      slidesPerView: 3.5,
      spaceBetween: 27,
      allowTouchMove: false,
    },
    1900: {
      slidesPerView: 4.5,
      spaceBetween: 27,
      centeredSlides: false,
      slidesOffsetAfter: 200,
    },
  },
})

export default swiperConfigs
