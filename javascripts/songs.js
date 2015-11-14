// Use jQuery to retrieve the songs from your API.
// Use the JSON objects to populate Handlebar templates.
// Use the populated templates to update the browser.
// Add new songs to your Firebase API with POST AJAX calls.
// Populate the form fields with data from your API.
// When "Filter" button is pressed, update the song list with songs that only match the specified criteria.


define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results", "add-song", "writer", "delete", "filter", "add-promise", "delete-promise"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults, addSong, writer, deleteSong, filter, addPromise, deletePromise) {

// Create a reference to your Firebase database
var myFirebaseRef = new Firebase("https://blinding-inferno-367.firebaseio.com/");

// Listen for when anything changes on the "songs" key
myFirebaseRef.child("songs").on("value", function(snapshot) {

// Store the entire songs key in a local variable
  var allSongsObject = snapshot.val();

// Bind the allSongsObject to the song list Handlebar template
// use {songs:} because handlebars expects an object of songs
  writer.handlebarsToDOM({songs:allSongsObject});

// Bind the unique artists to the artists template
	writer.artistDropdown({songs:allSongsObject});

// Bind the unique albums to the albums template
	writer.albumDropdown({songs:allSongsObject});
});

// click view music and it hides addMusic and fades in results and options
dom.viewMusicLink.click(function () {
	dom.addMusic.hide();
	dom.results.fadeIn();
	dom.songOptions.fadeIn();
});

//click add music and it hides results and song options
dom.addMusicLink.click(function () {
	dom.results.hide();
	dom.songOptions.hide();
	dom.addMusic.fadeIn();
	dom.songNameInput.focus();
});

// when anywhere in the body is clicked (need to refine this)
// creates an object called seen
// loops through the links in the respective dropdowns
// sets text to the text of the link
// if the bracket notation of text has been seen in the object before (been set to true), remove it
// if not, set it to true
$("body").click(function () {
		var artistSeen = {};
			$('#artists a').each(function() {
		    var keyname = $(this).text();
		    if (artistSeen[keyname] === true)
		        $(this).remove();
		    else
		        artistSeen[keyname] = true;
		});

		var albumSeen = {};
			$('#albums a').each(function() {
		    var keyname = $(this).text();
		    if (albumSeen[keyname] === true)
		        $(this).remove();
		    else
		        albumSeen[keyname] = true;
		});

});

// add filter functionality from filter.js
filter.filter();

// add song function from add-song.js
addSong.addSong();

// delete song from delete.js
deleteSong.deleteSong();

}); //end of jQuery




// lodash
// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();





