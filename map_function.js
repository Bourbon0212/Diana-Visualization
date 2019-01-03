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


// check clear or not
var check;
//connect to table
var bridge = new Array(x);
var feature = new Array(x);

function plot(items) {

  //console.log(items);
  var lat, lng, coordinate;
  var count = 0;

  if (check == 1) {
    //console.log(map.getLayers());
    map.removeLayer(map.getLayers().getArray()[3]);
    feature = new Array(count);
    // console.log(map.getLayers().getArray()[3])
    // console.log(feature);
  }

  for (i in items) {
    lat = parseFloat(items[i]['latitude']);
    lng = parseFloat(items[i]['longitude']);
    bridge[count] = [lng, lat];
    // console.log(bridge[count]);

    coordinate = ol.proj.fromLonLat([lng, lat]);
    feature[i] = new ol.Feature(new ol.geom.Point(coordinate));
    feature = Object.keys(feature).map(function(key) {
      return feature[key];
    });

    count = count + 1
  }



  var source = new ol.source.Vector({
    features: feature
  });
  // l = map.getLayers().getArray()[2];
  // l.setSource(source);
  var pointLayer = new ol.layer.Vector({
    source: source
  });
  map.addLayer(pointLayer);


  check = 1;

}

//-----------------------------------

//var popup_check = 0;

// function popup(geojson, school, coor) {
//
//   popup = new ol.Overlay({
//     element: $("<div />").addClass('info').append( //put a table to element parameter
//       $("<table />").addClass('table').append(
//         $("<thead />").append(
//           $("<tr />").append(
//             $("<th />").html("類別")
//           ).append(
//             $("<th />").html("學校資訊")
//           )
//         )
//       ).append(
//         $("<tbody />").append(
//           $("<tr />").append(
//             $("<td />").html("學校")
//           ).append(
//             $("<td />").html(school)
//           )
//         ).append(
//           $("<tr />").append(
//             $("<td />").html("負責人")
//           ).append(
//             $("<td />").html(geojson["name"])
//           )
//         ).append(
//           $("<tr />").append(
//             $("<td />").html("電話")
//           ).append(
//             $("<td />").html(geojson["phone"])
//           )
//         ).append(
//           $("<tr />").append(
//             $("<td />").html("地址")
//           ).append(
//             $("<td />").html(geojson["address"])
//           )
//         )
//       )
//     )[0]
//   });
//   popup.setPosition(ol.proj.fromLonLat(coor));
//   map.addOverlay(popup);
//   popup_check = 1;
// }


//-----------------------------------
function selectedrow() {
  var rowcount = $('#table1 tbody tr').length;
  var index, view, lat, lng, coor,
    table = document.getElementById('table1');

  //setView

  for (var i = 0; i < rowcount; i++) {

    table.rows[i].onclick = function() {

      index = this.rowIndex;
      // this.classList.toggle('selected');
      console.log(index);
      //console.log(feature[index-1]);
      view = new ol.View({
        center: feature[index - 1]["N"]["geometry"]["A"],
        zoom: 16.8
      });

      map.setView(view);

      // if (popup_check == 1) {
      //   map.getOverlays().forEach(function(overlay) {
      //     map.removeOverlay(overlay);
      //   });
      // }
      // // connect to geojson
      // for (i in geojson) {
      //   lat = parseFloat(geojson[i]["latitude"]);
      //   lng = parseFloat(geojson[i]["longitude"]);
      //   coor = [lng, lat];
      //
      //   if (coor[0] == bridge[index - 1][0]) {
          // console.log(geojson[i]);
          // console.log(Object.keys(geojson)[index-1]);
          //console.log(coor)
          // popup(geojson[i], Object.keys(geojson)[index - 1], coor);

        // }
      // }

    };
  };
};


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


  if (City == '臺北市') {
    //console.log(City);
    poke(City);
    func(Taipei);
    //loadJSON();
  }

  if (City == "基隆市") {
    //console.log(City);
    poke(City);
    func(Keelung);
  }

  if (City == "新北市") {
    //console.log(City);
    poke(City);
    func(Newtaipei);
  }

  if (City == "宜蘭縣") {
    //console.log(City);
    poke(City);
    func(Yeeelan);
  }

  if (City == "桃園縣") {
    //console.log(City);
    poke(City);
    func(Taoyuan);
  }

  if (City == "新竹市") {
    //console.log(City);
    poke(City);
    func(Xinchu_city);
  }

  if (City == "新竹縣") {
    //console.log(City);
    poke(City);
    func(Xinchu);
  }

  if (City == "苗栗縣") {
    //console.log(City);
    poke(City);
    func(Miaoli);
  }

  if (City == "臺中市") {
    //console.log(City);
    poke(City);
    func(Taizhong);
  }

  if (City == "彰化縣") {
    //console.log(City);
    poke(City);
    func(Zhanghua);
  }

  if (City == "南投縣") {
    //console.log(City);
    poke(City);
    func(Nantou);
  }

  if (City == "嘉義市") {
    //console.log(City);
    poke(City);
    func(Jiayi_city);
  }

  if (City == "嘉義縣") {
    //console.log(City);
    poke(City);
    func(Jiayi);
  }

  if (City == "雲林縣") {
    //console.log(City);
    poke(City);
    func(Yunlin);
  }

  if (City == "臺南市") {
    //console.log(City);
    poke(City);
    func(Tainan);
  }

  if (City == "高雄市") {
    //console.log(City);
    poke(City);
    func(Kaoshong);
  }

  if (City == "澎湖縣") {
    //console.log(City);
    poke(City);
    func(Ponghu);
  }

  if (City == "金門縣") {
    //console.log(City);
    poke(City);
    func(Jingman);
  }

  if (City == "屏東縣") {
    //console.log(City);
    poke(City);
    func(Pingdon);
  }

  if (City == "臺東縣") {
    //console.log(City);
    poke(City);
    func(Taidong);
  }

  if (City == "花蓮縣") {
    //console.log(City);
    poke(City);
    func(Hualian);
  }

  if (City == "連江縣") {
    //console.log(City);
    poke(City);
    func(LianJian);
  }
}


//-----------------------------------------------
//"pointermove geojson"
var select = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove
});

if (select !== null) {
  map.addInteraction(select);
}

function add_interaction() {
  //console.log(123);
  map.addInteraction(select);
}

//del_interaction
function del_interaction() {
  map.removeInteraction(select);
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
