function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.5074, lng: -0.1278},
    zoom: 10,
    minTile: 5
  });
}
