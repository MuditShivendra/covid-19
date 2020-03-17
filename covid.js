// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("group");
//   console.log(slides);
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}

//   for (i = 0; i < (slides.length); i++) {
//       slides[i].style.display = "none";
//   }
//   for(var j = 0; j < 4 ; j++) {
//       var index = slideIndex;
//     if(index+j > slides.length){
//         index = index - slides.length
//     }
//     console.log("index = " + (index + j))
//     slides[index+j-1].style.display = "block";     
// }
// //   slides[slideIndex-1].style.display = "block";
//   console.log("slideindex = " + slideIndex);
// }
var slideIndex = 1;
showSlides(slideIndex);

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