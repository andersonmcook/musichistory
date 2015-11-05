define(["jquery", "dom"], function($, dom) {
  return {
// add song from add form to results
		addToResults: function () {

// checks input value lengths to see if they're 0 and if they're not, runs addToResults
			if (dom.songNameInput.val().length !== 0 && dom.artistNameInput.val().length !== 0 && dom.albumNameInput.val().length !== 0) {

// keeps user from injecting code into inputs
				var songName = dom.songNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
				var artistName = dom.artistNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
				var albumName = dom.albumNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");

// writes addedSong to page
				var addedSong = "";
				addedSong += "<div class='song-result'><p class='song-name'>" + songName + "</p>";
				addedSong += "<span class='results-line results-artist'>" + artistName + "</span>";
				addedSong += "<span class='results-line results-divider'>" + "|" + "</span>";
				addedSong += "<span class='results-line results-album'>" + albumName + "</span>";
				addedSong += "<button class='delete'>&times</button></div>";
				dom.results.prepend(addedSong);
				dom.errorMessage.hide();

// resets add form input values
				dom.songNameInput.val("");
				dom.artistNameInput.val("");
				dom.albumNameInput.val("");

// hides add music form, shows main page
				dom.addMusic.hide();
				dom.songOptions.show();
				dom.results.show();
//duplicate from writeToResults
				var deleteSongButton = $(".delete");
				var deleteSong = function () {
					$(this).parent(".song-result").remove();
				};	
				deleteSongButton.click(deleteSong);

// pops up error message if any value lengths are 0
				} else {
					dom.errorMessage.html("Add a song, artist, and album");
					dom.errorMessage.show();
				}
//end of addToResults

		}	
	};		
});

