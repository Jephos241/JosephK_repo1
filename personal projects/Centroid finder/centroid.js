// TODO:
// Make dropdown menu for File
// List of choices for input type: x, y;  long, lat;  addresses


// top menu bar
$(document).ready(function() {
	
	// Help menu, How to use each filetype
	
	$('.helpxy').click(function() {
		alert("Input coordinates in the form x and y separated by a comma, e.g. (4.75, 7.234)");
	});
	$('.helplonglat').click(function() {
		alert("Input coordinates in signed decimal degrees without compass direction e.g. (42.6543, 11.249), which is in the form (Latitude in degrees N, Longitude in degrees E) from Latitude: min = -90, max = +90; Longitude: min = 0, max = + 360. Must convert degrees W to degrees E by adding 180 to degrees W");
	});
	/*$('.helpaddress').click(function() {
		alert("Input the street address of the location e.g. (2816 Carnation Avenue, Willow Grove, PA)");
	}); */
	
	// XY coordinates 
	$('.xy').click(function() {
		alert("Now set to x, y coordinates");
		
		$('#money').click(function() {
		// set arrays
		array_all = [];	
		array_pos_one = [];
		array_pos_two = [];
		array_pos_three = [];
		array_pos_four = [];
		array_pos_five = [];
		
		// array to hold the x coordinates and y coordinates for easier calculation
		xcoordinates = [];
		ycoordinates = [];
		
		// set strings
		var address1 = document.getElementById("address_one").value;
		var address2 = document.getElementById("address_two").value;
		var address3 = document.getElementById("address_three").value;
		var address4 = document.getElementById("address_four").value;
		var address5 = document.getElementById("address_five").value;
	
		array_pos_one.push(address1);
		array_pos_two.push(address2);
		array_pos_three.push(address3);
		array_pos_four.push(address4);
		array_pos_five.push(address5);
		
		//	split strings
		var arrayone = address1.split(',');
		var xone = arrayone[0];
		var yone = arrayone[1];
		
		var arraytwo = address2.split(',');
		var xtwo = arraytwo[0];
		var ytwo = arraytwo[1];
		
		var arraythree = address3.split(',');
		var xthree = arraythree[0];
		var ythree = arraythree[1];
		
		var arrayfour = address4.split(',');
		var xfour = arrayfour[0];
		var yfour = arrayfour[1];
		
		var arrayfive = address5.split(',');
		var xfive = arrayfive[0];
		var yfive = arrayfive[1];
	
		// x coordinates
		var x1 = parseInt(xone);
		var x2 = parseInt(xtwo);
		var x3 = parseInt(xthree);
		var x4 = parseInt(xfour);
		var x5 = parseInt(xfive);

		// y coordinates
		var y1 = parseInt(yone);
		var y2 = parseInt(ytwo);
		var y3 = parseInt(ythree);
		var y4 = parseInt(yfour);
		var y5 = parseInt(yfive);
		
		array_all.push(x1, x2, x3, x4, x5);
		array_all.push(y1, y2, y3, y4, y5);
		
		// TO DO: if statement to run equation depending on length
		// add to x total or y total depending
		
		if (arrayone.length == 2 && arraytwo.length == 2 && arraythree.length == 2 &&
			arrayfour.length == 2 && arrayfive.length == 2)
		{
			var x_total = x1 + x2 + x3 + x4 + x5;
			var y_total = y1 + y2 + y3 + y4 + y5;
			xcentroid = x_total/5.0;
			ycentroid = y_total/5.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length == 2) && (arrayfour.length == 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2 + x3 + x4;
			var y_total = y1 + y2 + y3 + y4;
			xcentroid = x_total/4.0;
			ycentroid = y_total/4.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length == 2) && (arrayfour.length != 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2 + x3;
			var y_total = y1 + y2 + y3;
			xcentroid = x_total/3.0;
			ycentroid = y_total/3.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length != 2) && (arrayfour.length != 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2;
			var y_total = y1 + y2;
			xcentroid = x_total/2.0;
			ycentroid = y_total/2.0;
		}		
		else 
		{
			alert("Input two to five coordinates in order!")
		}
		
		// return something about only one address
		
		//alert(x_total);
		//alert(y_total);
		
		$('h1').append("x-coordinate: " + xcentroid + ";   ");	
		$('h1').append("y-coordinate: " + ycentroid + '</br>');
		alert("x-coordinate: " + xcentroid + ";   " + "y-coordinate: " + ycentroid)
		alert("Refresh page to switch Filetype")
		});
	});
	
	// Longitudinal coordinates 
	$('.longlat').click(function() {
		alert("Now set to longitudinal coordinates");
		
		$('#money').click(function() {
		// set arrays
		array_all = [];	
		array_pos_one = [];
		array_pos_two = [];
		array_pos_three = [];
		array_pos_four = [];
		array_pos_five = [];
		
		// array to hold the x coordinates and y coordinates for easier calculation
		xcoordinates = [];
		ycoordinates = [];
		
		// set strings
		var address1 = document.getElementById("address_one").value;
		var address2 = document.getElementById("address_two").value;
		var address3 = document.getElementById("address_three").value;
		var address4 = document.getElementById("address_four").value;
		var address5 = document.getElementById("address_five").value;
	
		array_pos_one.push(address1);
		array_pos_two.push(address2);
		array_pos_three.push(address3);
		array_pos_four.push(address4);
		array_pos_five.push(address5);
		
		//	split strings
		var arrayone = address1.split(',');
		var xone = arrayone[0];
		var yone = arrayone[1];
		
		var arraytwo = address2.split(',');
		var xtwo = arraytwo[0];
		var ytwo = arraytwo[1];
		
		var arraythree = address3.split(',');
		var xthree = arraythree[0];
		var ythree = arraythree[1];
		
		var arrayfour = address4.split(',');
		var xfour = arrayfour[0];
		var yfour = arrayfour[1];
		
		var arrayfive = address5.split(',');
		var xfive = arrayfive[0];
		var yfive = arrayfive[1];
	
		// x coordinates
		var x1 = parseInt(xone);
		var x2 = parseInt(xtwo);
		var x3 = parseInt(xthree);
		var x4 = parseInt(xfour);
		var x5 = parseInt(xfive);

		// y coordinates
		var y1 = parseInt(yone);
		var y2 = parseInt(ytwo);
		var y3 = parseInt(ythree);
		var y4 = parseInt(yfour);
		var y5 = parseInt(yfive);
		
		array_all.push(x1, x2, x3, x4, x5);
		array_all.push(y1, y2, y3, y4, y5);
		
		// TO DO: if statement to run equation depending on length
		// add to x total or y total depending
		
		if (arrayone.length == 2 && arraytwo.length == 2 && arraythree.length == 2 &&
			arrayfour.length == 2 && arrayfive.length == 2)
		{
			var x_total = x1 + x2 + x3 + x4 + x5;
			var y_total = y1 + y2 + y3 + y4 + y5;
			xcentroid = x_total/5.0;
			ycentroid = y_total/5.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length == 2) && (arrayfour.length == 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2 + x3 + x4;
			var y_total = y1 + y2 + y3 + y4;
			xcentroid = x_total/4.0;
			ycentroid = y_total/4.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length == 2) && (arrayfour.length != 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2 + x3;
			var y_total = y1 + y2 + y3;
			xcentroid = x_total/3.0;
			ycentroid = y_total/3.0;
		}
		else if ((arrayone.length == 2) && (arraytwo.length == 2) && (arraythree.length != 2) && (arrayfour.length != 2) && (arrayfive.length != 2))
		{
			var x_total = x1 + x2;
			var y_total = y1 + y2;
			xcentroid = x_total/2.0;
			ycentroid = y_total/2.0;
		}		
		else 
		{
			alert("Input two to five coordinates in order!");
		}
		
		var EorW = "E";
		
		if( Math.abs(x1) > 90 || Math.abs(x2) > 90 || Math.abs(x3) > 90 || Math.abs(x4) > 90 || Math.abs(x5) > 90)
		{
			alert("latitude must be in [-90, 90] to give back a real location");
		}
		
		if( y1 < 0 || y2 < 0 || y3 < 0 || y4 < 0 || y5 < 0 || y1 > 360 || y2 > 360 || y3 > 360 || y4 > 360 || y5 > 360)
		{
			alert("longitude must be in degrees E and within [0, 360) to give back a real location.");
		}
		
		if(ycentroid > 180)
		{
				ycentroid = (ycentroid - 180);
				EorW = "W";
		}
		
		$('h1').append("Latitude: " + xcentroid + " 0 0 N;   ");	
		$('h1').append("Longitude: " + ycentroid + ' 0 0 ' + EorW + '</br>');
		alert("Latitude: " + xcentroid + "N;   " + "Longitude: " + ycentroid + EorW);
		
		alert("Refresh page to switch Filetype");
		});
	});
	
	
/*	// Address coordinates
	$('.address').click(function() {
		alert("Now set to address coordinates");
		
		$('#money').click(function() {
		alert("answer");
		});
	});
*/	
	
	
});