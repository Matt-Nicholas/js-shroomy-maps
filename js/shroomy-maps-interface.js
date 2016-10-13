var MushroomSpot = require('./../js/shroomy-maps.js').shroomSpotModule;





function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(45.564806, -122.764583);
  var mapOptions = {
    center: myCenter,
    zoom: 10,
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
     mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
    animation:google.maps.Animation.BOUNCE,
    icon:'images/porcini.png'
  });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "Hello World!"
  });

  google.maps.event.addListener(marker,'click',function() {
    infowindow.open(map,marker);
  });

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(map, event.latLng);
  });

  return map;
}

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation:google.maps.Animation.BOUNCE,
    icon:'images/porcini.png'
  });
}

  function addShroomSpot(shroomSpot, map) {

    var shroomPoint  = 'images/button.png';;
    switch (shroomSpot.type){
      case "chanterelles":
        shroomPoint = 'images/chanterelle.png';
        break;
      case "morels":
        shroomPoint = 'images/morel.png';
        break;
      case "lobsters":
        shroomPoint = 'images/lobster.png';
        break;
      case "boletes":
        shroomPoint = 'images/porcini.png';
        break;
      case "chickens":
        shroomPoint = 'images/chicken.png';
        break;
      case "oysters":
        shroomPoint = 'images/oyster.png';
        break;
      case "amanitas":
        shroomPoint = 'images/amanita.png';
        break;
      case "libertycaps":
        shroomPoint = 'images/straw.png';
        break;
      case "sparassis":
        shroomPoint = 'images/cauliflower.png';
        break;
    }

    var shroomLocation = new google.maps.LatLng(shroomSpot.latitude, shroomSpot.longitude);

    var marker = new google.maps.Marker({
      position: shroomLocation,
      animation:google.maps.Animation.BOUNCE,
        icon:shroomPoint
      });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
      content: ""
    });

    google.maps.event.addListener(marker,'click',function() {
      infowindow.open(map,marker);
    });

    function updateInfoWindow(elevation){
      //shroomSpot.elevation =  elevation;
      infowindow.setContent("Date: " + shroomSpot.date + "<br>Elevation: " + shroomSpot.elevation);
    }

    shroomSpot.getElevation(updateInfoWindow);

  }

$(document).ready(function() {
   var map = myMap();
   $('#addLocation').submit(function(event){
     event.preventDefault();
     var date = $('#shroom-date').val();
     var lat = $('#shroom-lat').val();
     var long = $('#shroom-long').val();
     var type = $('#shroom-type').val();
     var shroomSpot = new MushroomSpot(date, lat, long, type);
     addShroomSpot(shroomSpot, map);
   });
});
