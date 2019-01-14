
var x = 0;
var geojson;
var userid = new Object;
function loadJSON(items) {

  geojson = items
  //console.log(json);
  //var items = JSON.parse(json);
  $("#table1 tbody tr").remove();
  $("#table2 tbody tr").remove()
  //-------------------------------------
  // insert into table1


  for(i in items){
    //console.log(items[i]['name']);
    var one, two, three;
    //console.log(i);
    one = items[i]['name']
    two = items[i]['phone']

    if(items[i]['YN'] == 0){
      three = '未填答'
    }else{
      three = '已填答'
    }

    if(three == '未填答'){
      // userid[i] = items[i]["userid"];

      var tr=$('#table1').append($('<tr />').addClass('red9').append($('<td />').addClass('mdl-data-table__cell--non-numeric').html(i))
              .append($('<td />').html(one))
              .append($('<td />').html(two))
              .append($('<td />').html(three))
              .append($('<td />')));

      x = x+1;
    }
    else{
      userid[i] = items[i]["userid"];
      loadDetail(i);
      severity = draw(items[i]["severity"]);
      // console.log(severity);

      var tr=$('#table1').append($('<tr />').addClass(severity).append($('<td />').addClass('mdl-data-table__cell--non-numeric').html(i))
              .append($('<td />').html(one))
              .append($('<td />').html(two))
              .append($('<td />').html(three))
              .append($('<td />').append($('<button />').attr('onclick','show()').attr('id','Btn'+ x).addClass('tiny ui button').html('View'))));

      x = x+1;
    }
  }
  // console.log(123);
  selectedrow();
  x = 0;

  //console.log(x);
}
