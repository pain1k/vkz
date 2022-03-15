import './scss/app.scss';

$(document).ready(function(){
  $('#enter').modal('show')
});

$('#enter').click(function() {
  $('#enter').modal('hide');
});

$(".b-header__hamburger").click(function(){
        $('.b-header__close').css('display', 'block')
        $('.b-header__hamburger').css('display', 'none')
});

$(".b-header__close").click(function(){
        $('.b-header__close').css('display', 'none')
        $('.b-header__hamburger').css('display', 'block')
});