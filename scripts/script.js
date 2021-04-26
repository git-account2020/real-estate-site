
//Outline of map
var mymap = L.map('mapid').setView([35.759575, -79.019302], 8);

//Add tile ie: visual map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94YWNjdDE5NDEiLCJhIjoiY2tueHB5MXF4MHRyZzJ3b3k1eXFyOGlrciJ9.qln4PxFXBFqof5kCXXoiFA'
}).addTo(mymap);


//Add a marker
var marker = L.marker([35.699600, -78.662849]).addTo(mymap);
var marker2 = L.marker([35.186900915557096, -80.7929201458996]).addTo(mymap);
var marker3 = L.marker([35.12273250423745, -80.8181577747685]).addTo(mymap);

//Add popup to marker
marker.bindPopup("<b> </b><br>Raleigh NC").openPopup();
marker.bindPopup("<b> </b><br>Charlotte NC").openPopup();