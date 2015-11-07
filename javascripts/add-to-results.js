define(["jquery", "dom"], function($, dom) {
  return {

// add song from add form to results
		addToResults: function () {
			var songName;
			var artistName;
			var albumName;

// checks input value lengths to see if they're 0 and if they're not, runs addToResults
			if (dom.songNameInput.val().length !== 0 && dom.artistNameInput.val().length !== 0 && dom.albumNameInput.val().length !== 0) {

// keeps user from injecting code into inputs
				songName = dom.songNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
				artistName = dom.artistNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
				albumName = dom.albumNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");

// resets add form input values
				dom.songNameInput.val("");
				dom.artistNameInput.val("");
				dom.albumNameInput.val("");

// hides add music form, shows main page
				dom.addMusic.hide();
				dom.songOptions.show();
				dom.results.show();

// returns array
				return {
					songs: [{
						title: songName,
						artist: artistName,
						album: albumName
					}]
				};

// pops up error message if any value lengths are 0
				} else {
					dom.errorMessage.html("Add a song, artist, and album");
					dom.errorMessage.show();
				}
		}	
	};		
});

