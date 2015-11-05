define(["jquery", "dom", "hbs!../templates/songs"], function($, dom, Handlebars) {
  return {
// write first json file to page
		writeToResults: function (songList) {

			// $("#results").html(Handlebars(songList));

// loop over songList and write to page
			for (var i = 0; i < songList.songs.length; i++) {
				var currentSong = songList.songs[i];
				var results1 = "<div class='song-result'><p class='song-name'>" + currentSong.title + "</p>";
				var results2 = "<span class='results-line results-artist'>" + currentSong.artist + "</span>";
				var results3 = "<span class='results-line results-divider'>" + "|" + "</span>";
				var results4 = "<span class='results-line results-album'>" + currentSong.album + "</span>";
				var deleteButton = "<button class='delete'>&times</button></div>";
				dom.results.append(results1 + results2 + results3 + results4 + deleteButton);	
			}

// target delete song button and declare function to delete song parent when delete is clicked			
			var deleteSongButton = $(".delete");
			var deleteSong = function () {
				$(this).parent(".song-result").remove();
			};

// attach event handler to delete song button	
			deleteSongButton.click(deleteSong);

// declare more button and append it
			var moreButton = "<button class='more'>More</button>";
			dom.results.append(moreButton);
		}	
	};		
});