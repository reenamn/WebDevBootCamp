// word= prompt("Enter a word and we'll count how many characters there are in it.");
// var count =0;

// while(count < word.length)
// {
// 	console.log(word[count]);
// 	count++;
// }
// console.log("There are "+count+" characters in "+word);


console.log("1. Print all numbers between -10 and 19\n");
var x = -10;

while(x <=19)
{
	console.log(x);
	x++;
}


console.log("\n\n2. Print all even numbers between 10 and 40\n");
x = 10;

while(x <=40)
{
	if(x%2===0)
	{
		console.log(x);
	}
	x++;
}

console.log("\n\n3. Print all odd numbers between 300 and 333\n");
x = 300;

while(x <=333)
{
	//IS X ODD? IF YES, PRINT.
	if(x%2===1)
	{
		console.log(x);
	}
	x++;
}

console.log("\n\n4. Print all numbers divisible by 5 AND 3 between 5 and 50\n");
x = 5;

while(x <=50)
{
	if((x%5 ===0)&&(x%3 ===0))
	{
		console.log(x);
	}
	
	x++;
}