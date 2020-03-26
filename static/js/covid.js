// sticky header================================
window.onscroll = function() {Sticky()};
$(document).ready(function(){
  $(this).scrollTop(0);
});

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function Sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// lock scroll position, but retain settings for later
            var scrollPosition = [
              self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
              self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
            ];
            var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
            html.data('scroll-position', scrollPosition);
            html.data('previous-overflow', html.css('overflow'));
            html.css('overflow', 'hidden');
            window.scrollTo(scrollPosition[0], scrollPosition[1]);

//we'll disable the loader and then disable the scroll lock---------------------------------------------------------remem
// remember to remove the timeout option

              $(window).on("load",function(){
              // //   setTimeout(function(){   , 3000);
              // // });
              $(".loader-wrapper").fadeOut("slow");

                var html = jQuery('html');
              var scrollPosition = html.data('scroll-position');
              html.css('overflow', html.data('previous-overflow'));
              window.scrollTo(scrollPosition[0], scrollPosition[1])
              });

// ==============rightbox carousel======================
var slideIndex = 1;
showSlides(slideIndex);
// state_update()

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("group");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}
// function state_update() {
//   $( "#IN-MP" ).css({"fill": "red", "color": "white"});
//   // create a next text svg inside path
//   //then add text to it
//   $( "#IN-MP" ).text( "12" );
//   console.log($('#IN-MP').html());
// }