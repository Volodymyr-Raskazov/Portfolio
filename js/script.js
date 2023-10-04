$(document).ready(function (){
   $('a[href^=""]').onclick(function () {
      let target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 150);
   });
});