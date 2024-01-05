if (jQuery("#summary-chart-01").length) {
  var options = {
    series: [{
    name: 'series1',
    data: [30, 90, 30, 90, 30, 90,  30]
  }, {
    name: 'series2',
    data: [90, 30, 90, 30, 90,  30,90]
  }],
     colors: ['#f56692','#545496'],
    chart: {
    height: 238,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'top',
    show:false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: [' #f566924d','#5454964d'],
      shade: 'dark',
      type: "vertical",
      shadeIntensity: 0.2,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: .04,
      stops: [0, 50, 100],
      colorStops: []
    }
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
   
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    labels: {
       
      minWidth: 20,
      maxWidth: 20,
    }
  },
  yaxis: {
    labels: {
      offsetY: 0,
      minWidth: 22,
      maxWidth: 22,
      formatter: function (val, index) {
        return '$' + val;
      }

    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#summary-chart-01"), options);
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
  
  if (jQuery("#customer-chart-02").length) {
    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      colors: ['#f56692'],
      chart: {
        type: 'bar',
        height: 238,
        toolbar: {
            show: false
          }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
          borderRadius: 3,
          
        },
      },
      dataLabels: {
        enabled: false
      },
     
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
       
          minWidth: 20,
          maxWidth: 20,
        }
      
      },
      yaxis: {
        labels: {
          offsetY: 0,
          minWidth: 20,
          maxWidth: 20,
          formatter: function (val, index) {
            return '$' + val;
          }

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
    var chart = new ApexCharts(document.querySelector("#customer-chart-02"), options);
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

  if (jQuery('#user-chart-03').length) {
    
    var options = {
      series: [44,55,15],
      chart: {
      height:288,
      type: 'donut',
    },
   
    labels: ["New user"," user", "other"],
    colors: ['#F56692', '#04237D', '#f1ddf2'],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut:{
          labels:{
            show:true,
            total:{
              show:true
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    grid:{
      padding: {
       
        bottom: 0,
    }
    },
    legend: {
      position: 'bottom',
      offsetY: 8,
      show:true,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height:268
        }
      }
    }]
    };

    var chart = new ApexCharts(document.querySelector("#user-chart-03"), options);
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







