$(document).ready(function(){
  var $curr_record;
  
  $curr_record = $('#record-item-template').clone();
  
  $curr_record.attr("id","gibberish");
  $curr_record.find('.entry-title').text("the winner");
  $curr_record.find('.race-date').text("the date");
  $curr_record.find('.race-name').text("the map");
  $curr_record.find('#time-block').text("the time");
  $curr_record.css('display','block');
  $('#details-list').append($curr_record);
});
