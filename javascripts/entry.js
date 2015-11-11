requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "https://cdn.firebase.com/js/client/2.2.1/firebase"
  },
  shim: {
  	"bootstrap": ["jquery"]
  }
});

require(
  ["jquery", "bootstrap", "songs", "hbs"], 
  function($, bootstrap, songs, Handlebars) {

  }
);
