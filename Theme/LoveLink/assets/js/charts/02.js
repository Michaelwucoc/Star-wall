if (jQuery("#sales-chart-01").length) {
  var options = {
    series: [
    {
      data: [
        {
          x: 'Planning',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Analysis',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Release',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
  colors: ["#F9756A"],
    chart: {
    height: 270,
    type: 'rangeBar',
    zoom: {
      enabled: false
   }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  grid: {
borderColor: '#212321'
  
  },
  xaxis: {
    type: 'datetime',
    labels: {
      minHeight: 20,
      maxHeight: 20,
    }
  },
  };

  var chart = new ApexCharts(document.querySelector("#sales-chart-01"), options);
  chart.render();

   const body = document.querySelector('body')
   if (body.classList.contains('dark')) {
     apexChartUpdate(chart, {
       dark: true
     })
   }
 
   document.addEventListener('ChangeColorMode', function (e) {
     apexChartUpdate(chart, e.detail)
   })
 };




 if (jQuery("#yearly-chart-03").length) {
    const options = {
       series: [{
         name: 'Annual Sales',
         data: [60, 40, 90, 70, 50, 60, 60,88,90]
       }, {
         name: 'Annual Revenue',
         data: [40, 55, 80, 60, 70, 80, 30,56,55]
       }],
       colors: ["#F56692", "#ff6b6b"],
       chart: {
         height: 275,
         type: 'line',
         zoom: {
           enabled: false
         },
         sparkline: {
           enabled: false,
         }
       },
       dataLabels: {
         enabled: false
       },
       stroke: {
         curve: 'smooth',
         width: 3
       },
       title: {
         text: '',
         align: 'left'
       },
      
       grid: {
         row: {
           colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
           opacity: 0
         },
       },
       xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep'],
         labels: {
              
              minHeight: 22,
              maxHeight: 22,
          }
       },
       yaxis: {
         labels: {
             offsetY: 0,
             minWidth: 22,
             maxWidth: 22,
 
             formatter: function(val, index) {
               return '$'+ val ;
             }
 
 
 
           }
        },
        legend: {
         position: 'top',
         horizontalAlign: 'left',
         offsetX: -33
       }
     };
     const chart = new ApexCharts(document.querySelector("#yearly-chart-03"), options);
     chart.render();
     const body = document.querySelector('body')
     if (body.classList.contains('dark')) {
       apexChartUpdate(chart, {
         dark: true
       })
     }
   
     document.addEventListener('ChangeColorMode', function (e) {
       apexChartUpdate(chart, e.detail)
     })
   };


   if (jQuery("#visited-chart-05").length) {
    const options = {
       series: [{
          name: 'Social',
          data: [53, 55, 45, 40, 40, 28, 35, 25, 20, 12, 25, 24,20,13,8]
       }, {
          name: 'Referral',
          data: [63, 62, 52, 72, 55, 80, 70, 50, 60, 40, 50, 41,38, 32, 18]
       }, {
          name: 'Feed',
          data: [150, 135, 144, 115, 120, 114, 133, 124, 100, 94, 96, 90, 82, 76, 86]
       }],
       colors: ['#F9756A', '#F56692', '#545496' ],
       chart: {
          type: 'bar',
          height: 305,
          stacked: true,
          zoom: {
             enabled: false
          }
       },
       responsive: [{
          breakpoint: 480,
          options: {
             legend: {
                position: 'bottom',
                offsetX: 10,
                offsetY: 0
             }
          }
       }],
       plotOptions: {
          bar: {
             horizontal: false,
             columnWidth: '45%',
             borderRadius: 3
          },
       },
       xaxis: {
          show:false,
          labels:{
            show:false
          }
       },
       yaxis: {
          show:false
       },
       legend: {
        offsetY: 8,
        markers: {
         radius: 12
        },
          position: 'bottom',
       },
       fill: {
          opacity: 1
       },
       dataLabels: {
          enabled: false
       }
    };
    const chart = new ApexCharts(document.querySelector("#visited-chart-05"), options);
    chart.render();
   const body = document.querySelector('body')
   if (body.classList.contains('dark')) {
     apexChartUpdate(chart, {
       dark: true
     })
   }

   document.addEventListener('ChangeColorMode', function (e) {
     apexChartUpdate(chart, e.detail)
   })
 };


 if (jQuery("#order-chart-02").length) {
    const options = {
      series: [ {
        name: 'Sold',
        data: [10, 25, 30, 70, 35, 30, 25,45,66,76,80,23]
      }, {
        name: 'UnSold',
        data: [30, 44, 20, 35, 29, 32, 30,23,33,44,22,34]
      }, {
        name: 'Pending',
        data: [50, 25, 40, 15, 40, 20, 50,20,34,20,38,40]
      }],
      colors: ['#F56692', '#04237D', '#F9756A'],
      chart: {
        type: 'bar',
        height: 270,
        stacked: true,
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'top',
            offsetX: -20,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          borderRadius: 3
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
        labels: {
              
          minHeight: 20,
          maxHeight: 20,
      }
        

      },

      yaxis: {
        show: false
      },


      legend: {
        markers: {
        
          radius: 12
        
        
        },
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -33,
      
  
      },
      fill: {
        opacity: 1
      },
    




      dataLabels: {
        enabled: false
      }    


    };
    const chart = new ApexCharts(document.querySelector("#order-chart-02"), options);
    chart.render();
    const body = document.querySelector('body')
    if (body.classList.contains('dark')) {
      apexChartUpdate(chart, {
        dark: true
      })
    }
  
    document.addEventListener('ChangeColorMode', function (e) {
      apexChartUpdate(chart, e.detail)
    })
  };

  if (jQuery("#like-chart-05").length) {
    var options = {
        series: [44,55,15,10],
        chart: {
        
         height:300,
        type: 'donut',
      },
      labels: ["United States", "Australia", "France", "Other"],
      colors: ['#F56692', '#04237D', '#F9756A','#697A21'],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      
      legend: {
        position: 'top',
      },
      grid:{
        padding: {
          top: 30
      }
      },
     
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height:300
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector("#like-chart-05"), options);
      chart.render();

  const body = document.querySelector('body')
  if (body.classList.contains('dark')) {
    apexChartUpdate(chart, {
      dark: true
    })
  }

  document.addEventListener('ChangeColorMode', function (e) {
    apexChartUpdate(chart, e.detail)
  })
};




if (jQuery("#revenue-chart-06").length) {
  var options = {
    series: [{
    name: 'Net Profit',
    data: [30, 99, 70, 50, 99, 101]
  }],
   colors: ['#F9756A'],
    chart: {
    type: 'bar',
    height: 305
  },
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: '30%',
      barHeight: '30%',
      borderRadius: 3     
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: {
      minHeight: 20,
      maxHeight: 20,
  }
  
  },
  yaxis: {
    title: {
     
    }
  },
  fill: {
    opacity: 1
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#revenue-chart-06"), options);
  chart.render();

const body = document.querySelector('body')
if (body.classList.contains('dark')) {
  apexChartUpdate(chart, {
    dark: true
  })
}

document.addEventListener('ChangeColorMode', function (e) {
  apexChartUpdate(chart, e.detail)
})
};