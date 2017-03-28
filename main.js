$(document).ready(function(){
  var $curr_record;
  
  $curr_record = $('#record-item-template').clone();
  
  alert ($curr_record.find('#entry-title').text();
  $curr_record.find('#entry-title').text("change it boi");
  $curr_record.css('display','block');
  $('#details-list').append($curr_record);
});
