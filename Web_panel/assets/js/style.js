
    $(function(){
        $("#header").load("header.html"); 
          $("#footer").load("footer.html"); 
        });
        
        setTimeout(function(){
          document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
            document.querySelector('.offcanvas-collapse').classList.toggle('open')
        })
        document.querySelector('#navbarSideCollapse-1').addEventListener('click', function() {
          document.querySelector('.offcanvas-collapse').classList.toggle('open')
      })
        }, 500);
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
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
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
    if ($(this).scrollTop() > 125){  
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
        const heart = document.getElementsByClassName('heart');
        heart.addEventListener('click', function() {
          heart.classList.toggle('red');
        });
      })();

setTimeout(function(){
  if ($(window).width() < 514) {
    $('.navbar-expand-lg').addClass('fixed-bottom');
} else {
    $('.navbar-expand-lg').removeClass('fixed-bottom');
}
}, 200);

$(window).scrollTop(position);
        function scrollToTop() {
          window.scrollTo(0, 0);
      }
      // -------------------------------------------
      const form = document.querySelector('form');
const input = document.querySelector('.search-input');
const clear = document.querySelector('.clear');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const showClear = () => clear.classList.add('visible');

function convert(e) {
  recognition.lang = navigator.language || 'en-US';
  recognition.interimResults = true;
  input.value = e.results[0][0].transcript;
  showClear();
  input.focus();
}

function reset() {
  clear.classList.remove('visible');
  input.value = '';
  input.focus();
}

function init(e) {
  e.target.matches('.magnify') && form.submit();
  e.target.matches('.clear') && reset();
  e.target.matches('.mic') && recognition.start();
}

form.addEventListener('keydown',showClear,false);
form.addEventListener('click',init,false);
recognition.addEventListener('result',convert,false);