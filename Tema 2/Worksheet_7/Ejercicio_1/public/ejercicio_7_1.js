// Leaflet API

// let options = {enableHighAccuracy: true};

// navigator.geolocation.getCurrentPosition(obtienePosicion,null,options);

// function obtienePosicion(pos) {
//   latitud = pos.coords.latitude;
//   longitud = pos.coords.longitude;

//   var map = L.map('map').setView([latitud, longitud], 15);
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);

//   var marker = L.marker([latitud, longitud]).addTo(map);
// }


// ---------------------------------------------------------------------------------------------

// Here maps API


let options = {enableHighAccuracy: true}


navigator.geolocation.getCurrentPosition(obtienePosicion,null,options);


function obtienePosicion(pos) {
  latitud = pos.coords.latitude;
  longitud = pos.coords.longitude;

  var platform = new H.service.Platform({
    'apikey': 'j57D9w1DTBSR2lFTaU0ahSQ1QF9C2j-OrzgfCimauGA'
  });
  
  var defaultLayers = platform.createDefaultLayers();
  
    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.vector.normal.map,
      {
        zoom: 15,
        center: { lat: latitud, lng: longitud }
      }
    );

  // Obtain the default map types from the platform object:

  var ui = H.ui.UI.createDefault(map, defaultLayers);

  var svgMarkup =
    '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">P</text></svg>';

  // Create an icon, an object holding the latitude and longitude, and a marker:
  var icon = new H.map.Icon(svgMarkup),
    coords = { lat: latitud, lng: longitud },
    marker = new H.map.Marker(coords, { icon: icon });

  // Add the marker to the map and center the map at the location of the marker:
  map.addObject(marker);
  map.setCenter(coords);

// Get an instance of the search service:
var service = platform.getSearchService();

// Call the reverse geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
service.reverseGeocode({
  at: `${latitud},${longitud},150`
}, (result) => {
  result.items.forEach((item) => {
    // Assumption: ui is instantiated
    // Create an InfoBubble at the returned location with
    // the address as its contents:
    console.log(item.address.label);
  });
}, alert);
}



// ---------------------------------------------------------------------------------------------


// getCurrentPosition Normal


// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(obtienePosicion, positionError);
//   } else {
//     document.write("La geolocalización no está disponible para su navegador");
//   }
// }

// getLocation();

// function showPosition(position) {
//   document.write("Latitud: " + position.coords.latitude + "</br>");
//   document.write("Longitud : " + position.coords.longitude) + "</br>";
// }

// function positionError(error) {
//   document.write("Ha habido un problema con la posición: " + "</br>");
//   document.write("ERROR " + error.code + " --> " + error.message) + "</br>";
// }

// ---------------------------------------------------------------------------------------------

// V2 con watchPosition

// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(showPosition, positionError);
//     } else {
//       document.write("La geolocalización no está disponible para su navegador");
//     }
//   }

//   function showPosition(position){
//     document.write("Latitud: " + position.coords.latitude + "</br>");
//     document.write("Longitud : " + position.coords.longitude) + "</br>";
//     document.write("</br>--------------------------- </br>");
//   }

//   function positionError(error) {
//     document.write("Ha habido un problema con la posición: " + "</br>");
//     document.write("ERROR " + error.code + " --> " + error.message);
//   }

//   getLocation();


// ---------------------------------------------------------------------------------------------

// Obtener distancia entre dos coordenadas

// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1);
//   var a =
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ;
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   var d = R * c; // Distance in km
//   return d;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI/180)
// }
