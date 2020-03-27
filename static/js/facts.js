var slideIndex= 1;
var slideIndex1=1;
var slideIndex2=1;
var slideIndex3=1;
var slideIndex4=1;
showSlides(slideIndex);
showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlides4(slideIndex4);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }
  function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
  }
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
//   console.log(slideIndex3);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
//   console.log(slideIndex4);
}

// =====================triple the content above
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlideshow");
  var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}
function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideshow1");
    var dots = document.getElementsByClassName("demo1");
    // var captionText = document.getElementById("caption1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active";
    // captionText.innerHTML = dots[slideIndex1-1].alt;
  }
  function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideshow2");
    var dots = document.getElementsByClassName("demo2");
    // var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active1";
    // captionText.innerHTML = dots[slideIndex2-1].alt;
  }
  function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideshow3");
    var dots = document.getElementsByClassName("demo3");
    // var captionText = document.getElementById("caption3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active1";
    // captionText.innerHTML = dots[slideIndex3-1].alt;
  }
  function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlideshow4");
    var dots = document.getElementsByClassName("demo4");
    // var captionText = document.getElementById("caption4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " active1";
    // captionText.innerHTML = dots[slideIndex4-1].alt;
  }