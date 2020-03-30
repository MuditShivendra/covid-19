Chart.defaults.global.defaultFontColor = 'white';
// Chart.defaults.global.gridLines.Color = 'white';
// Chart.defaults.global.defaultFontSize =18;
// Chart.defaults.global.defaultFontFamily = "'Baloo Thambi 2', cursive;";
Chart.defaults.global.animation.duration = 2000;


getRefresh();

function getRefresh(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/news-scrape',
        data: {},
        success: function(data) {
            // console.log("refreshed data")
        }


    });
    return data;
}




getStateInfo();

function getStateInfo(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/state-scrape/state_result/?format=json',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data[26];
            // console.log(x);
            // ===================filling in the stats================================
            $("span#confirmed").text(x.india_confirmed_cases);
            $("span#recovered").text(x.cured_cases);
            $("span#dead").text(x.deaths_caused);
            
            // ==========================chart goes here======================================
            new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                  labels: ["Confirmed", "Recovered", "Dead"],
                  datasets: [{
                    label: "Population (millions)",
                    backgroundColor: ["darkgoldenrod", "lightblue","red"],
                    data: [x.india_confirmed_cases,x.cured_cases,x.deaths_caused]
                  }]
                },
                options: {
                  title: {
                    display: true,
                    text: 'Current Situation in India'
                  },
                  maintainAspectRatio: false,
                }
            });
            // ====================================================================================

        }


    });
    return data;
}


getNumberState();
function getNumberState(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/combo-mode/?format=json',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            // console.log(x);
            var arr = ["",""];
            for(var i = 0 ; i < x[0].length - 2; i++){
                arr[i] = x[0][i].state_name;
            }
            // console.log(arr);
            var brr = ["",""];
            for(var i = 0 ; i < x[0].length - 2; i++){
                brr[i] = x[1][i].india_confirmed_cases;
            }
            console.log(brr);
         
            //=====================chat added here=======================


            var htx = document.getElementById('myHoriChart').getContext('2d');
            var myLineChart = new Chart(htx, {
                type: 'horizontalBar',
                data: {
                    labels: arr,
                    datasets: [{
                        label: 'Total',
                        backgroundColor: 'rgba(255, 183, 0,1)   ',
                        borderColor: 'white',
                        borderWidth: 1,
                        pointBackgroundColor:' #9fe0ca',
                        pointHitRadius:40,
                        // steppedLine:'middle',
                        hoverBackgroundColor:'white',
                        lineTension:0,
                        data: brr

                    }]

                },
                options: {title: {
                    display: true,
                    text: 'State Wise cases reported'
                },
                    maintainAspectRatio: false, 
                    scales: {
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                        display: false,
                        lineWidth: 0.5,
                        color: 'white'
                        }
                    }]
                    }
                }
            });


            // ===========================================================
         


        }


    });
    return data;
}

getTimeData();

function getTimeData(){
    var data = $.ajax( {
        type: 'GET',     
        url: 'https://vp7.pythonanywhere.com/national-data/?format=json',
        data: {},
        success: function(data) {
            var obj = JSON.parse;
            var x = data;
            // console.log(x);

            var arr = ["",""];
            for(var i = 0 ; i < x.length; i++){
                arr[i] = x[i].date;
            }
            
            var brr = ["",""];
            for(var i = 0 ; i < x.length; i++){
                brr[i] = x[i].number_of_cases;
            }

            var crr = ["",""];
            for(var i = 1 ; i < x.length; i++){
                crr[i] = brr[i]-brr[i-1];
            }
            var drr = ["",""];
            for(var i = 0 ; i < x.length; i++){
                drr[i] = x[i].total_cured;
            }

            var err = ["",""];
            for(var i = 1 ; i < x.length; i++){
                err[i] = drr[i]-drr[i-1];
            }
            var frr = ["",""];
            for(var i = 0 ; i < x.length; i++){
                frr[i] = x[i].total_deaths;
            }

            var grr = ["",""];
            for(var i = 1 ; i < x.length; i++){
                grr[i] = frr[i]-frr[i-1];
            }
            // console.log(crr);
            // console.log(err);
            // console.log(grr);
            // ============bar graph comes here==================

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'bar',

                // The data for our dataset
                data: {
                    labels: arr,
                    datasets: [{
                        label: 'New Cases',
                        backgroundColor: '#ffb700   ',
                        borderColor: 'white',
                        hoverBackgroundColor: ' #ff8400',
                        // hoverBorderWidth: 20,
                        // borderColor: 'white',
                        borderWidth: 1,
                        data: crr

                    },
                    {
                        label: 'Recovered',
                        backgroundColor: '#66cdaa   ',
                        hoverBackgroundColor: ' #6689aa',
                        borderColor: 'white',
                        borderWidth: 1,
                        data: err

                    },
                    {
                        label: 'Dead',
                        backgroundColor: 'red',
                        hoverBackgroundColor: ' #db9999',
                        borderColor: 'white',
                        borderWidth: 1,
                        data: grr
                    }]
                },

                // Configuration options go here
                options: {
                    
                    title: {
                        display: true,
                        text: 'Day Wise Update'
                    },
                    responsive:true,
                    responsiveAnimationDuration: 2000,
                    maintainAspectRatio: false,
                    onHover: function() {
                        // on mouse moves do this  
                    },
                    // aspectRatio: 20,

                    scales: {
                        
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false,
                                // color: 'rgba(0, 100, 0, 0.1)'
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            gridLines: {
                            display: false,
                            //   color: 'white'
                            }
                        }]
                    }
                }
                
            });

            // ==============line graph comes here===========

            var ltx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
        labels: arr,
        datasets: [{
            label: 'Total Cases',
            backgroundColor: 'rgba(255, 183, 0,0)   ',
            borderColor: 'white',
            borderWidth: 2,
            pointRadius:7,
            pointBackgroundColor:' #9fe0ca',
            pointHitRadius:40,
            // steppedLine:'middle',
            hoverBackgroundColor:'white',
            lineTension:0,
            data: brr

        }]

    },
    options: {
        legend:{
            display: false
        },
        title: {
        display: true,
        text: 'Corona Virus Spread trend'
      },
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                    lineWidth: 0.5,
                    // zeroLineWidth: 5,
                    color: 'white'
                }
            }],
            yAxes: [{
                gridLines: {
                  display: false,
                  lineWidth: 0.5,
                  color: 'white'
                }
              }]
        }}
});



            // ===============================
        }


    });
    return data;
}






$("#india_map").find("path").hover(function(){
    $(this).css("fill","#9fe0ca");
}, function(){
    $(this).css("fill","#0D130F");
    
});

// $("#IN-JK").hover(function(){
//     $(this).css("fill","red");
// }, function(){
//     $(this).css("fill","white");
// });
// var ptx = document.getElementById('myPieChart').getContext('2d');

