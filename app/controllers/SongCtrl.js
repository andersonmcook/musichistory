app.controller("SongCtrl", ["$q", "$http", "$scope", "simple-songs", "$firebaseArray", function($q, $http, $scope, simpleSongs, $firebaseArray) {

	$scope.searchTest = "";
	$scope.songs = [];
	// $scope.moreSongs = [];

	// $scope.moreSongs = function () {
	// 	simpleSongs.loadMoreSongs($scope.moreSongs);
	// }

	// simpleSongs.loadSongs().then(
	//     function (songs) {
	//       $scope.songs = simpleSongs.getSongs();
	//     }, function (error) {
	//       console.log(error);
	//     }
	//   );

	var ref = new Firebase("https://blinding-inferno-367.firebaseio.com/songs/");
	$scope.songs = $firebaseArray(ref);
	console.log($scope.songs);

	// $scope.moreSongs = function () {
	// 	simpleSongs.loadMoreSongs().then(
	// 			function (songs) {
	// 				$scope.moreSongs = simpleSongs.getSongs();
	// 				$scope.songs = $scope.songs.concat($scope.moreSongs);
	// 			}, function (error) {
	// 				console.log(error);
	// 			}
	// 		);
	// }
  
}]);