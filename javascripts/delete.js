// When you add, or delete, a song, the modules that perform the XHRs should return promises.
// After the promise is resolved, you should display a Bootstrap modal window to provide feedback on if the operation was successful, or not.

define(
  ["jquery","dom", "writer", "firebase", "delete-promise"], function($, dom, writer, firebase, deletePromise) {
  	return {
  		deleteSong: function () {
	  		dom.results.on("click", ".delete", function (event) {
					var songKey = $(this).parent(".song-result").attr("id");
					console.log("songKey", songKey);
					
// delete promise
					deletePromise(songKey).then(function () {
						 $('#delete-success').modal('show');
					});
				});

  		}


  	};
});