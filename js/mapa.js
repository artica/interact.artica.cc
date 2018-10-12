function initialize() {
		
		var mapProp = {
		center:new google.maps.LatLng(38.660633, -9.203159),
		zoom:16,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		
		mapTypeControl:false,
		scrollwheel:false
		
		
		};
		var map=new google.maps.Map(document.getElementById("map"),mapProp);
	}
		google.maps.event.addDomListener(window, 'load', initialize);