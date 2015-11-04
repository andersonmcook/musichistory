define(["jquery"], function($) {
  return {
    writeMoreSongs: function(callbackFunctionReference) {
    	console.log("you have clicked nothing");
    	// $(".more").click(function () {
    		$("#results").on("click", $(".more"), function() {
    		console.log("you have clicked the more button");
    		$(".more").remove();
	      $.ajax({
				  url: "data/songs2.json"
				}).done(function(jsonDataSentByjQuery) {
	        callbackFunctionReference(jsonDataSentByjQuery);
	        $(".more").remove();
	      });
    	});
    }
  };
});