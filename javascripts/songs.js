define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results"], 
  function($, populateSongs, getMoreSongs, writeToResults) {

var songOptions = $("#song-options-div");
var results = $("#results");
var addMusic = $("#add-music");

// hide addMusic
addMusic.hide();
results.hide();
results.fadeIn();

var errorMessage = $("#error-message");

var viewMusicLink = $("#view-music-link");
var addMusicLink = $("#add-music-link");
var profileLink = $("#profile-link");

var formAddButton = $("#form-add-button");

var songNameInput = $("#song-name-input");
var artistNameInput = $("#artist-name-input");
var albumNameInput = $("#album-name-input");

viewMusicLink.click(function () {
	addMusic.hide();
	results.fadeIn();
	songOptions.fadeIn();
});

addMusicLink.click(function () {
	results.hide();
	songOptions.hide();
	addMusic.fadeIn();
	songNameInput.focus();
});

var formAdd = function () {
	if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {
	}
};

// var writeToResults = function (songList) {
// 	for (var i = 0; i < songList.songs.length; i++) {
// 		var currentSong = songList.songs[i];
// 		var results1 = "<div class='song-result'><p class='song-name'>" + currentSong.title + "</p>";
// 		var results2 = "<span class='results-line results-artist'>" + currentSong.artist + "</span>";
// 		var results3 = "<span class='results-line results-divider'>" + "|" + "</span>";
// 		var results4 = "<span class='results-line results-album'>" + currentSong.album + "</span>";
// 		var deleteButton = "<button class='delete'>&times</button></div>";
// 		results.append(results1 + results2 + results3 + results4 + deleteButton);	
// 	}
// 	var deleteSongButton = $(".delete");
// 	var deleteSong = function () {
// 		$(this).parent(".song-result").remove();
// 	};	
// 	deleteSongButton.click(deleteSong);
// 	var moreButton = "<button class='more'>More</button>";
// 	results.append(moreButton);
// };

// writes songs to page from songs.json
populateSongs.writeFirstSongs(writeToResults.writeToResults);

// add songs to page from songs2.json
getMoreSongs.writeMoreSongs(writeToResults.writeToResults);

// add song from add form to results
var addToResults = function () {

// checks input value lengths to see if they're 0 and if they're not, runs addToResults
	if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {

// keeps user from injecting code into inputs
		var songName = songNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
		var artistName = artistNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
		var albumName = albumNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");

// writes addedSong to page
		var addedSong = "";
		addedSong += "<div class='song-result'><p class='song-name'>" + songName + "</p>";
		addedSong += "<span class='results-line results-artist'>" + artistName + "</span>";
		addedSong += "<span class='results-line results-divider'>" + "|" + "</span>";
		addedSong += "<span class='results-line results-album'>" + albumName + "</span>";
		addedSong += "<button class='delete'>&times</button></div>";
		results.prepend(addedSong);
		errorMessage.hide();

// resets add form input values
		songNameInput.val("");
		artistNameInput.val("");
		albumNameInput.val("");

// hides add music form, shows main page
		addMusic.hide();
		songOptions.show();
		results.show();
//duplicate from writeToResults
		var deleteSongButton = $(".delete");
		var deleteSong = function () {
			$(this).parent(".song-result").remove();
		};	
		deleteSongButton.click(deleteSong);

// pops up error message if any value lengths are 0
		} else {
			errorMessage.html("Add a song, artist, and album");
			errorMessage.show();
		}
}; //end of addToResults

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











