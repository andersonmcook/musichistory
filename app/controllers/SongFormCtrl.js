app.controller("SongFormCtrl", ["$q", "$http", "$scope", "simple-songs", function($q, $http, $scope, simpleSongs) {

	$scope.newSong = {};

	$scope.addSong = function () {
		simpleSongs.addSong($scope.newSong);
	}
}]);