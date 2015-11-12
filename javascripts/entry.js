requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "firebase": "../lib/bower_components/firebase/firebase"
  },
  shim: {
  	"bootstrap": ["jquery"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

require(
  ["jquery", "bootstrap", "songs", "hbs", "firebase"], 
  function($, bootstrap, songs, Handlebars, fb) {

  }
);
