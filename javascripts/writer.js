define(["jquery", "dom", "populate-songs"], function($, dom, populateSongs) {
  return {

// runs the json file through handlebars template which writes it to the results div
		handlebarsToDOM: function (songList) {
			require(['hbs!../templates/songs'], function (songTemplate) {
				$("#results").html(songTemplate(songList));
			});
		},

// artist dropdown
		artistDropdown: function (songList) {
			require(['hbs!../templates/artist'], function (artistTemplate) {
				$("#artists").html(artistTemplate(songList));
			});
		},

// album dropdown
		albumDropdown: function (songList) {
			require(['hbs!../templates/album'], function (albumTemplate) {
				$("#albums").html(albumTemplate(songList));
			});
		}
  };
});