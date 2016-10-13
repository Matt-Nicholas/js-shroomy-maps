var googleKey = require('./../.env').googleKey;

function MushroomSpot(date, lat, long, type){
  this.date = date;
  this.latitude = lat;
  this.longitude = long;
  this.type = type;
  this.elevation = "";
}

MushroomSpot.prototype.getElevation = function(updateInfoWindow ){

  var temp = this;
  $.get('https://maps.googleapis.com/maps/api/elevation/json?locations=' + this.latitude + ',' + this.longitude + '&key=' + googleKey).then(function(response) {
    temp.elevation = response.results[0].elevation;
    updateInfoWindow(response.results[0].elevation);
  });
}
exports.shroomSpotModule = MushroomSpot;
