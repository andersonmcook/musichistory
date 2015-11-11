// Use jQuery to retrieve the songs from your API.
// Use the JSON objects to populate Handlebar templates.
// Use the populated templates to update the browser.
// Add new songs to your Firebase API with POST AJAX calls.
// Populate the form fields with data from your API.
// When "Filter" button is pressed, update the song list with songs that only match the specified criteria.


define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results", "add-song", "writer", "delete"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults, addSong, writer, deleteSong) {

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

// writes artist dropdown to page
populateSongs.writeFirstSongs(writer.artistDropdown);

// writes album dropdown to page
populateSongs.writeFirstSongs(writer.albumDropdown);

// writes songs to page from songs.json
populateSongs.writeFirstSongs(writer.handlebarsToDOM);

// when anywhere in the body is clicked (need to refine this)
// creates an object called seen
// loops through the links on the page (need to refine this, too)
// sets text to the text of the link
// if the bracket notation of text has been seen in the object before, remove it
$("body").click(function () {
		var seen = {};
			$('#artists a').each(function() {
		    var keyname = $(this).text();
		    if (seen[keyname])
		        $(this).remove();
		    else
		        seen[keyname] = true;
		});
});

// when anywhere in the body is clicked (need to refine this)
// creates an object called seen
// loops through the links on the page (need to refine this, too)
// sets text to the text of the link
// if the bracket notation of text has been seen in the object before, remove it
$("body").click(function () {
		var seen = {};
			$('#albums a').each(function() {
		    var keyname = $(this).text();
		    if (seen[keyname])
		        $(this).remove();
		    else
		        seen[keyname] = true;
		});
});

// click on the delete button to delete its parent element which is the song
dom.results.on("click", ".delete", function () {
	$(this).parent(".song-result").remove();
});

// click on artist to filter only that artist
dom.artists.on("click", "a", function (event) {
	$('.song-result').show();
	dom.artists.children().show();
	dom.albums.children().show();
	$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
	$('.song-result').show();
	$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
	$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();
	dom.albums.children("li").not(':contains("' + $(event.target).text() +'")').toggle();
});

// click on album to filter only that artist
dom.albums.on("click", "a", function (event) {
	$('.song-result').show();
	$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
	$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();
});

// click on clear filter to show everything again
dom.clearFilterButton.click(function () {
	$("#artists").siblings(".dropdown-toggle").html("Artists" + '<span class="caret"></span>');
	$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
	$('.song-result').show();
	dom.artists.children().show();
	dom.albums.children().show();
	dom.clearFilterButton.blur();
});

// add song function from add-song.js
addSong.addSong();

// delete song from delete.js
// deleteSong.deleteSong();

}); //end of jQuery




// lodash
// var matchingAlbums = _.chain(config.originalSongsArray)
//                       .filter((song) => song.artist === selectedArtist)
//                       .uniq('album.name')
//                       .pluck('album')
//                       .value();





