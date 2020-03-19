var ctx = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;
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
        maintainAspectRatio: true,
        onHover: function() {
            // on mouse moves do this  
        },
        // aspectRatio: 20,

        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                stacked: true,
                gridLines: {
                  display: false
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
            label: 'Total',
            backgroundColor: 'rgba(255, 183, 0,0.4)   ',
            borderColor: 'white',
            borderWidth: 1,
            pointBackgroundColor:' #9fe0ca',
            pointHitRadius:40,
            // steppedLine:'middle',
            hoverBackgroundColor:'white',
            lineTension:0,
            data: [5, 6, 29, 30, 31, 34, 39,45]

        }]

    },
    options: {}
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
    options: { 
        scales: {
        xAxes: [{
            stacked: true,
            gridLines: {
                display: false
            }
        }]}
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