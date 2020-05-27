window.onload = init;

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [ -7960511.450303138, 5341189.183472256 ],
      zoom: 10
      //maxZoom, minZoom
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
  })
};
