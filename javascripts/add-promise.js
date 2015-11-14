define(["q", "jquery", "bootstrap"], function(Q, $) {
  return function(newSong) {
    var deferred = Q.defer();

    $.ajax({ url: "https://blinding-inferno-367.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    })
      // XHR was successful
      .done(function(json_data) {
        // Now we can resolve the promise and send the data
        deferred.resolve(json_data);
        console.log("books json_data", json_data);
        $('#add-success').modal('show');
      })
      // XHR failed for some reason
      .fail(function(xhr, status, error) {
        // Since the call failed, we have to reject the promise
        deferred.reject(error);
        $("#add-failure").modal('show');
      });

    return deferred.promise;
  }; //--end return  
}); //--end define