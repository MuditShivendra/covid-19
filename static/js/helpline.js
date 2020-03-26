// console.log("works");
$("#map").find("path").hover(function(){
    var key = $(this).attr("id");
    console.log(key)
    var data = $("[boo="+key+"]").text();

    $(this).css("fill","#9fe0ca");

$("p#statename").text(data);
    var number = $("[key="+key+"]").text();
$("li#number_mob").text(number);
}, 
function(){
    $(this).css("fill","#0d130f");
    
});