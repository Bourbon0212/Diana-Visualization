
var json = '{"TPE":{"name":"John", "age":30, "city":"New York"}, "Newtaipei":{"name":"Amy", "age":0, "city":"Yeah"},  "keelung":{"name":"123", "age":0, "city":"Yeah"}, "41ung":{"name":"123", "age":0, "city":"Yeah"}, "456":{"name":"123", "age":0, "city":"Yeah"}, "789":{"name":"123", "age":0, "city":"Yeah"}, "few":{"name":"123", "age":0, "city":"Yeah"}, "wed":{"name":"123", "age":0, "city":"Yeah"}, "49v":{"name":"123", "age":0, "city":"Yeah"}, "wwq":{"name":"123", "age":0, "city":"Yeah"}, "v4t":{"name":"123", "age":0, "city":"Yeah"}, "qh8":{"name":"123", "age":0, "city":"Yeah"}, "rej":{"name":"123", "age":0, "city":"Yeah"}, "38g":{"name":"123", "age":0, "city":"Yeah"}, "18d":{"name":"123", "age":0, "city":"Yeah"}, "seb":{"name":"123", "age":0, "city":"Yeah"}, "yqh":{"name":"123", "age":0, "city":"Yeah"}, "hyk":{"name":"123", "age":0, "city":"Yeah"}, "rej":{"name":"123", "age":0, "city":"Yeah"}, "qwey":{"name":"123", "age":0, "city":"Yeah"}, "qwhsx":{"name":"123", "age":0, "city":"Yeah"}, "r4h":{"name":"123", "age":0, "city":"Yeah"}, "48grw":{"name":"123", "age":0, "city":"Yeah"}, "vewqh8":{"name":"123", "age":0, "city":"Yeah"}, "gfdsuj6":{"name":"123", "age":0, "city":"Yeah"}, "qwt":{"name":"123", "age":0, "city":"Yeah"}}';
var x = 0;



function loadJSON() {
  //console.log(json);
  var items = JSON.parse(json);
  $("#table1 tbody tr").remove();
  //-------------------------------------




  for(i in items){
    //console.log(items[i]['name']);
    var one, two, three;

    one = items[i]['name']
    two = items[i]['age']
    three = items[i]['city']

    var tr=$('#table1').append($('<tr />').append($('<td />').addClass('mdl-data-table__cell--non-numeric').html(one))
            .append($('<td />').html(two))
            .append($('<td />').html(three))
            .append($('<td />').append($('<button />').attr('id','Btn'+ x).addClass('tiny ui button').html('Good'))));

    x = x+1;


  }

  console.log($('#Btn5'))
}
