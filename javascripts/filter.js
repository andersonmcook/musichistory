define(["jquery", "dom"], function($, dom) {
  return {
		filter: function () {
			
// click on artist to filter only that artist
			dom.artists.on("click", "a", function (event) {

// show all song results, show all dropdown options
				$('.song-result').show();
				dom.artists.children().show();
				dom.albums.children().show();

// set album dropdown title to Albums
				$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');

// set artist dropdown title to text of artist clicked
				$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');

// toggle song results if they don't contain the artist clicked
				$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();

// toggle albums in album dropdown if they don't match artist
// albums in dropdown contain hidden span with artist name
				dom.albums.children("li").not(':contains("' + $(event.target).text() +'")').toggle();
			});

// click on album to filter only that artist
			dom.albums.on("click", "a", function (event) {

// show all song results
				$('.song-result').show();

// set album dropdown to selected album
				$(event.target).parents().siblings(".dropdown-toggle").html($(event.target).text() + '<span class="caret"></span>');

// toggle song results if they don't contain the album clicked
				$('.song-result').not(':contains("' + $(event.target).text() +'")').toggle();
			});

// click on clear filter to show everything again
			dom.clearFilterButton.click(function () {

// resets dropdowns and shows all song results
				$("#artists").siblings(".dropdown-toggle").html("Artists" + '<span class="caret"></span>');
				$("#albums").siblings(".dropdown-toggle").html("Albums" + '<span class="caret"></span>');
				$('.song-result').show();

// show all artists in artist dropdown, show all albums in album dropdown, unfocus button
				dom.artists.children().show();
				dom.albums.children().show();
				dom.clearFilterButton.blur();
			});
		}
  };
});