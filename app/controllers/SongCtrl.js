app.controller("SongCtrl", ["$q", "$http", "$scope", "simple-songs", function($q, $http, $scope, simpleSongs) {

	$scope.searchTest = "";
	$scope.songs = [];


	simpleSongs.loadSongs().then(
	    function (songs) {
	      $scope.songs = simpleSongs.getSongs();
	    }, function (error) {
	      console.log(error);
	    }
	  );
  
}]);