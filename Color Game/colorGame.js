
var h1Element = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var newColorsBtn = document.getElementById("resetBtn");
var hardGameBtn = document.getElementById("hard");
var easyGameBtn = document.getElementById("easy");
var colors = [];
var pickedColor;
var numBoxColors = squares.length;


//init Event listeners
function init(){

	//assign click listeners to squares
	for(i=0; i< numBoxColors; i++)
	{	
		squares[i].addEventListener("click", sqClick);
	}

	//assign click listeners to buttons
	newColorsBtn.addEventListener("click",gameReset);
	hardGameBtn.addEventListener("click", hardGame);
	easyGameBtn.addEventListener("click", easyGame);

}

// Assign Colors
function assignColors(){
	//empty array
	colors = [];

	//fill array
	for(i=0; i< numBoxColors; i++)
	{
		colors[i] = getRandomRGB();
		
		//assign squares of colors
		squares[i].style.backgroundColor = colors[i];
	}

	assignPickedColor();
}

function assignPickedColor(){
	//assign picked color
	pickedColor = colors[Math.floor(Math.random()*numBoxColors)];
	colorDisplay.textContent = pickedColor.toUpperCase();
}

function getRandomRGB(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	
	var color = "rgb("+r+", "+g+", "+b+")";
	return color;
}


//called when somebody clicks a square
function sqClick(){

	//take out spaces from RGB color
	//	var sqColor = this.style.backgroundColor.replace(/ /g, '');
	var sqColor = this.style.backgroundColor;

	if(sqColor === pickedColor)
	{
		//you guessed right!
		message.textContent = "Correct!";
		h1Element.style.backgroundColor = pickedColor;
		newColorsBtn.textContent = "Play Again?";

		for(var i=0; i<numBoxColors; i++)
		{
			squares[i].style.backgroundColor = this.style.backgroundColor;
			squares[i].style.visibility = "visible";
		}
	}
	else
	{
		//console.log("Square was clicked. Color is "+this.style.backgroundColor);
		
		message.textContent = "Try Again";

		//fade out
		this.style.visibility = "hidden";
	}
}

function gameReset() {
	
	//assign the colors to the squares, colorDisplay
	assignColors();
	
	//reset BG color
	document.body.style.backgroundColor = "#232323";

	//reset H1 bg color
	h1Element.style.backgroundColor = null;

	//reset btn text
	newColorsBtn.textContent = "New Colors";

	//reset message
	message.textContent = "";

	//make the squares visibile again
	for(var i=0; i<numBoxColors; i++)
	{
		squares[i].style.visibility = "visible";
	}
}

function easyGame(){
	numBoxColors = 3;

	for(var i=numBoxColors; i<squares.length; i++)
	{
		squares[i].style.visibility = "hidden";
	}

	toggleEasyHardBtn();

	gameReset();
}

function hardGame(){
	numBoxColors = 6;
	toggleEasyHardBtn();

	gameReset();

}

function toggleEasyHardBtn(){

	easyGameBtn.classList.toggle("selected");
	hardGameBtn.classList.toggle("selected");
}

//DO WORK

//init colors
init();
assignColors();