$(document).ready(function(){
  var $curr_record = $('#record-item-template').clone();
  $curr_record.css('display','block');
  $('#details-list').append($curr_record);
});
