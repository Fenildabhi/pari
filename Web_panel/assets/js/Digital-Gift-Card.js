(function() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function() {
    heart.classList.toggle('red');
  });
});
$('.pri-gift-card-inner a').on('click', function () {
  $('.pri-gift-card-inner a').removeClass('open');
  $(this).toggleClass('open')
});
