//setting

var view =  new ol.View({
  center: ol.proj.fromLonLat([121, 23.5]),
  zoom: 7.5
})

//map init

var map = new ol.Map({
  target: 'map',
  layers: [

    new ol.layer.Tile({
      source: new ol.source.OSM()
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

  view: view
});

//----------------------------------------------------

//for zoom_change
var Taipei = ol.proj.fromLonLat([121.555558, 25.072948])
var Keelung = ol.proj.fromLonLat([121.723801, 25.130247])
var Newtaipei = ol.proj.fromLonLat([121.596121, 25.010076])
var Yeeelan = ol.proj.fromLonLat([121.645922, 24.600284])
var Taoyuan = ol.proj.fromLonLat([121.280965, 24.884941])
var Xinchu_city = ol.proj.fromLonLat([120.942488, 24.787515])
var Xinchu = ol.proj.fromLonLat([121.166126, 24.670291])
var Miaoli = ol.proj.fromLonLat([120.905051, 24.498282])
var Taizhong = ol.proj.fromLonLat([120.937755, 24.225453])
var Zhanghua = ol.proj.fromLonLat([120.484475, 23.965178])
var Nantou = ol.proj.fromLonLat([120.981433, 23.811067])
var Jiayi_city = ol.proj.fromLonLat([120.444489, 23.483047])
var Jiayi = ol.proj.fromLonLat([120.508871, 23.474318])
var Yunlin = ol.proj.fromLonLat([120.395599, 23.727391])
var Tainan = ol.proj.fromLonLat([120.328989, 23.152469])
var Kaoshong = ol.proj.fromLonLat([120.605279, 22.971507])
var Ponghu = ol.proj.fromLonLat([119.618139, 23.566545])
var Jingman = ol.proj.fromLonLat([118.380078, 24.440651])
var Pingdon = ol.proj.fromLonLat([120.625981, 22.370858])
var Taidong = ol.proj.fromLonLat([121.052658, 22.845853])
var Hualian = ol.proj.fromLonLat([121.411609, 23.815980])
var LianJian = ol.proj.fromLonLat([119.953364, 26.180745])


function doPan(location) {

  view.animate({
    center: location,
    duration: 1500
  });

}

function returnZoom() {

  view.animate({
    zoom: 7.5,
    duration: 700
  });

}

function doZoom(location) {
  var Zoom;

  if (location == Xinchu_city || location == Jiayi_city){
    Zoom = 12;
  }
  else if (location == Taipei || location == Keelung || location == Jingman){
    Zoom = 11.5;
  }
  else if (location == Zhanghua){
    Zoom = 11;
  }
  else if (location == Nantou){
    Zoom = 9.9;
  }
  else if (location == Kaoshong || location == Pingdon  || location == Taidong){
    Zoom = 9.7;
  }
  else if (location == Hualian){
    Zoom = 9.3;
  }
  else {
    Zoom = 10.2;
  }
  view.animate({
    zoom: Zoom,
    duration: 1500
  });
}

function func(location) {
  returnZoom();
  doPan(location);
  setTimeout(function(){doZoom(location);}, 1300);
}


//Choose City change District
function changeCity(location) {

  var City = location;


  if (City == '台北市') {
    //console.log(City);
    func(Taipei);
  }

  if (City == "基隆市") {
    //console.log(City);
    func(Keelung);
  }

  if (City == "新北市") {
    //console.log(City);
    func(Newtaipei);
  }

  if (City == "宜蘭縣") {
    //console.log(City);
    func(Yeeelan);
  }

  if (City == "桃園縣") {
    //console.log(City);
    func(Taoyuan);
  }

  if (City == "新竹市") {
    //console.log(City);
    func(Xinchu_city);
  }

  if (City == "新竹縣") {
    //console.log(City);
    func(Xinchu);
  }

  if (City == "苗栗縣") {
    //console.log(City);
    func(Miaoli);
  }

  if (City == "台中市") {
    //console.log(City);
    func(Taizhong);
  }

  if (City == "彰化縣") {
    //console.log(City);
    func(Zhanghua);
  }

  if (City == "南投縣") {
    //console.log(City);
    func(Nantou);
  }

  if (City == "嘉義市") {
    //console.log(City);
    func(Jiayi_city);
  }

  if (City == "嘉義縣") {
    //console.log(City);
    func(Jiayi);
  }

  if (City == "雲林縣") {
    //console.log(City);
    func(Yunlin);
  }

  if (City == "台南市") {
    //console.log(City);
    func(Tainan);
  }

  if (City == "高雄市") {
    //console.log(City);
    func(Kaoshong);
  }

  if (City == "澎湖縣") {
    //console.log(City);
    func(Ponghu);
  }

  if (City == "金門縣") {
    //console.log(City);
    func(Jingman);
  }

  if (City == "屏東縣") {
    //console.log(City);
    func(Pingdon);
  }

  if (City == "台東縣") {
    //console.log(City);
    func(Taidong);
  }

  if (City == "花蓮縣") {
    //console.log(City);
    func(Hualian);
  }

  if (City == "連江縣") {
    //console.log(City);
    func(LianJian);
  }
}

//----------------------------------------------------
//"pointermove"

var select = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove
});

if (select !== null) {
  map.addInteraction(select);
}
//----------------------------------------------------
//"click"

var displayFeatureInfo = function(pixel) {

  var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
    return feature;
  });

  if (feature) {
    //console.log(feature.get('name'));
    changeCity(feature.get('name'));
  }
};

map.on('singleclick', function(evt) {
  if (evt.dragging) {
    return;
  }
  var pixel = map.getEventPixel(evt.originalEvent);
  displayFeatureInfo(pixel);
});
