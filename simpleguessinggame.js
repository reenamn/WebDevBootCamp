var num = Number(7);

var guess = Number(prompt("Guess a number"));

do
{
	if(guess > num)
	{
		guess = Number(prompt("You guessed too high!!\n Guess again!"));
	}
	else if(guess < num)
	{
		guess = Number(prompt("You guessed too low!!\n Guess again!"));
	}
}
while(guess != num)


alert("You guessed it!!!!");
