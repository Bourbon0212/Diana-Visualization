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
    duration: 900
  });

}

function doZoom(location) {
  var Zoom;

  if (location == Xinchu_city || location == Jiayi_city) {
    Zoom = 12.4;
  } else if (location == Taipei || location == Keelung || location == Jingman) {
    Zoom = 11.5;
  } else if (location == Zhanghua) {
    Zoom = 11;
  } else if (location == Nantou) {
    Zoom = 9.9;
  } else if (location == Kaoshong || location == Pingdon || location == Taidong) {
    Zoom = 9.7;
  } else if (location == Hualian) {
    Zoom = 9.3;
  } else {
    Zoom = 10.2;
  }
  view.animate({
    zoom: Zoom,
    duration: 1500
  });
}

function plot(items) {
  //console.log(items);
  var lat, lng, coordinate;
  var count = x;
  var feature = new Array(count);
  var stroke = new ol.style.Stroke({color: 'black', width: 1});
  var fill = new ol.style.Fill({color: 'blue'});
  var styles = {
    'circle': new ol.style.Style({
      image: new ol.style.RegularShape({
        fill: fill,
        stroke: stroke,
        points: 3,
        radius: 5,
        angle: 0
      })
    })
  }


  for (i in items) {
    lat = parseFloat(items[i]['latitude']);
    lng = parseFloat(items[i]['longitude']);
    //console.log([lng,lat]);
    //coordinate = ol.proj.transform([121,24.45], 'EPSG:4326', 'EPSG:3857');
    coordinate = ol.proj.fromLonLat([lng, lat]);


    feature[i] = new ol.Feature(new ol.geom.Point(coordinate));
    feature[i].setStyle(styles['circle']);
    // console.log(feature);
    feature = Object.keys(feature).map(function(key) {
      return feature[key];
    });
  }



  var source = new ol.source.Vector({
    features: feature
  });

  var pointLayer = new ol.layer.Vector({
    source: source
  });

  map.addLayer(pointLayer);
}


//------------------------------------------------

function func(location) {
  returnZoom();
  doPan(location);
  setTimeout(function() {
    doZoom(location);
  }, 1300);
}


//Choose City change District
function changeCity(location) {

  var City = location;


  if (City == '台北市') {
    //console.log(City);
    func(Taipei);
    loadData();
    //loadJSON();
  }

  if (City == "基隆市") {
    //console.log(City);
    func(Keelung);
    loadData();
  }

  if (City == "新北市") {
    //console.log(City);
    func(Newtaipei);
    loadData();
  }

  if (City == "宜蘭縣") {
    //console.log(City);
    func(Yeeelan);
    loadData();
  }

  if (City == "桃園縣") {
    //console.log(City);
    func(Taoyuan);
    loadData();
  }

  if (City == "新竹市") {
    //console.log(City);
    func(Xinchu_city);
    loadData();
  }

  if (City == "新竹縣") {
    //console.log(City);
    func(Xinchu);
    loadData();
  }

  if (City == "苗栗縣") {
    //console.log(City);
    func(Miaoli);
    loadData();
  }

  if (City == "台中市") {
    //console.log(City);
    func(Taizhong);
    loadData();
  }

  if (City == "彰化縣") {
    //console.log(City);
    func(Zhanghua);
    loadData();
  }

  if (City == "南投縣") {
    //console.log(City);
    func(Nantou);
    loadData();
  }

  if (City == "嘉義市") {
    //console.log(City);
    func(Jiayi_city);
    loadData();
  }

  if (City == "嘉義縣") {
    //console.log(City);
    func(Jiayi);
    loadData();
  }

  if (City == "雲林縣") {
    //console.log(City);
    func(Yunlin);
    loadData();
  }

  if (City == "台南市") {
    //console.log(City);
    func(Tainan);
    loadData();
  }

  if (City == "高雄市") {
    //console.log(City);
    func(Kaoshong);
    loadData();
  }

  if (City == "澎湖縣") {
    //console.log(City);
    func(Ponghu);
    loadData();
  }

  if (City == "金門縣") {
    //console.log(City);
    func(Jingman);
    loadData();
  }

  if (City == "屏東縣") {
    //console.log(City);
    func(Pingdon);
    loadData();
  }

  if (City == "台東縣") {
    //console.log(City);
    func(Taidong);
    loadData();
  }

  if (City == "花蓮縣") {
    //console.log(City);
    func(Hualian);
    loadData();
  }

  if (City == "連江縣") {
    //console.log(City);
    func(LianJian);
    loadData();
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
