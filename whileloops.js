word= prompt("Enter a word and we'll count how many characters there are in it.");
var count =0;

while(count < word.length)
{
	console.log(word[count]);
	count++;
}
console.log("There are "+count+" characters in "+word);