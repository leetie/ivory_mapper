const locationText = document.getElementById('location-text')
const defaultCoordinates = [ -7960511.450303138, 5341189.183472256 ]
const selectButtons = document.querySelectorAll('.selectButton');
var selectedRadius = 5
window.onload = init, console.log("hi"), locationText.textContent = locationText.textContent + " " + defaultCoordinates


function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [ -7960511.450303138, 5341189.183472256 ],
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
};

selectButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.firstChild.data);
    selectedRadius = Number(e.target.firstChild.data)
  })
});
