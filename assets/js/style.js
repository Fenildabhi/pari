
    $(function(){
        $("#header").load("header.html"); 
          $("#footer").load("footer.html"); 
        });

$(function(){
  $('a').click(function(){
      $('a.active-line').removeClass('active-line');
      $(this).addClass('active-line');
  });
});
$('.logo-image-slider').owlCarousel({
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

$('.Diamonds-shape').owlCarousel({
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
            items:6
        }
    }
})

$('.instagram-image').owlCarousel({
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
            items:6
        }
    }
})
$('.Projects-image').owlCarousel({
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
          items:4
      }
  }
})


  $('.Custom-Experience').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
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
function myFunction(x) {
    x.classList.toggle("fa-window-minimize");
  }



//   ---------------------------------------------
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
      }
      else{
        $('header').removeClass("sticky");
      }
    });

    
    (function() {

        var parent = document.querySelector(".range-slider");
        if(!parent) return;
      
        var
          rangeS = parent.querySelectorAll("input[type=range]"),
          numberS = parent.querySelectorAll("input[type=number]");
      
        rangeS.forEach(function(el) {
          el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                  slide2 = parseFloat(rangeS[1].value);
      
            if (slide1 > slide2) {
                      [slide1, slide2] = [slide2, slide1];
              // var tmp = slide2;
              // slide2 = slide1;
              // slide1 = tmp;
            }
      
            numberS[0].value = slide1;
            numberS[1].value = slide2;
          }
        });
      
        numberS.forEach(function(el) {
          el.oninput = function() {
                  var number1 = parseFloat(numberS[0].value),
                          number2 = parseFloat(numberS[1].value);
                  
            if (number1 > number2) {
              var tmp = number1;
              numberS[0].value = number2;
              numberS[1].value = tmp;
            }
      
            rangeS[0].value = number1;
            rangeS[1].value = number2;
      
          }
        });
      
      })();

      (function() {
        const heart = document.getElementById('heart');
        heart.addEventListener('click', function() {
          heart.classList.toggle('red');
        });
      })();

      