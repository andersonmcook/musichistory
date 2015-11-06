define(["jquery"], function($) {
  return {
    writeFirstSongs: function(callback) {
      $.ajax({
			  url: "./data/songs.json"
			}).done(callback);

    }
  };
});