


var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = 'white';
// Chart.defaults.global.gridLines.Color = 'white';
Chart.defaults.global.defaultFontSize = 17;
Chart.defaults.global.defaultFontFamily = "'Merriweather', serif";
Chart.defaults.global.animation.duration = 2000;

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['02 Mar 2020', '03 March 2020', '04 Mar 2020', '05 Mar 2020', '06 Mar 2020', '07 Mar 2020','08 Mar 2020','09 Mar 2020'],
        datasets: [{
            label: 'Hospitalised',
            backgroundColor: '#ffb700   ',
            borderColor: 'white',
            hoverBackgroundColor: ' #9fe0ca',
            // hoverBorderWidth: 20,
            // borderColor: 'white',
            borderWidth: 1,
            data: [1, 0, 16, 0, 1, 2, 5,1, 0, 16, 0, 1, 2, 5]

        },
        {
            label: 'Recovered',
            backgroundColor: '#66cdaa   ',
            borderColor: 'white',
            borderWidth: 1,
            data: [1, 1, 7, 1, 0, 1, 0]

        },
        {
            label: 'Intensive Care',
            backgroundColor: '#dc143c',
            borderColor: 'white',
            borderWidth: 1,
            data: [0, 0, 0, 0, 0, 0, 0]
        }]
    },

    // Configuration options go here
    options: {
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

var ltx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ltx, {
    type: 'line',
    data: {
        labels: ['02 Mar 2020', '03 March 2020', '04 Mar 2020', '05 Mar 2020', '06 Mar 2020', '07 Mar 2020','08 Mar 2020','09 Mar 2020'],
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
            data: [5, 6, 29, 30, 31, 34, 39,45]

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


var htx = document.getElementById('myHoriChart').getContext('2d');
var myLineChart = new Chart(htx, {
    type: 'horizontalBar',
    data: {
        labels: ['Andhra Pradesh', 'Delhi', 'Haryana', 'J&K', 'Karnataka', 'Kerala','Ladakh','Maharashtra','Odisha','Puducherry','Punjab','Rajasthan','Tamil Nadu','Telangana','Uttar Pradesh','Uttrakhand','West Bengal'],
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
            data: [1,10,16,3,13,27,8,42,1,1,1,4,2,5,16,1,1]

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

$("#india_map").find("path").hover(function(){
    $(this).css("fill","#9fe0ca");
}, function(){
    $(this).css("fill","white");
    
});

// $("#IN-JK").hover(function(){
//     $(this).css("fill","red");
// }, function(){
//     $(this).css("fill","white");
// });
// var ptx = document.getElementById('myPieChart').getContext('2d');

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Confirmed", "Recovered", "Dead"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#ffb700", "lightblue","orange"],
        data: [300,100,020]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Current Situation in India'
      }
    }
});
