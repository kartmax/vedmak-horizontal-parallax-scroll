document.addEventListener('DOMContentLoaded', function() {
	const slider = new Swiper('.slider', {
      // direction: 'vertical',
      speed: 2400,
      mousewheel: true,
      // mousewheel: {
      //    enable: true,
      //    sensitivity: 2.4
      // },
      spaceBetween: 18,
      parallax: true,
      // freeMode: true
   })
   slider.keyboard.enable()

})
