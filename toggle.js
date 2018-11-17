
// alert("LINKED");


var btn = document.querySelector("button");

function changePgColor()
{
	var bgColor = document.body.style.backgroundColor;
console.log("bgColor = "+bgColor);
	if (bgColor == "purple")
		document.body.style.backgroundColor = "white";
	else
		document.body.style.backgroundColor = "purple";

}



btn.addEventListener("click", changePgColor);
