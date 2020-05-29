const go = document.getElementById('go');
const selectButtons = document.querySelectorAll('.selectButton');
const locationText = document.getElementById('location-text')
const defaultCoords = [42.89,-70.812]
const destination = document.getElementById('destination')
//default radius
var selectedRadius = 5
var startLocation = null
var markers = []


// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4eqUHQE9JQ68c57DHkbCrqujG-zFIB-U&callback=initMap';
script.defer = true;
script.async = true;

selectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.firstChild.data);
    selectedRadius = Number(e.target.firstChild.data)
  })
});

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.89, lng: -70.812},
    zoom: 8
  });

  ////
//   google.maps.event.addListener(map, 'click', function(event) {
//     console.log(event.latLng)
//     marker = new google.maps.Marker({position: event.latLng, map: map});

// });


  //// 

  map.addListener('click', function(e){
    locationText.textContent = e.latLng;
    addMarker(e.latLng)
    startLocation = e.latLng
    console.log(String(e.latLng))
  });


  go.addEventListener('click', function(e){
    removeMarkers();
    //each degree of lat is ~69mi
    //each degree of lng is 
    var x = startLocation.lat()
    var y = startLocation.lng()
    //add is 1, subtract is 2
    //var plus_or_minus = Math.floor((Math.random() * 2) + 1)

    //set new x coord
    if (plus_or_minus() == 1){
      x += (random_x() / 60);
    } else {
      x -= (random_x() / 60);
    }

    //set new y coord
    if (plus_or_minus() == 1){
      y += (random_y() / 60);
    } else {
      y -= (random_y() / 60);
    }
    console.log({x, y})
    addMarker({lat:x, lng:y})
    marker = new google.maps.Marker({position:{lat:x, lng:y}, map: map});
    markers.push(marker)
    console.log(x)
    destination.textContent = "Your quest awaits at " + [String(x), String(y)]
  });


  function addMarker(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map:map
    })
    markers.push(marker)
  }


};

// Append the 'script' element to 'head'
document.head.appendChild(script);
function plus_or_minus(){
  return Math.floor((Math.random() * 2) + 1)
}

function random_x(){
  return Math.floor((Math.random() * selectedRadius) + 1)
}

function random_y(){
  return Math.floor((Math.random() * selectedRadius) + 1)
}

function removeMarkers(){
  for(i=0; i < markers.length; i++){
    markers[i].setMap(null);
  }
  markers = [];
}


// const locationText = document.getElementById('location-text')
// const defaultCoordinates = [ -7960511.450303138, 5341189.183472256 ]
// const selectButtons = document.querySelectorAll('.selectButton');
// const go = document.getElementById('go');
// //const map = document.getElementById('js-map')
// var selectedRadius = 5
// window.onload = init, locationText.textContent = locationText.textContent + " " + defaultCoordinates

// //add marker on map on button click, add event listener in init function for button
// function init() {
//   const map = new ol.Map({
//     view: new ol.View({
//       center: [ -7960511.450303138, 5341189.183472256 ],
//       //center: [43, 71],
//       zoom: 9
//       //maxZoom, minZoom, rotation
//     }),
//     layers: [
//       new ol.layer.Tile({
//         source: new ol.source.OSM()
//       })
//     ],
//     target: 'js-map'
//   })

//   map.on('click', function (e){
//     console.log(e.coordinate);
//     locationText.textContent = e.coordinate
//   })

//   //vector layer
//   const point = new ol.layer.VectorImage({
//     source: new ol.source.Vector({
//       url: './data.geojson',
//       format: new ol.format.GeoJSON()
//     }),
//     visible: true,
//     title: 'pointGeoJSON'
//   });

//   map.addLayer(point);
//   map.on('click', function(e) {
//     map.forEachFeatureAtPixel(e.pixel, function(feature, layer) {
//       console.log(feature)
//     })
//   })
// };

// selectButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     console.log(e.target.firstChild.data);
//     selectedRadius = Number(e.target.firstChild.data)
//   })
// });


// go.addEventListener('click', (e) => {
  //init();
//})
// go.addEventListener('click', (e) => {
//   console.log("hail satan");
//   map.addLayer({
//     "type": "FeatureCollection",
//     "features": [
//       {
//         "type": "Feature",
//         "properties": {},
//         "geometry": {
//           "type": "Point",
//           "coordinates": [
//             41.0009765625,
//             48.29781249243716
//           ]
//         }
//       }
//     ]
//   })
// })

