var answer= prompt("Are we there yet?");
var correctAns1 = "yes";
var correctAns2 = "yeah";


while ((answer.toLocaleUpperCase()).indexOf(correctAns1.toLocaleUpperCase()) === -1 && (answer.toLocaleUpperCase()).indexOf(correctAns2.toLocaleUpperCase()) === -1)
{
	answer= prompt("Are we there yet?");
}



// while (answer.toLocaleUpperCase() != correctAns1.toLocaleUpperCase() && answer.toLocaleUpperCase() != correctAns2.toLocaleUpperCase())
// {
// 	answer= prompt("Are we there yet?");
// }

alert("Yay, we finally made it!");
