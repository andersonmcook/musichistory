// Use jQuery to retrieve the songs from your API.
// Use the JSON objects to populate Handlebar templates.
// Use the populated templates to update the browser.
// Add new songs to your Firebase API with POST AJAX calls.
// Populate the form fields with data from your API.
// When "Filter" button is pressed, update the song list with songs that only match the specified criteria.


define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results", "add-song"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults, addSong) {

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

// runs the json file through handlebars template which writes it to the results div
function handlebarsToDOM(songList) {
	require(['hbs!../templates/songs'], function (songTemplate) {
		$("#results").append(songTemplate(songList));
	});
}

// artist dropdown
function artistDropdown(songList) {
	require(['hbs!../templates/artist'], function (artistTemplate) {
		$("#artists").append(artistTemplate(songList));
	});
}

// album dropdown
function albumDropdown(songList) {
	require(['hbs!../templates/album'], function (albumTemplate) {
		$("#albums").append(albumTemplate(songList));
	});
}

// writes artist dropdown to page
populateSongs.writeFirstSongs(artistDropdown);

// writes album dropdown to page
populateSongs.writeFirstSongs(albumDropdown);

// writes songs to page from songs.json
populateSongs.writeFirstSongs(handlebarsToDOM);

// when anywhere in the body is clicked (need to refine this)
// creates an object called seen
// loops through the links on the page (need to refine this, too)
// sets text to the text of the link
// if the bracket notation of text has been seen in the object before, remove it
$("body").click(function () {
		var seen = {};
			$('a').each(function() {
		    var txt = $(this).text();
		    if (seen[txt])
		        $(this).remove();
		    else
		        seen[txt] = true;
		});
});

// click on the delete button to delete its parent element which is the song
dom.results.on("click", ".delete", function () {
	$(this).parent(".song-result").remove();
});

// click on artist to filter only that artist
dom.artists.on("click", "a", function (event) {
	$('.song-result').show();
	$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
	$('.song-result').not(':contains("' + $(event.target).text() +'")').hide();
});

// click on album to filter only that artist
dom.albums.on("click", "a", function (event) {
	$('.song-result').show();
	$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
	$('.song-result').not(':contains("' + $(event.target).text() +'")').hide();
});

// click on clear filter to show everything again
dom.clearFilterButton.click(function () {
	$("#artists").siblings(".dropdown-toggle").html("Artists" + '<span class="caret"></span>');
	$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
	$('.song-result').show();
});

// add song function from add-song.js
addSong.addSong();

}); //end of jQuery











