$(document).ready(function(){
  var $curr_record;
  var i;
  var winner;
  var cumpet = 0;
  var cumzhe = 0;
  var currpet = 0;
  var currzhe = 0;
  
  for (i = 0; i < records.length; i++) { 
    $curr_record = $('#record-item-template').clone();
    
    // Determine winner
    if (records[i][2] == 0 && records[i][3] == 0){
      winner = "No Winner";
    }
    else if (records[i][2] < records[i][3]){
      winner = "Winner: Peter";
      if (records[i][0] == "Weekly"){
        currpet = 4;
        if (records[i][3] > 0){
          currzhe = 2;
        }
      }
      else {
        currpet = 2;
        if (records[i][3] > 0){
          currzhe = 1;
        }
      }
    }
    else {
      winner = "Winner: Zheng";
       if (records[i][0] == "Weekly"){
        currzhe = 4;
        if (records[i][3] > 0){
          currpet = 2;
        }
      }
      else {
        currzhe = 2;
        if (records[i][3] > 0){
          currpet = 1;
        }
      }
    }
    $curr_record.attr("id",i);
    $curr_record.find('.entry-title').text(winner);
    $curr_record.find('.race-date').text(records[i][0]);
    $curr_record.find('.race-name').text(records[i][1]);
    $curr_record.find('#time-block').html("Peter time: "+records[i][2]+"Score: "+currpet+"<br />Zheng time: "+records[i][3]+"Score: "+currzhe);
    $curr_record.css('display','block');
    $('#details-list').append($curr_record);
    cumpet = cumpet + currpet;
    cumzhe = cumzhe + currzhe;
  }
});
