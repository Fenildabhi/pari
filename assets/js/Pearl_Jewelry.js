$('.owl-carousel.shop-by-ring-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('.owl-carousel.shop-by-stone-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})