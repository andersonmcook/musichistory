define(["jquery"], function($) {
  return {
    writeFirstSongs: function(callbackFunctionReference) {
      $.ajax({
			  url: "./data/songs.json"
			}).done(function(jsonDataSentByjQuery) {
				console.log("callbackFunctionReference", callbackFunctionReference);
				console.log("jsonDataSentByjQuery", jsonDataSentByjQuery);
// // handlebars thing
// 	// this is a template, i will need to personalize it to my project
// 		  	require(['hbs!../templates/songs'], function (songTemplate) {
// 	//change selector to where I'm putting songs
// 		  		$("#results").html(songTemplate(songs));
// 		  	});

// // end of handlebars thing
        callbackFunctionReference(jsonDataSentByjQuery);
      });
    }
  };
});