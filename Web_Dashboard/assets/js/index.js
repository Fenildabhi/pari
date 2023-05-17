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
  colors:['#F44336'],
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
  colors:['#E91E63'],
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
  colors:['#9C27B0'],
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
// ---------------------
function addTextInput() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("name", "textInput");
  document.getElementById("myForm").appendChild(x)
}
// $('.transection_payment_type').select2({
//   selectOnClose: true
// });
$(document).ready(function() {
  $('.transection_payment_type').select2();
});

var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
	fileInput.value = '';
	console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
	console.log(" > " + fileInput.value)
	uploadIcon.innerHTML = 'check_circle';
	dragDropText.innerHTML = 'File Dropped Successfully!';
	document.querySelector(".label").innerHTML = `<span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> </span></span>`;
	uploadButton.innerHTML = `Upload`;
	fileName.innerHTML = fileInput.files[0].name;
	fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
	uploadedFile.style.cssText = "display: flex;";
	progressBar.style.width = 0;
	fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
	let isFileUploaded = fileInput.value;
	if(isFileUploaded != '') {
		if (fileFlag == 0) {
    		fileFlag = 1;
    		var width = 0;
    		var id = setInterval(frame, 50);
    		function frame() {
      			if (width >= 390) {
        			clearInterval(id);
					uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
      			} else {
        			width += 5;
        			progressBar.style.width = width + "px";
      			}
    		}
  		}
	} else {
		cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
	}
});

cancelAlertButton.addEventListener("click", () => {
	cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
	["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
		})
	);

	["dragover", "dragenter"].forEach( evt => {
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
			uploadIcon.innerHTML = 'file_download';
			dragDropText.innerHTML = 'Drop your file here!';
		});
	});

	draggableFileArea.addEventListener("drop", e => {
		uploadIcon.innerHTML = 'check_circle';
		dragDropText.innerHTML = 'File Dropped Successfully!';
		document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
		uploadButton.innerHTML = `Upload`;
		
		let files = e.dataTransfer.files;
		fileInput.files = files;
		console.log(files[0].name + " " + files[0].size);
		console.log(document.querySelector(".default-file-input").value);
		fileName.innerHTML = files[0].name;
		fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
		uploadedFile.style.cssText = "display: flex;";
		progressBar.style.width = 0;
		fileFlag = 0;
	});
}

removeFileButton.addEventListener("click", () => {
	uploadedFile.style.cssText = "display: none;";
	fileInput.value = '';
	uploadIcon.innerHTML = 'file_upload';
	dragDropText.innerHTML = 'Drag & drop any file here';
	document.querySelector(".label").innerHTML = `<span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text"></span> <span></span> </span>`;
	uploadButton.innerHTML = `Upload`;
});