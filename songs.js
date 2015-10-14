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
var firstSongName = document.getElementById("first-song-name");
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

	output = output + "<p>" + songs[i] + "</p>";
}
console.log("songs with characters replaced", songs);

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
		band = songs[i].slice(songs[i].indexOf("by") + 2, songs[i].indexOf("on") - 1);
		console.log("band", band);
		bands.push(band);
}

console.log("bands", bands);
//var songTitle = songs[0].slice(0, songs[0].indexOf("-") - 1);
//console.log("songTitle", songTitle);
//console.log("firstSongName", firstSongName);
//firstSongName.innerHTML = "<p>" + firstSong + "</p>";

results.innerHTML = output;












