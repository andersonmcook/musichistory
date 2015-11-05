define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results", "hbs!../templates/songs"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults, Handlebars) {

// var songOptions = $("#song-options-div");
// var results = $("#results");
// var addMusic = $("#add-music");

// hide addMusic
dom.addMusic.hide();
dom.results.hide();
dom.results.fadeIn();

// var errorMessage = $("#error-message");

// var viewMusicLink = $("#view-music-link");
// var addMusicLink = $("#add-music-link");
// var profileLink = $("#profile-link");

// var formAddButton = $("#form-add-button");

// var songNameInput = $("#song-name-input");
// var artistNameInput = $("#artist-name-input");
// var albumNameInput = $("#album-name-input");

dom.viewMusicLink.click(function () {
	dom.addMusic.hide();
	dom.results.fadeIn();
	dom.songOptions.fadeIn();
});

dom.addMusicLink.click(function () {
	dom.results.hide();
	dom.songOptions.hide();
	dom.addMusic.fadeIn();
	dom.songNameInput.focus();
});


// writes songs to page from songs.json
populateSongs.writeFirstSongs(writeToResults.writeToResults);
// populateSongs.writeFirstSongs(writeToResults.writeToResults);

//do I put this inside populateSongs.writeFirstSongs(function() {

// })?
// handlebars thing?
	// this is a template, i will need to personalize it to my project
	// 	  	require(['hbs!../templates/songs'], function (songTemplate) {
	// //change selector to where I'm putting songs
	// 	  		$("#results").html(songTemplate(songs));
	// 	  	});

// end of handlebars thing?

// add songs to page from songs2.json
getMoreSongs.writeMoreSongs(writeToResults.writeToResults);



//some stuff
dom.formAddButton.click(addToResults.addToResults);
dom.addInputFields.keydown(function (event) {
	if (event.which === 13) {
		addToResults.addToResults();
	}
});

}); //end of jQuery











