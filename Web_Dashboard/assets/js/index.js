$(".tab_sidebar_main").hover(
    function () {
        $(".main_outer_wrapper").addClass("tab_sidebar_main_active");
    },
    function () {
        $(".main_outer_wrapper").removeClass("tab_sidebar_main_active");
    }
);
$(".sidebar_collapse_button").hover(
    function () {
        $(".main_outer_wrapper").removeClass("tab_sidebar_main_active");
    }
);


$(".view_all_field_button").on("click", function () {
    $(this).toggleClass("collapse_icon");
    $(".project_additional_details_block_list_left li.view_all_filed").toggleClass("hide");
});

$(".contact_details_button").on("click", function () {
    $(".contact_details_block").addClass("contact_details_block_active");
});
$(".contact_details_close_button").on("click", function () {
    $(".contact_details_block").removeClass("contact_details_block_active");
});


// ---------------------------

var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }],
    chart: {
    type: 'bar',
    height: 250,
    toolbar: {
        show: false
      },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
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
    categories: ['Jun', 'Jul', 'Aug', 'yesterday', 'Today'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  
grid: {
    strokeDashArray: 5,
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

  var chart = new ApexCharts(document.querySelector("#Order_chart"), options);
  chart.render();

//   -----------------------


var options = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61]
  }],
    chart: {
    type: 'bar',
    height: 250,
    toolbar: {
        show: false
      },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
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
    categories: ['Jun', 'Jul', 'Aug', 'yesterday', 'Today'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  
grid: {
    strokeDashArray: 5,
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

  var chart = new ApexCharts(document.querySelector("#Order_payment"), options);
  chart.render();

//   -----------------


var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
    height: 264
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'top'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#Balance"), options);
  chart.render();

  // -----------------------------------------
  
var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61]
}],
  chart: {
  type: 'bar',
  height: 250,
  toolbar: {
      show: false
    },
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
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
  categories: ['Jun', 'Jul', 'Aug', 'yesterday', 'Today'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},

grid: {
  strokeDashArray: 5,
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

var chart = new ApexCharts(document.querySelector("#cancle_Order"), options);
chart.render();
// ------------------------------------
var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61]
}],
  chart: {
  type: 'bar',
  height: 250,
  toolbar: {
      show: false
    },
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
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
  categories: ['Jun', 'Jul', 'Aug', 'yesterday', 'Today'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},

grid: {
  strokeDashArray: 5,
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

var chart = new ApexCharts(document.querySelector("#Order_retun"), options);
chart.render();