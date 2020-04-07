
if($(window).width() <= 600){
    console.log("don't know");
    var wrapper = $(".searchResult");
    wrapper.insertBefore(".select_state");
    $( "#myInput" ).click(function() {
      $("#myUL").css("display","block");
    });
    $( "#my2Input" ).click(function() {
      $("#my2UL").css("display","block");
    });
    $('#myUL').on('click','li',function() { 
      $("#myUL").css("display","none");   
    });
    $('#my2UL').on('click','li',function() { 
      $("#my2UL").css("display","none");   
    });
}


function findState() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function findDistrict() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("my2Input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("my2UL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

getDistrict();
function getDistrict(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/district-data/',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            console.log(x);

// creating list of states
            var count = 0;
            var states = ["",""];//array of the states
            var districts = ["",""];//array of the districts
    // create list with the name of states in the leftmost dropdown
        //find the total no. of states in the data
        states[count] = x[0].State
        for(var i = 1; i < x.length; i++){

            if(states[count] == x[i-1].State){
                continue;
            }
            else{
                states[count+1] = x[i].State;
                count++;
            }

        }

// adding li elements for the states
        for(var i = 0; i<states.length;i++){

            $("#myUL").append("<li>"+states[i]+"</li>");


        }
//create list of districts
        for(var i = 0; i < x.length; i++){
            districts[i] = x[i].District;
        }
//adding li elements to the districts
        for(var i = 0; i<districts.length;i++){

            $("#my2UL").append("<li>"+districts[i]+"</li>");


        }

// cut down the list of districts
        $("#myUL").on('click','li',function (){
            // console.log("3");
            // $("#myUL").css("display","none");

            $(".searchResult").css("display","block");
            ul = document.getElementById("my2UL");
            li = ul.getElementsByTagName("li");
        //find the districts in the state
        var temp=["",""];
        var beta = 0;
        var cases = 0;
        for(var alpha = 0; alpha<districts.length;alpha++){
            if($(this).text()==x[alpha].State){
                temp[beta] = x[alpha].District;
                beta++;
                li[alpha].style.display = "";
                cases = cases + parseInt(x[alpha].Num_cases_in_district);
            }
            else{
                li[alpha].style.display = "none";
            }
        }
        // console.log(temp);
        //alter the districts list
                //display the text 
            var data = $(this).text();
          $("#resultstatename").text(data);
          $("#totaltotal").text(cases);

          $("#resultdistrictname").text("");
        });

// 
        $("#my2UL").on('click','li',function (){
            
            $(".searchResult").css("display","block");
            for(var alpha = 0; alpha<districts.length;alpha++){
            if($(this).text()==x[alpha].District){

                $("#resultstatename").text(x[alpha].State);
                 $("#totaltotal").text(x[alpha].Num_cases_in_district);
           }
        }
            var data = $(this).text();
           
          $("#resultdistrictname").text(data);
        });

// if state selected then display the state 
//then reduce the list of li elements to to only those that are in the state
//then if district selected then display the state and the district
//if district directly selected then displaty both
//


        }


    });
    return data;
}

$("#myUL").find("li").click(function() {
    console.log("detected");
  var data = this.text();
  $("resultstatename").text(data);
});
$("#my2UL").find("li").click(function() {
  var data = this.text();
  $("resultdistrictname").text(data);
});

