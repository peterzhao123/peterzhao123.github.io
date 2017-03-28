$(document).ready(function(){
  var $curr_record;
  var i; 
  for (i = 0; i < records.length; i++) { 
    $curr_record = $('#record-item-template').clone();

    $curr_record.attr("id",i);
    $curr_record.find('.entry-title').text("need to calculate");
    $curr_record.find('.race-date').text(records[i][0]);
    $curr_record.find('.race-name').text(records[i][1]);
    $curr_record.find('#time-block').text("Peter time: "+records[i][2]+"Zheng time: "+records[i][3]);
    $curr_record.css('display','block');
    $('#details-list').append($curr_record);
  }
});
