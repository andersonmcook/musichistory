requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min"
  }
});

require(
  ["songs"], 
  function(songs) {

  }
);
