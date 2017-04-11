$(document).ready(function(){
	$('#thebutton').click(function(){
		var currow = "<tr><td><input type='text' id='word'></td><td>schedule</td><td>comment</td><td>time</td>";
		$('#test-table').append(currow);
});
});