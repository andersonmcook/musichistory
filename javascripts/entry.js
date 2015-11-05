requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
  	"bootstrap": ["jquery"]
  }
});

require(
  ["jquery", "bootstrap", "songs", "hbs"], 
  function($, bootstrap, songs, Handlebars) {

// // this is a template, i will need to personalize it to my project
//   	require(['hbs!../templates/songs'], function (songTemplate) {
//   		//change selector to where I'm putting songs
//   		$("#results").html(songTemplate(songs));
//   	});

  }
);
