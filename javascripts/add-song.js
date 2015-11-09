define(["jquery", "dom"], function($, dom) {
  return {

//fix code
	addSong: function () {
		$("#form-add-button").click(function (e) {

			var newSong = {
				"title": $("#song-name-input").val(),
				"artist": $("#artist-name-input").val(),
				"album": $("#album-name-input").val()
			};

			$.ajax({
				url: "https://blinding-inferno-367.firebaseio.com/songs.json",
				method: "POST",
				data: JSON.stringify(newSong)
			}).done(function (addedSong) {
				console.log("Your new song is", addedSong);
			});

		});
	}
	};		
});