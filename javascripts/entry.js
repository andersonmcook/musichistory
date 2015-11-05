requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
  	"bootstrap": ["jquery"]
  }
});

require(
  ["bootstrap", "songs"], 
  function(b, songs) {

  }
);
