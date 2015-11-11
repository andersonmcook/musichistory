define(["jquery", "dom"], function($, dom) {
  return {
		filter: function () {
// click on artist to filter only that artist
			dom.artists.on("click", "a", function (event) {
				$('.song-result').show();
				dom.artists.children().show();
				dom.albums.children().show();
				$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
				$('.song-result').show();
				$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
				$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();
				dom.albums.children("li").not(':contains("' + $(event.target).text() +'")').toggle();
			});

// click on album to filter only that artist
			dom.albums.on("click", "a", function (event) {
				$('.song-result').show();
				$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');
				$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();
			});

// click on clear filter to show everything again
			dom.clearFilterButton.click(function () {
				$("#artists").siblings(".dropdown-toggle").html("Artists" + '<span class="caret"></span>');
				$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
				$('.song-result').show();
				dom.artists.children().show();
				dom.albums.children().show();
				dom.clearFilterButton.blur();
			});
		}
  };
});