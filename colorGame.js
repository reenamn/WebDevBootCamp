
var squares = document.querySelectorAll(".square");

var colors = [];

var numBoxColors = squares.length;


// Assign Colors
function assignColors(){
	//empty array
	colors = [];

	//fill array
	for(i=0; i< numBoxColors; i++)
	{
		colors[i] = getRandomRGB();
		squares[i].style.backgroundColor = colors[i];
	}
}


function getRandomRGB(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	var color = "rgb("+r+","+g+","+b+")";
	return color;
}



//DO WORK

//init colors
assignColors();
