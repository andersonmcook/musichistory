var app = angular.module("MusicHistory", []);

// The next thing you want to do is create a controller, which is an Angular function where you write related logic for a feature. To start off with, we'll create a controller for displaying, creating, and deleting Todo items.
app.controller("SongsLogic", ["$q", "$http", "$scope", function($q, $http, $scope) {
	// $scope.title = "Welcome to your task list";
	// $scope.message = "You're here now";
	// $scope.yeah = "Oh yeah";
	// $scope.no = false;
	// $scope.array = ["test1", "test2", $scope.yeah];
	// $scope.macaroni = "";
	// $scope.searchText = "";
	// $scope.theTodo = "";
	// $scope.todos = [
	//   { name: "Mow the lawn", complete: "incomplete" },
	//   { name: "Cut the grass", complete: "complete" },
	//   { name: "Kill the ants", complete: "incomplete" },
	//   { name: "Trim the weeds", complete: "complete" }
	// ];



	$scope.killTodo = function(todo) {
  // Do you see the PFM here of full object comparison?
	  var todoIndex = $scope.todos.indexOf(todo); 

	  if (todoIndex >= 0) {
	    $scope.todos.splice(todoIndex, 1);
	  }
	};

  var getSongs = $q(function(resolve, reject) {
    $http.get('./data/songs.json')
    .success(
      function(objectFromJSONFile) {
        resolve(objectFromJSONFile.songs);
      }, function(error) {
        reject(error);
      }
    );
  });

  getSongs.then(function (songs) {
    console.log("songs",songs);
    $scope.songs = songs;
  }, function (error) {
    console.log("Failed");
  });
// }]);

// remove song on click
	$("body").on("click", ".delete", function () {
		$(this).parent(".song-result").remove();
	});

// $(document).ready(function() {

	var songOptions = $("#song-options-div");
	var results = $("#results");
	var addMusic = $("#add-music");

	addMusic.hide();
	results.hide();
	results.fadeIn();

	var errorMessage = $("#error-message");

	var viewMusicLink = $("#view-music-link");
	var addMusicLink = $("#add-music-link");
	var profileLink = $("#profile-link");

	var formAddButton = $("#form-add-button");

	var songNameInput = $("#song-name-input");
	var artistNameInput = $("#artist-name-input");
	var albumNameInput = $("#album-name-input");

	viewMusicLink.click(function () {
		addMusic.hide();
		results.fadeIn();
		songOptions.fadeIn();
	});

	addMusicLink.click(function () {
		results.hide();
		songOptions.hide();
		addMusic.fadeIn();
		songNameInput.focus();
	});

	var formAdd = function () {
		if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {
		// songs.unshift(songNameInput.val() + " - by " + artistNameInput.val() + " on the album " + albumNameInput.val());
		// console.log("songs");
	}
	};

	// var writeToResults = function (songList) {
	// 	for (var i = 0; i < songList.songs.length; i++) {
	// 		var currentSong = songList.songs[i];
	// 		var results1 = "<div class='song-result'><p class='song-name'>" + currentSong.title + "</p>";
	// 		var results2 = "<span class='results-line results-artist'>" + currentSong.artist + "</span>";
	// 		var results3 = "<span class='results-line results-divider'>" + "|" + "</span>";
	// 		var results4 = "<span class='results-line results-album'>" + currentSong.album + "</span>";
	// 		var deleteButton = "<button class='delete'>Delete</button></div>";
	// 		results.append(results1 + results2 + results3 + results4 + deleteButton);	
	// 	}
	// 	var deleteSongButton = $(".delete");
	// 	var deleteSong = function () {
	// 		$(this).parent(".song-result").remove();
	// 	};	
	// 	deleteSongButton.click(deleteSong);
	// 	var moreButton = "<button class='more'>More</button>";
	// 	results.append(moreButton);
	// };

	// var moreButton = "<button class='more'>More</button>";

	// $.ajax({
	//   url: "data/songs.json"
	// }).done(writeToResults);

	// $.ajax({
	// 	url: "data/songs.json"
	// }).done(function () {
	// 	// writeToResults();
	// 	$(".more").click(function () {
	// 		$(".more").remove();
	// 		$.ajax({
	// 			url: "data/songs2.json"
	// 		}).done(writeToResults);
	// 	});
	// });


	// $.ajax({
	// 	url: "data/songs2.json"
	// }).done(writeToResults);




	var addToResults = function () {

		if (songNameInput.val().length !== 0 && artistNameInput.val().length !== 0 && albumNameInput.val().length !== 0) {

		var addedSong = "";
		addedSong += "<div class='song-result'><p class='song-name'>" + songNameInput.val() + "</p>";
		addedSong += "<span class='results-line results-artist'>" + artistNameInput.val() + "</span>";
		addedSong += "<span class='results-line results-divider'>" + "|" + "</span>";
		addedSong += "<span class='results-line results-album'>" + albumNameInput.val() + "</span>";
		addedSong += "<button class='delete'>Delete</button></div>";
		results.prepend(addedSong);
		errorMessage.hide();

		songNameInput.val("");
		artistNameInput.val("");
		albumNameInput.val("");

		addMusic.hide();
		songOptions.show();
		results.show();

	//duplicate from writeToResults
		var deleteSongButton = $(".delete");
		var deleteSong = function () {
			$(this).parent(".song-result").remove();
		};	
		// deleteSongButton.click(deleteSong);
		$("body").on("click", ".delete", function () {
			$(this).parent(".song-result").remove();
		});

		} else {
			errorMessage.html("Add a song, artist, and album");
			errorMessage.show();
		}
	};

	var addInputFields = $("#add-music").children();

	formAddButton.click(formAdd);
	addInputFields.keydown(function (event) {
		if (event.which === 13) {
			formAdd();
		}
	});

	formAddButton.click(addToResults);
	addInputFields.keydown(function (event) {
		if (event.which === 13) {
			addToResults();
		}
	});


// $("body").on("click", ".delete", function () {
// 			$(this).parent(".song-result").remove();
// 		});
// }); //end of jQuery
}]);










