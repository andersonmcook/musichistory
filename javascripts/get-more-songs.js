define(["jquery"], function($) {
  return {
    writeMoreSongs: function(callback) {
      $.ajax({
        url: "./data/songs2.json"
      }).done(callback);

    }
  };
});