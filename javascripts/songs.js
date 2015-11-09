define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults) {

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
// getMoreSongs.writeMoreSongs(artistDropdown);

// writes album dropdown to page
populateSongs.writeFirstSongs(albumDropdown);
// getMoreSongs.writeMoreSongs(albumDropdown);

// writes songs to page from songs.json
populateSongs.writeFirstSongs(handlebarsToDOM);



// when you click on More it will add more songs from get-more-songs.js
dom.results.on("click", ".more", function () {
	$(".more").remove();
	getMoreSongs.writeMoreSongs(handlebarsToDOM);
});

// click on the delete button to delete its parent element which is the song
dom.results.on("click", ".delete", function () {
	$(this).parent(".song-result").remove();
});

// function to add songs from add form
var addSongs =  function (event) {
	if (event.which === 13 || event.which === 1) {

		require(['hbs!../templates/addsong'], function (addsongTemplate) {
				$("#results").prepend(addsongTemplate(addToResults.addToResults()));
			});
	}
};

// adds song if conditions are met and user clicks button or presses enter
dom.formAddButton.click(addSongs);
dom.addInputFields.keydown(addSongs);

}); //end of jQuery











