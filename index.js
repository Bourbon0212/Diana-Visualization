//setting

var view = new ol.View({
  center: ol.proj.fromLonLat([121, 23.5]),
  zoom: 7.5
})

//map init

var map = new ol.Map({
  target: 'map',
  layers: [

    new ol.layer.Tile({
      source: new ol.source.XYZ({
        crossOrigin: 'anonymous',
        url: 'https://mt{0-3}.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
      }),
    }),

    new ol.layer.Vector({
      renderMode: 'image',
      source: new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/assets/twCounty.geojson',
        format: new ol.format.GeoJSON()
      }),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#c7daf3',
          width: 1
        }),
      }),
    })
  ],
  // stop zooming with scroll
  interactions: ol.interaction.defaults({
    mouseWheelZoom: false
  }),

  view: view
});

//---------------------------------------------------------

$(function() {
  $("#test").click(function() {
    $('#dialog1').modal('show');
  })
})

//---------------------------------------------------------
