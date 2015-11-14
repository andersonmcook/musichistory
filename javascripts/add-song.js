define(["jquery", "dom", "add-promise"], function($, dom, addPromise) {
  return {

		addSong: function () {
			$("#form-add-button").click(function (e) {


// checks input value lengths to see if they're 0 and if they're not, runs addToResults
				if (dom.songNameInput.val().length !== 0 && dom.artistNameInput.val().length !== 0 && dom.albumNameInput.val().length !== 0) {

// keeps user from injecting code into inputs
					songName = dom.songNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
					artistName = dom.artistNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
					albumName = dom.albumNameInput.val().replace(/</g, "&lt;").replace(/>/g, "&gt;");

// hides add music form, shows main page
					dom.addMusic.hide();
					dom.songOptions.show();
					dom.results.show();

// sets newSong to json format
					var newSong = {
						"title": dom.songNameInput.val(),
						"artist": dom.artistNameInput.val(),
						"album": dom.albumNameInput.val()
					};

// POSTs to firebase with promise. addPromise also contains modal pop ups
					addPromise(newSong).then(function () {

// resets add form input values
						dom.songNameInput.val("");
						dom.artistNameInput.val("");
						dom.albumNameInput.val("");			

// hides error message if successfully added
						dom.errorMessage.hide();
					});

				} else {
					
// shows error message
						dom.errorMessage.html("Add a song, artist, and album");
						dom.errorMessage.show();
					}
			});
		}
	};
});