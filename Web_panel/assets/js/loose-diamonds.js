function myFunction() {
    var x = document.getElementsByClassName("myDIV");
    if (x.style.display === "none") {
      x.style.display = "initial";
    } else {
      x.style.display = "none";
    }
  }
//-----JS for Price Range slider-----

$(function() {
	$( ".slider-range" ).slider({
	  range: true,
	  min: 130,
	  max: 500,
	  values: [ 130, 250 ],
	  slide: function( event, ui ) {
		$( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
	  " - $" + $( ".slider-range" ).slider( "values", 1 ) );
});