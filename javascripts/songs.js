define(
  	["jquery", "populate-songs", "get-more-songs", "write-to-results", "dom", "add-to-results"], 
  function($, populateSongs, getMoreSongs, writeToResults, dom, addToResults) {

// hide addMusic
dom.addMusic.hide();
dom.results.hide();
dom.results.fadeIn();

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

// writes songs to page from songs.json
populateSongs.writeFirstSongs(handlebarsToDOM);


// when you click on More it will add more songs from get-more-songs.js
// i want to remove the More button here, too
dom.results.on("click", ".more", function () {
	getMoreSongs.writeMoreSongs(handlebarsToDOM);
});

// dom.results.on("click", ".more", function () {
// 	$(".more").remove();
// });

// click on the delete button to delete its parent element which is the song
dom.results.on("click", ".delete", function () {
	$(this).parent(".song-result").remove();
});

var addSongs =  function (event) {
	if (event.which === 13 || event.which === 1) {

		require(['hbs!../templates/songs'], function (songTemplate) {
				console.log('working');
				$("#results").prepend(songTemplate(addToResults.addToResults()));
			});

		// addToResults.addToResults();
	}
};

//some stuff
dom.formAddButton.click(addSongs);
dom.addInputFields.keydown(addSongs);
	// function (event) {
	// if (event.which === 1 || event.which === 13) {

	// 	// require(['hbs!../templates/songs'], function (songTemplate) {
	// 	// 		console.log('working');
	// 	// 		$("#results").prepend(songTemplate(addToResults.addToResults()));
	// 	// 	});

	// 	// addToResults.addToResults();
	// }
// }



}); //end of jQuery











