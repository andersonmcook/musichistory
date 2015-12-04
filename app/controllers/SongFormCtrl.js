app.controller("SongFormCtrl", ["$q", "$http", "$scope", "simple-songs", "$firebaseArray", function($q, $http, $scope, simpleSongs, $firebaseArray) {

	var ref = new Firebase("https://blinding-inferno-367.firebaseio.com/songs/");

	$scope.songs = $firebaseArray(ref);
	$scope.newSong = {};

	$scope.addSong = function() {
		$scope.songs.$add({
			artist: $scope.newSong.artist,
			title: $scope.newSong.title,
			album: $scope.newSong.album
		});
	};
	// $scope.addSong = function () {
	// 	simpleSongs.addSong($scope.newSong);
	// 	$scope.newSong = {};
	// };
}]);




// app.controller("SongFormCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {

//     var ref = new Firebase("https://nss-demo-instructor.firebaseio.com/songs");
//     $scope.songs = $firebaseArray(ref);
//     $scope.newSong = {};

//     $scope.addSong = function() {
//       $scope.songs.$add({
//         artist: $scope.newSong.artist,
//         name: $scope.newSong.name,
//         album: {
//           name: $scope.newSong.albumName,
//           year: $scope.newSong.albumYear
//         }
//       });
//     };
//   }
// ]);