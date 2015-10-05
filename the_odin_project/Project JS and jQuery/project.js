$(document).ready(function(){
	
	var rows = prompt("Enter the number of rows: ");
	var cols = prompt("Enter the number of columns: ");
	var $grid = $('#grid');
	
	for(var i = 0; i < rows; i++)
	{
	var row = '<div>';
		for(var j = 0; j < cols; j++)
		{
			row += '<div class="square"></div>';
		}
		row += '</div>';
		
		$grid.append(row);
	}
	
	$('div').mouseenter(function(){
		$(this).css("background-color", "gray");
	});
	
	$('#button').click(function(){
		location.reload();
	});
	
});
	
