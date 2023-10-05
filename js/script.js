$(document).ready(function (){
   $('a[href^=""]').onclick(function () {
      let target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top
      }, 150);
   });
});

$(document).ready(animateElements);

function animateElements() {
   // animate in footer
   animateToScroll("footer .form_send_message > *", "fadeInRight", false);
   animateToScroll("footer .contact-cols .col h3, footer .contact-cols .col p, footer .oval"
       , "fadeInLeft", false);

   animateToScroll(".skills .skills_item", "fadeIn", false);
   animateToScroll(".projects__item", "fadeIn", false);
}
function animateToScroll(targetSelector, animationClass, resetOnScrollUp) {
   $(window).on('scroll', function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(targetSelector).each(function() {
         let objectBottom = $(this).offset().top;
         if (objectBottom < windowBottom) {
            $(this).addClass(animationClass);
         } else if (resetOnScrollUp) {
            $(this).removeClass(animationClass);
         }
      });
   });
}
