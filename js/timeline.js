window.onload = function() {

  window.sr = ScrollReveal();
  sr.reveal('#fade-in', {duration:300});

   /* Scroll animation from
  https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2 */
  
   $('a[href^="#"]').on('click', function(event) {
     var target = $(this.getAttribute('href'));
     if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
     }
 });
};



function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}
var items = document.querySelectorAll("#timeline li");
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (elementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);