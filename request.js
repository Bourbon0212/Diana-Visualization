

function loadEvent(){    //load data via ajax

  var url_load = "https://pmdiana.hcilab.katrina.tw/event";
  $.ajax({
    url: url_load,
    dataType:"json",
    success: function(items){
      //console.log(123);
      //console.log(items);
      event(items);
    }
  });
}


function poke(county){

  var ass_id;

  if ($('#sel').val()){
    //console.log($('#sel').val());
    ass_id = $('#sel').val();
  }else{
    ass_id = 2;
  }

  var url_poke = "https://pmdiana.hcilab.katrina.tw/fetch?county="+county+"&assessment_id="+ass_id;

  //console.log(url_poke);

  $.ajax({
    url: url_poke,
    dataType:"json",
    success: function(items){
      //console.log(123);
      loadJSON(items);
      plot(items);
    }
  });

}
