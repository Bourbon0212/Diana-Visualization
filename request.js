
var url = "https://raw.githubusercontent.com/Bourbon0212/Diana-Visualization/master/test.json";

function loadData(){    //load data via ajax
  $.ajax({
    url: url,
    dataType:"json",
    success: function(items){
      //console.log(123);
      //loadJSON(items);    //updata after obtaining data from DB
      loadJSON(items);
      //console.log(items);
      plot(items);
    }
  });
}
