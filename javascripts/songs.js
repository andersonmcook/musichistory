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



define(["app", "populate-songs", "q", "main"], function(app, populatesongs, Q, main) {
          
    // var userAddedSong = {};

    function addBookToLibrary(newSong) {
        var deferred = Q.defer();

        $.ajax({
            url: "https://glaring-torch-1219.firebaseio.com/songs.json",
            method: "POST",
            data: JSON.stringify(newSong)              
        })
        .done(function(newSong) {
            deferred.resolve(newSong);
            console.log("newSong", newSong);
            // Per main.js, any changes to API auto-populate.
        })
        .fail(function(error) {
            deferred.reject(error); 
        });
        return deferred.promise;
    }

    $("#add-music-button").click(function(e) {

        // Takes user information and prepares object for Firebase
        var userAddedSong = {
            "title": $("#added-song").val(),
            "artist": $("#added-artist").val(),
            "album": $("#added-album").val()
        };

        // console.log("newSong", newSong);
        addBookToLibrary(userAddedSong) // sends userAddedSong to AJAX call, inputs to argument newSong
            .then()
            .fail(function(error) {
                console.log("error", error);
            });

        // Clears input fields once change to Firebase is made.
        $("#added-song").val("");
        $("#added-artist").val("");
        $("#added-album").val("");

    }); // closes click listener function




});

