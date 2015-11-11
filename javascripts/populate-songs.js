define(["jquery"], function($) {
  return {
    writeFirstSongs: function(callback) {
      $.ajax({
			  url: "https://blinding-inferno-367.firebaseio.com/.json",
			  method: "GET"
			}).done(callback);
    }
    // ,

    // dataFromSongs: function() {
    // 	$.ajax({
    // 		url: "https://blinding-inferno-367.firebaseio/.json",
    // 		method: "GET"
    // 	}).done();
    // }


  };
});