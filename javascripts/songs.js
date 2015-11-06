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

// writes songs to page from songs.json
populateSongs.writeFirstSongs(imCallingYou);
// populateSongs.writeFirstSongs(writeToResults.writeToResults);

function imCallingYou(songList) {
	require(['hbs!../templates/songs'], function (songTemplate) {
		$("#results").append(songTemplate(songList));
		console.log(songTemplate);
		console.log(songList);
	});
}

// return {
// 	imCallingYou: imCallingYou
// }
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
// getMoreSongs.writeMoreSongs(writeToResults.writeToResults);
// getMoreSongs.writeMoreSongs(imCallingYou);



//some stuff
dom.formAddButton.click(addToResults.addToResults);
dom.addInputFields.keydown(function (event) {
	if (event.which === 13) {
		addToResults.addToResults();
	}
});


}); //end of jQuery











