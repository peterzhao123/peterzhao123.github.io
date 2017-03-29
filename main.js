$(document).ready(function(){
  var $curr_record;
  var i;
  var winner;
  var winnerbol;
  var cumpet = 0;
  var cumzhe = 0;
  var currpet = 0;
  var currzhe = 0;
  
  for (i = 0; i < records.length; i++) { 
    $curr_record = $('#record-item-template').clone();
    
    // Determine winner
    // No winner
    if (records[i][2] == 0 && records[i][3] == 0){
      winner = "No Winner";
      currpet = 0;
      currzhe = 0;
      winnerbol = 0;
    }
    // Peter did not finish
    else if (records[i][2] == 0){
      currpet = 0;
      currzhe = 2;
      winnerbol = 2;
    }
    // Zheng did not finish
    else if (records[i][2] == 0){
      currpet = 2;
      currzhe = 0;
      winnerbol = 1;
    }
    // Peter lower time than Zheng
    else if (records[i][2] < records[i][3]){
      winner = "Winner: Peter";
      currpet = 2;
      currzhe = 1;
      winnerbol = 1;
    }
    // Zheng lower time than Peter
    else {
      winner = "Winner: Zheng";
      currpet = 1;
      currzhe = 2;
      winnerbol = 2;
    }
    // Weekly multiplier
    if(records[i][0] == "Weekly"){
      currpet = currpet * 2;
      currzhe = currzhe * 2;
    }
    $curr_record.attr("id",i);
    $curr_record.find('.entry-title').text(winner);
    $curr_record.find('.race-date').text(records[i][0]);
    $curr_record.find('.race-name').text(records[i][1]);
    $curr_record.find('#time-block').html("Peter time: "+records[i][2]+" Score: "+currpet+"<br />Zheng time: "+records[i][3]+" Score: "+currzhe);
    $curr_record.css('display','block');
    if(winnerbol == 1){
      $curr_record.css('background','#003333');
    }
    else if(winnerbol ==2){
      $curr_record.css('background','#003399');
    }
    $('#details-list').append($curr_record);
    cumpet = cumpet + currpet;
    cumzhe = cumzhe + currzhe;
  }
  $('#cum-peter-score').text(cumpet);
  $('#cum-zheng-score').text(cumzhe);
});
