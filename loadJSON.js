
var json = '{"TPE":{"name":"John", "age":30, "city":"New York"}, "Newtaipei":{"name":"Amy", "age":0, "city":"Yeah"}}';

function loadJSON() {
  //console.log(json);
  var items = JSON.parse(json);
  $("#table1 tbody tr").remove();


  for(i in items){
    //console.log(items[i]['name']);
    var one, two, three;

    one = items[i]['name']
    two = items[i]['age']
    three = items[i]['city']

    var tr=$('#table1').append($('<tr />').append($('<td />').addClass('mdl-data-table__cell--non-numeric').html(one))
            .append($('<td />').html(two))
            .append($('<td />').html(three)));

  }
}
