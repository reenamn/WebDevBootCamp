var p1Button = document.getElementById("p1Btn");
var p2Button = document.getElementById("p2Btn");
var resetButton = document.getElementById("resetBtn");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var matchTotal = document.getElementById("matchTotal");
var matchUpto = document.querySelector('input[name="matchUpto"]');



p1Button.addEventListener("click", function () {
	console.log("p1 has been clicked");
	p1Score.textContent = Number(p1Score.textContent) +1 ;
	if(endMatch(p1Score.textContent))
	{
		p1Score.classList.add("winner");
	}
});

p2Button.addEventListener("click", function () {
	console.log("p2 has been clicked");
	p2Score.textContent = Number(p2Score.textContent) +1 ;
	if(endMatch(p2Score.textContent))
	{
		p2Score.classList.add("winner");
	}
});

resetButton.addEventListener("click", reset);


matchUpto.addEventListener("input", function(){
	console.log("changed total match "+this.value);
	matchTotal.textContent = this.value;
	reset();
});

function reset()
{
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	p1Button.disabled = false;
	p2Button.disabled = false;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	matchUpto.value = null;
}

function endMatch(score)
{
	if(score >= matchTotal.textContent)
	{
		//deactivate p1Btn and p2Btn somehow
		p1Button.disabled = true;
		p2Button.disabled = true;
		console.log("MATCH OVER! disable btns");
		return true;
	}
	else
	{
		return false;
	}
}