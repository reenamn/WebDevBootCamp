
console.log("1. Print all numbers between -10 and 19\n");
for(var i = 10; i<=19; i++ )
{
	console.log(i);
}

console.log("\n\n2. Print all even numbers between 10 and 40\n");
for(var i = 10; i <=40; i++)
{
	//check to see if even
	if (i%2 ===0)
	{
		console.log(i);
	}
}

console.log("\n\n3. Print all odd numbers between 300 and 333\n");
for(var i = 300; i <=333; i++)
{
	//check to see if odd
	if (i%2 ===1)
	{
		console.log(i);
	}
}

console.log("\n\n4. Print all numbers divisible by 5 AND 3 between 5 and 50\n");
for(var i = 5; i <=50; i++)
{
	//check to see if divisible
	if (i%3 === 0 && i%5 === 0)
	{
		console.log(i);
	}
}
