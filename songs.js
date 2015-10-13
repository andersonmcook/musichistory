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

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
console.log("initial songs", songs)
songs[songs.length] = "Conduit - Converge on the album When Forever Comes Crashing";
songs.unshift("Blooming Amygdala - Dendritic Arbor on the album Romantic Love");

console.log("with added songs", songs);

var results = document.getElementById("results");
var output = "";

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i].replace(/\*/g, "");
	songs[i] = songs[i].replace(/@/g, "");
	songs[i] = songs[i].replace(/!/g, "");
	songs[i] = songs[i].replace(/\(/g, "");
	songs[i] = songs[i].replace(/by/g, "");
	output = output + "<p>" + songs[i] + "</p>";
}
console.log("songs with characters replaced", songs);

results.innerHTML = output;