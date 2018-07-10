var age = Number(prompt("What is your age?"));

//validate age
while (isNaN(age))
{
	age =  Number(prompt("What is your age?"));
}

if(age<0)
{
	console.log("You don't exist");
}

if(age === 21)
{
	console.log("Happy 21'st birthday!");
}

if(age%2)
{
	console.log("Your age is odd!");
}

if(age > 0 && (Number.isInteger(Math.sqrt(age))))
{
	console.log("Perfect Square");
}