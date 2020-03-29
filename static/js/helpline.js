if($(window).width() <= 600 ){
    $(".leftdownbox").css("width","100vw")
    $(".infobox").css("top","70vh")
}

// console.log("works");
$("#map").find("path").hover(function(){
    var key = $(this).attr("id");
    // console.log(key)
    var data = $("[boo="+key+"]").text();

    $(this).css("fill","#9fe0ca");

$("p#statename").text(data);
    var number = $("[key="+key+"]").text();
$("li#number_mob").text(number);
$(".infobox").css("display","flex");


}, 
function(){
    $(this).css("fill","#0d130f");
    $(".infobox").css("display","none");

    
});

// ===============clicks
if($(window).width() <= 600 ){
    $("#map").find("path").click(function() {
      //
      var key = $(this).attr("id");
      // console.log(key)
      var data = $("[boo="+key+"]").text();
  
      $(this).css("fill","#9fe0ca");
  
  $("p#statename").text(data);
      var number = $("[key="+key+"]").text();
  $("li#number_mob").text(number);
  $(".infobox").css("display","flex");
  
      // 

      setTimeout(function(){

        $("#"+key).css("fill","#0d130f");
            $(".infobox").css("display","none");


      },1000);
    });
}