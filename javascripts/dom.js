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
  	albumNameInput: albumNameInput
  };
 });