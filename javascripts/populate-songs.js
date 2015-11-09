define(["jquery"], function($) {
  return {
    writeFirstSongs: function(callback) {
      $.ajax({
			  url: "https://blinding-inferno-367.firebaseio.com/.json"
			}).done(callback);

    }
  };
});