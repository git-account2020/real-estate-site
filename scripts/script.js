function initMap(){
  var location = {lat: -35.223789, lng: 80.841141};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, 
    center: location
  });
}