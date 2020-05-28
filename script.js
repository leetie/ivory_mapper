const locationText = document.getElementById('location-text')
const defaultCoordinates = [ -7960511.450303138, 5341189.183472256 ]
const selectButtons = document.querySelectorAll('.selectButton');
const go = document.getElementById('go');
//const map = document.getElementById('js-map')
var selectedRadius = 5
window.onload = init, locationText.textContent = locationText.textContent + " " + defaultCoordinates

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [ -7960511.450303138, 5341189.183472256 ],
      //center: [43, 71],
      zoom: 9
      //maxZoom, minZoom, rotation
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map'
  })

  map.on('click', function (e){
    console.log(e.coordinate);
    locationText.textContent = e.coordinate
  })

  //vector layer
  const point = new ol.layer.VectorImage({
    source: new ol.source.Vector({
      url: './data.geojson',
      format: new ol.format.GeoJSON()
    }),
    visible: true,
    title: 'pointGeoJSON'
  });

  map.addLayer(point);
};

selectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.firstChild.data);
    selectedRadius = Number(e.target.firstChild.data)
  })
});


go.addEventListener('click', (e) => {
  //init();
})
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

