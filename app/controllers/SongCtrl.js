app.controller("SongCtrl", ["$q", "$http", "$scope", "simple-songs", "$firebaseArray", function($q, $http, $scope, simpleSongs, $firebaseArray) {

	$scope.searchTest = "";
	$scope.songs = [];

	var ref = new Firebase("https://blinding-inferno-367.firebaseio.com/songs/");
	$scope.songs = $firebaseArray(ref);
	console.log($scope.songs);
  
}]);