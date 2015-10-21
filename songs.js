/* Create a branch in your musichistory repository named version2.
Switch to that branch.
Requirements

Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. 
Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.
Loop over the array and remove any words or characters that obviously don't belong.
Students must find and replace the > character in each item with a - character.
Must add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}
*/
/*
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log("initial songs", songs)
songs.push("Conduit - by Converge on the album When Forever Comes Crashing");
songs.unshift("Blooming Amygdala - by Dendritic Arbor on the album Romantic Love");

console.log("with added songs", songs);

var results = document.getElementById("results");
var output = "";

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/\*g, "");  //remember to fix this
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/!/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	//songs[i] = songs[i].replace(/by/g, "");
	output = output + "<p>" + songs[i] + "</p>";
}
console.log("songs with characters replaced", songs);

results.innerHTML = output;
*/
//testing things without breaking the original


/*
NEW INSTRUCTIONS FOR VERSION4

Time to make Music History into a single page application.

In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
Add a DOM element that contains some input fields for the user to enter in the name of a song, 
	the artist for the song, and the album. 
	You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
Add a <button> element labeled "Add".
Now, the entire container for the form should not be displayed when the user first visits your page. 
	The song list with the corresponding form should be visible.
When the user clicks on "Add Music", the list view should be hidden, and the music form should show.
When the user clicks on "List Music", the music form should be hidden, and the list view should show.
Once the user fills out the song form and clicks the add button, you should collect all values from the input fields,
	add the song to your array of songs, and update the song list in the DOM.
*/




var songOptions = document.getElementById("song-options-div");
var results = document.getElementById("results");

var viewMusicLink = document.getElementById("view-music-link");
var addMusicLink = document.getElementById("add-music-link");
var profileLink = document.getElementById("profile-link");

var formAddButton = document.getElementById("form-add-button");

// when view music is clicked, hides song options
viewMusicLink.addEventListener("click", function () {
	songOptions.classList.add("display-none");
	results.classList.remove("display-none");
});
// when add music is clicked, hides song results
addMusicLink.addEventListener("click", function () {
	results.classList.add("display-none");
	songOptions.classList.remove("display-none");
});

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log("initial songs", songs)
songs.push("Conduit - by Converge on the album When Forever Comes Crashing");
songs.unshift("Blooming Amygdala - by Dendritic Arbor on the album Romantic Love");

console.log("with added songs", songs);

// var firstSongName = document.getElementById("first-song-name");
var output = "";
var songTitle = "";
var albumTitle = "";
var band = "";
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/!/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	//songs[i] = songs[i].replace(/by/g, "");

	//output = output + "<p>" + songs[i] + "</p>";
}
console.log("songs with characters replaced", songs);

// add in new songs, artists, albums

var songNameInput = document.getElementById("song-name-input");
var artistNameInput = document.getElementById("artist-name-input");
var albumNameInput = document.getElementById("album-name-input");


var formAdd = function () {
	songs.unshift(songNameInput.value + " - by " + artistNameInput.value + " on the album " + albumNameInput.value);
	console.log("songs", songs);
};

// watch for add button to be pressed

//formAddButton.addEventListener("click", formAdd);

// var yark = document.querySelector("button[name=add]");
// yark.addEventListener("click", formAdd);

//

var songTitles = [];

for (var i = 0; i < songs.length; i++) {
		songTitle = songs[i].slice(0, songs[i].indexOf("-") - 1);
		console.log("songTitle", songTitle);
		songTitles.push(songTitle);
}

console.log(songTitles);

var albumTitles = [];

for (var i = 0; i < songs.length; i++) {
		albumTitle = songs[i].slice(songs[i].indexOf("album") + 6);
		console.log("albumTitle", albumTitle);
		albumTitles.push(albumTitle);
}

console.log("albumTitles", albumTitles);

var bands = [];

for (var i = 0; i < songs.length; i++) {
		band = songs[i].slice(songs[i].indexOf("by") + 3, songs[i].indexOf("album") - 8);
		console.log("band", band);
		bands.push(band);
}

console.log("bands", bands);
//var songTitle = songs[0].slice(0, songs[0].indexOf("-") - 1);
//console.log("songTitle", songTitle);
//console.log("firstSongName", firstSongName);
//firstSongName.innerHTML = "<p>" + firstSong + "</p>";

var writeToResults = function () {
for (var i = 0; i < songs.length; i++) {
	output = output + "<div class='song-result'><p class='song-name'>" + songTitles[i] + "</p>";
	output = output + "<span class='results-line results-artist'>" + bands[i] + "</span>";
	output = output + "<span class='results-line results-divider'>" + "|" + "</span>";
	output = output + "<span class='results-line results-album'>" + albumTitles[i] + "</span></div>";
}
results.innerHTML = output;
};

writeToResults();
formAddButton.addEventListener("click", formAdd);

var addToResults = function () {
	output = output + "<div class='song-result'><p class='song-name'>" + songNameInput.value + "</p>";
	output = output + "<span class='results-line results-artist'>" + artistNameInput.value + "</span>";
	output = output + "<span class='results-line results-divider'>" + "|" + "</span>";
	output = output + "<span class='results-line results-album'>" + albumNameInput.value + "</span></div>";
	results.innerHTML = output;
};

formAddButton.addEventListener("click", addToResults);
//writeToResults();












