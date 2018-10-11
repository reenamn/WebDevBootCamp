// Arrays are represented by [] with items separated by commas,
// Objects are represented by {} with properties separated by commas,

// Array
NetflixWatchlist = [

{ //Object
	title: "Sound of Music",
	rating: "5",
	hasWatched: true
}
,
{ //Object
	title: "Chicago",
	rating: "3",
	hasWatched: false
}
,
{ //Object
	title: "Mamma Mia",
	rating: "2",
	hasWatched: true
}
,
{ //Object
	title: "Gringo",
	rating: "-1",
	hasWatched: true
}


]





// print out the array

// loop through Watchlist
for(var i=0; i< NetflixWatchlist.length; i++)
{
	// access one object at a time
	
	if(NetflixWatchlist[i].hasWatched)
		console.log("You have watched "+NetflixWatchlist[i].title+" – "+NetflixWatchlist[i].rating+" stars");
	else
		console.log("You have not seen "+NetflixWatchlist[i].title+" – "+NetflixWatchlist[i].rating+" stars");

	// NetflixWatchlist[i].title
	// NetflixWatchlist[i].rating
	// NetflixWatchlist[i].hasWatched

}


// another way to do this using the forEach function that iterates through arrays

NetflixWatchlist.forEach(function(movie){
	var result = "You have ";

	if(movie.hasWatched)
		result += "watched ";
	else
		result += "have not seen "


	result +="\""+movie.title+"\"";
	result += " – "
	result += movie.rating;
	console.log(result);
})