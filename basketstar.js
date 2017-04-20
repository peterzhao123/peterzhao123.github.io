$(document).ready(function(){
  var pearn = 0;
  var zearn = 0;
  var pwinper = 0;
  var zwinper = 0;
  var zwin = 0;
  var zloss = 0;
  
  for (i = 0; i < bsrecords.length; i++){
    pwinper = Math.floor((bsrecords[i][3] / bsrecords[i][4]) * 100);
    zwinper = Math.floor((bsrecords[i][5] / bsrecords[i][6]) * 100);
    var currow = "<tr>\
      <td>"+bsrecords[i][0]+"</td>\
      <td>"+bsrecords[i][1]+"</td>\
      <td>"+bsrecords[i][2]+"</td>\
      <td>"+bsrecords[i][3]+":"+bsrecords[i][4]+"</td>\
      <td>"+bsrecords[i][5]+":"+bsrecords[i][6]+"</td>\
      <td>"+pwinper+"%</td>\
      <td>"+zwinper+"%</td>\
      </tr>";

    $('#content-table').append(currow);
  };
});
