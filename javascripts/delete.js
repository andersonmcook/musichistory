// When you add, or delete, a song, the modules that perform the XHRs should return promises.
// After the promise is resolved, you should display a Bootstrap modal window to provide feedback on if the operation was successful, or not.

define(
  ["jquery","dom", "writer", "firebase"], function($, dom, writer, firebase) {
  	return {
  		deleteSong: function () {
	  		dom.results.on("click", ".delete", function (event) {
					var songKey = $(this).parent(".song-result").attr("id");
					console.log("songKey", songKey);
					// $(this).parent(".song-result").remove();

					$.ajax({
						  url: "https://blinding-inferno-367.firebaseio.com/songs/" + songKey + "/.json",
						  method: "DELETE"
						}).done(function() {
						  console.log("Yay, it deleted!");
						});

				});

  		}


  	};
});