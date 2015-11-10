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
// getMoreSongs.writeMoreSongs(artistDropdown);

// writes album dropdown to page
populateSongs.writeFirstSongs(albumDropdown);
// getMoreSongs.writeMoreSongs(albumDropdown);

// writes songs to page from songs.json
populateSongs.writeFirstSongs(handlebarsToDOM);


// deprecated
// // when you click on More it will add more songs from get-more-songs.js
// dom.results.on("click", ".more", function () {
// 	$(".more").remove();
// 	getMoreSongs.writeMoreSongs(handlebarsToDOM);
// });

// click on the delete button to delete its parent element which is the song
dom.results.on("click", ".delete", function () {
	$(this).parent(".song-result").remove();
});

dom.artists.on("click", "a", function (event) {

	console.log("test", $(event.target).text());

	// $(".song-result").not(:contains($(event.target).text())).hide();
	// $(".song-result"):contains($(event.target).text()).hide();
	$('.song-result').not(':contains("' + $(event.target).text() +'")').hide();



	// ($(event.target)).hide();
	// if ($(event.target).text() !== dom.results.find(".results-artist").text()) {
	// 	console.log("dom", dom.results.children(".song-result").html());
	// 	var x = dom.results.find(".results-artist").text();
	// 	console.log("x", x);
		// dom.results.find(".results-artist").each(function () {
		// 	console.log("yo", dom.results.children(".song-result").html());
		// });
	// }

	// console.log("test", $(event.target).text());
});

// event.target.text()

// if (dom.artists.text() !== dom.results.text()) {
// 	$(this).parent().hide();
// }


// // function to add songs from add form
// var addSongs =  function (event) {
// 	if (event.which === 13 || event.which === 1) {

// 		require(['hbs!../templates/addsong'], function (addsongTemplate) {
// 				$("#results").prepend(addsongTemplate(addToResults.addToResults()));
// 			});
// 	}
// };

// // adds song if conditions are met and user clicks button or presses enter
// dom.formAddButton.click(addSongs);
// dom.addInputFields.keydown(addSongs);

addSong.addSong();

}); //end of jQuery











