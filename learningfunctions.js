// Write your own JS functions

function isEven(num)
{
	//check if we have a number
	if(typeof num != "number")
	{	
		console.log("Please input a number");
		return false;
	}
	
	//check if even
	if(num%2 === 0)
		return true;
	else
		return false;
}

function factorial(num)
{
	//check if we have a number
	if(typeof num != "number")
	{	
		console.log("Please input a number");
		return false;
	}


	// //handle edge case
	// if (num === 0)
	// 	return 1;

	// //calc. factorial
	// for(var f = num-1; f>1 ;f--)
	// {
	// 	// console.log("num = "+ num +" f = "+f);
	// 	num = num*f;

	// }

	// return num;

	//faster soln from Colt Steele
	//this way we don't have to code separately for the edge case
	var result = 1;

	for(var i = 2; i <=num ; i++)
	{
		result *= i;
	}

	return result;
}

function kebabToSnake(s)
{
	//check if we have a string
	if(typeof s != "string")
	{	
		console.log("Please input a string");
		return false;
	}


	var text = s.replace(/-/g, "_");

	return text;
}