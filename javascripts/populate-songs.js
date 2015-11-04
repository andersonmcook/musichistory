define(["jquery"], function($) {
  return {
    writeFirstSongs: function(callbackFunctionReference) {
      $.ajax({
			  url: "data/songs.json"
			}).done(function(jsonDataSentByjQuery) {
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
  };
});