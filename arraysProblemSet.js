function printReverse(arrayX)
{
	for (var i = arrayX.length -1 ; i >=0 ; i--)
	{
		console.log(arrayX[i]);
	}
}

function isUniform(arrayX)
{
	var ctrl = arrayX[0];
	var i = 0;

	while(i < arrayX.length)
	{
		if(arrayX[i]!== ctrl)
		{
			return false;
		}
		i++;
	}

	return true;
}

function sumArray(arrayX)
{
	var total = 0;

	arrayX.forEach(function(item){ total += item; });

	return total;
}

function max(arrayX)
{
	var max = arrayX[0];
	var i = 1;

	while(i < arrayX.length)
	{
console.log("is "+max+" > "+arrayX[i]);
		if(arrayX[i]>max)
		{
			max = arrayX[i];

		}

		i++;

	}
	

	return max;

}