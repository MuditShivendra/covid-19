//update views

postCount();
if($(window).width() <= 600){
  $("#newsyo").css("display","inline-block")

}
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
            // $("#myHeader").css("display","none");

//we'll disable the loader and then disable the scroll lock---------------------------------------------------------remem
// remember to remove the timeout option

              $(window).on("load",function(){
                setTimeout(function(){$(".loader-wrapper").fadeOut("slow");

                var html = jQuery('html');
              var scrollPosition = html.data('scroll-position');
              html.css('overflow', html.data('previous-overflow'));
              window.scrollTo(scrollPosition[0], scrollPosition[1])
              $("#myHeader").css("display","block");}
                 , 6000);


              });
              // $(".loader-wrapper").fadeOut("slow");

              //   var html = jQuery('html');
              // var scrollPosition = html.data('scroll-position');
              // html.css('overflow', html.data('previous-overflow'));
              // window.scrollTo(scrollPosition[0], scrollPosition[1])
              // // });

// ==============rightbox carousel======================
var slideIndex = 1;
// console.log($(location).attr('href'));
if($(location).attr('href')== 'file:///home/mudit/projects/covid-19/index.html'){
showSlides(slideIndex);
            }
if($(location).attr('href')== 'file:///home/mudit/projects/covid-19/templates/news.html'){
showSlides(slideIndex);
            }
if($(location).attr('href')== 'https://muditshivendra.github.io/covid-19/templates/news.html'){
showSlides(slideIndex);
            }
if($(location).attr('href')== 'https://muditshivendra.github.io/covid-19/'){
showSlides(slideIndex);
            }
if($(location).attr('href')== 'http://locaid.in/'){
showSlides(slideIndex);
            }
if($(location).attr('href')== 'http://locaid.in/index.html'){
showSlides(slideIndex);
            }
            if($(location).attr('href')== 'http://locaid.in/templates/news.html'){
showSlides(slideIndex);
            }
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
    // console.log("wprks");
  }
  
  slides[slideIndex-1].style.display = "block";
  // console.log
}
// function state_update() {
//   $( "#IN-MP" ).css({"fill": "red", "color": "white"});
//   // create a next text svg inside path
//   //then add text to it
//   $( "#IN-MP" ).text( "12" );
//   console.log($('#IN-MP').html());
// }

// $("span#viewcount").find("a").attr("href","#");
// $("span#viewcount").find("img").css("height","40px");


// ==========================
getStats();
function getStats(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/state-scrape/state_result/?format=json',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            // console.log(x);
            
            var alpha = 0;

            // =============hover============
            $("#india_map").find("path").hover(function(){
              var key = $(this).attr("id");
              // console.log(key)
              var data = $("[boo="+key+"]").text();
            // console.log(x[1].state_name);
              $(this).css("fill","#9fe0ca");

              // $(".details").css("display","block");
              var beta = 0;
            $("p#statename").text(data);
              var number = $("[key="+key+"]").text();
              for(var i = 0; i < x.length - 1; i++){
                
                if(x[i].state_name == data){
                  alpha = i;
                  beta ++;
                }
              }
            if(beta){
            
              $("#tot").text(x[alpha].india_confirmed_cases);
              $("#cur").text(x[alpha].cured_cases);
              $("#for").text(x[alpha].foreign_confirmed_cases);
              $("#dea").text(x[alpha].deaths_caused);
            }
            else{

              $("#tot").text(0);
              $("#cur").text(0);
              $("#for").text(0);
              $("#dea").text(0);
            }
            }, 
            function(){
              $(this).css("fill","#0D130F");

              // $(".details").css("display","none");
              
            });
            // console.log($(window).width())
            // ===============clicks
            if($(window).width() <= 600 ){
              // $(".svg").css("scale","0.5 0.6 !important")
            $("#india_map").find("path").click(function() {
              //
              var key = $(this).attr("id");
              // console.log(key)
              var data = $("[boo="+key+"]").text();
            // console.log(x[1].state_name);
              $(this).css("fill","#9fe0ca");

              $(".details").css("display","block");
              var beta = 0;
            $("p#statename").text(data);
              var number = $("[key="+key+"]").text();
              for(var i = 0; i < x.length - 1; i++){
                
                if(x[i].state_name == data){
                  alpha = i;
                  beta ++;
                }
              }
            if(beta){
            
              $("#tot").text(x[alpha].india_confirmed_cases);
              $("#cur").text(x[alpha].cured_cases);
              $("#for").text(x[alpha].foreign_confirmed_cases);
              $("#dea").text(x[alpha].deaths_caused);
            }
            else{

              $("#tot").text(0);
              $("#cur").text(0);
              $("#for").text(0);
              $("#dea").text(0);
            } 
              // 

              setTimeout(function(){

              $("#"+key).css("fill","#0d130f");
              $(".details").css("display","none");
              },2000);
            });
          }


        } 
   });
    return data;
}



getViews();

function getViews(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/hits',
        data: {},
        success: function(data) {
          var obj = JSON.parse;
            var x = data;
            // console.log(x);
            $("#viewcount").text(x[0].visits);
            // console.log(x[0].visits);
            
        }


    });
    return data;
}

function postCount(){   
  var data = $.ajax( {
      type: 'GET',
        url: 'https://vp7.pythonanywhere.com/hitcount/1',
      data: {},
      success: function(data) {
        //  console.log("views updated bruh");                   
      }
      
  });
  return data;
}