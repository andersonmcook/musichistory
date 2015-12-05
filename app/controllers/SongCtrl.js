app.controller("SongCtrl", ["$q", "$http", "$scope", "simple-songs", "$firebaseArray", function($q, $http, $scope, simpleSongs, $firebaseArray) {

	$scope.searchTest = "";
	$scope.songs = [];
	$scope.selectedArtist = $scope.songs.artist;
	console.log("test", $scope.selectedArtist);

	var ref = new Firebase("https://blinding-inferno-367.firebaseio.com/songs/");
	$scope.songs = $firebaseArray(ref);
	console.log($scope.songs);

	$scope.deleteSong = function(song) {
		$scope.songs.$remove(song);
	};
  
}]);