$(document).ready(function() {
  window.initMap = function() {
    var myLatLng = {lat: 45.518781, lng: -122.673653};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

});
