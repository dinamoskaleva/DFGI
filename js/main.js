new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.header-pagination',
    bulletClass: 'header-bullet',
    bulletActiveClass: 'header-bullet-active',
    clickable: true
  },
});