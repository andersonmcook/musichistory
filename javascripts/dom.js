define(["jquery"], function($) {
	var songOptions = $("#song-options-div");
	var results = $("#results");
	var addMusic = $("#add-music");

	var errorMessage = $("#error-message");

	var viewMusicLink = $("#view-music-link");
	var addMusicLink = $("#add-music-link");
	var profileLink = $("#profile-link");

	var formAddButton = $("#form-add-button");

	var songNameInput = $("#song-name-input");
	var artistNameInput = $("#artist-name-input");
	var albumNameInput = $("#album-name-input");

	var addInputFields = $("#add-music").children();

  var clearFilterButton = $("#clearfilter");
  var artists = $("#artists");
  var albums = $("#albums");

  return {
  	songOptions: songOptions,
  	results: results,
  	addMusic: addMusic,
  	errorMessage: errorMessage,
  	viewMusicLink: viewMusicLink,
  	addMusicLink: addMusicLink,
  	profileLink: profileLink,
  	formAddButton: formAddButton,
  	songNameInput: songNameInput,
  	artistNameInput: artistNameInput,
  	albumNameInput: albumNameInput,
  	addInputFields: addInputFields,
    clearFilterButton: clearFilterButton,
    artists: artists,
    albums: albums
  };
 });