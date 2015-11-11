define(
  ["jquery","dom", "writer", "firebase"], function($, dom, writer, firebase) {
  	return {
  		deleteSong: function () {
	  		dom.results.on("click", ".delete", function (event) {
					var songKey = $(this).parent(".song-result").attr("id");
					console.log("songKey", songKey);
					$(this).parent(".song-result").remove();

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