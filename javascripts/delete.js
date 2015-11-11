define(
  ["jquery","dom", "writer", "firebase"], function($, dom, writer, firebase) {
  	return {
  		deleteSong: function () {
	  		dom.results.on("click", ".delete", function (event) {
	  			var songsRef = new Firebase("https://blinding-inferno-367.firebaseio.com/");
	  			var songsInSongsRef = songsRef.child("songs");
	  			console.log("songsInSongsRef", songsInSongsRef);
	  			var songToDelete = $(event.target).siblings(".song-name").text();
	  			console.log("songsRef", songsRef);
	  			// console.log("songsRef.key()", songsRef.child(songs).key());
	  			console.log("songToDelete", songToDelete);

	  			console.log("songsRef.child", songsRef.child(songToDelete).key());
	  			var test = songsRef.child(songToDelete);
	  			console.log("test", test);
	  			// test.remove();
	  			// test = test.parent();
	  			// console.log("second test", test);
	  			console.log("songsRef.parent", songsRef.child(songToDelete).parent().key());

	  			console.log("ben below");
	  			console.log(songsRef.child(songToDelete).path);
	  			// test.remove();
	  			// songsRef.child(songToDelete).remove();
					// $(this).parent(".song-result").remove();
				});

  		}


  	};
});



// steve.brownlee [2:39 PM] 
// @group: to delete, you simply need another XHR with the DELETE verb


// ```$.ajax({
//   url: "http://my.firebase-app.com/songs/" + songKey + "/.json",
//   method: "DELETE"
// }).done(function() {
//   console.log("Yay, it deleted!");
// });