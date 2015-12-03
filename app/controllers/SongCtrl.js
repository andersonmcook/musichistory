app.controller("SongCtrl", ["$q", "$http", "$scope", "simple-songs", function($q, $http, $scope, simpleSongs) {

	$scope.searchTest = "";
	$scope.songs = [];
	$scope.moreSongs = [];

	// $scope.moreSongs = function () {
	// 	simpleSongs.loadMoreSongs($scope.moreSongs);
	// }

	simpleSongs.loadSongs().then(
	    function (songs) {
	      $scope.songs = simpleSongs.getSongs();
	    }, function (error) {
	      console.log(error);
	    }
	  );

	simpleSongs.loadMoreSongs().then(
			function (songs) {
				$scope.moreSongs = simpleSongs.getSongs();
				$scope.songs = $scope.songs.concat($scope.moreSongs);
			}, function (error) {
				console.log(error);
			}
		);
  
}]);