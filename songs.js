// Part One

// Read from local JSON file with jQuery.
// Loop over results and inject into Music History list page.
// Add delete button DOM to each row and use jQuery to delete entire row in the DOM.
// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the 
// bottom of the existing music, but before the More button.

$(document).ready(function() {

var songOptions = $("#song-options-div");
var results = $("#results");
var addMusic = $("#add-music");

addMusic.hide();
results.hide();
results.fadeIn();

var errorMessage = $("#error-message");

var viewMusicLink = $("#view-music-link");
var addMusicLink = $("#add-music-link");
var profileLink = $("#profile-link");

var formAddButton = $("#form-add-button");


viewMusicLink.click(function () {
	addMusic.hide();
	results.fadeIn();
	songOptions.fadeIn();
});



addMusicLink.click(function () {
	results.hide();
	songOptions.hide();
	addMusic.fadeIn();
});


// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// console.log("initial songs", songs)
// songs.push("Conduit - by Converge on the album When Forever Comes Crashing");
// songs.unshift("Blooming Amygdala - by Dendritic Arbor on the album Romantic Love");

// console.log("with added songs", songs);

var output = "";
var songTitle = "";
var albumTitle = "";
var band = "";
// for (var i = 0; i < songs.length; i++) {
// 	songs[i] = songs[i].replace(/>/g, "-");
// 	songs[i] = songs[i].replace(/\*/g, "");
// 	songs[i] = songs[i].replace(/@/g, "");
// 	songs[i] = songs[i].replace(/!/g, "");
// 	songs[i] = songs[i].replace(/\(/g, "");
// }
// console.log("songs with characters replaced", songs);

// add in new songs, artists, albums

var songNameInput = $("#song-name-input");
var artistNameInput = $("#artist-name-input");
var albumNameInput = $("#album-name-input");

var formAdd = function () {
	if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {
	songs.unshift(songNameInput.val() + " - by " + artistNameInput.val() + " on the album " + albumNameInput.val());
	console.log("songs", songs);
}
};

var writeToResults = function (songList) {
	for (var i = 0; i < songList.songs.length; i++) {
		var currentSong = songList.songs[i];
		var results1 = "<div class='song-result'><p class='song-name'>" + currentSong.title + "</p>";
		var results2 = "<span class='results-line results-artist'>" + currentSong.artist + "</span>";
		var results3 = "<span class='results-line results-divider'>" + "|" + "</span>";
		var results4 = "<span class='results-line results-album'>" + currentSong.album + "</span></div>";
		results.append(results1 + results2 + results3 + results4);	
	}
};

$.ajax({
  url: "data/songs.json"
}).done(writeToResults);


var addToResults = function () {

	if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {

	var addedSong = "";
	addedSong += "<div class='song-result'><p class='song-name'>" + songNameInput.val() + "</p>";
	addedSong += "<span class='results-line results-artist'>" + artistNameInput.val() + "</span>";
	addedSong += "<span class='results-line results-divider'>" + "|" + "</span>";
	addedSong += "<span class='results-line results-album'>" + albumNameInput.val() + "</span></div>";
	results.prepend(addedSong);
	errorMessage.hide();

	songNameInput.val("");
	artistNameInput.val("");
	albumNameInput.val("");

	addMusic.hide();
	songOptions.show();
	results.show();
	} else {
		errorMessage.html("Add a song, artist, and album");
		errorMessage.show();
	}
};

var addInputFields = $("#add-music").children();

	formAddButton.click(formAdd);
	addInputFields.keydown(function (event) {
		if (event.which === 13) {
			formAdd();
		}
	});
	formAddButton.click(addToResults);
	addInputFields.keydown(function (event) {
		if (event.which === 13) {
			addToResults();
		}
	});









}); //end of jQuery











