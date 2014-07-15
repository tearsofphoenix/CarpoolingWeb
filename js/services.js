var nil = null;
var NS = {
	DEBUG : 1,	
	Log : function(arg) {
		if(NS.DEBUG) { console.log(arg); }
	}
};

var Network = function() {
 
 	var gsBaseURL = "http://127.0.0.1/~Mac003/www/server/";
 	
 	return  { 		
     	baseURL : function () { return gsBaseURL; },
	 	loginURL : function() { return gsBaseURL + "account.php";},
	 	post : function(url, params, callback) {
		 		 	var httpRequest = new XMLHttpRequest();
				 	httpRequest.onreadystatechange = function()
				 	{
					 	if (httpRequest.readyState == 4 && httpRequest.status == 200)
					 	 {
					 	  	 NS.Log(httpRequest.responseText);
							 callback(JSON.parse(httpRequest.responseText), null);
						}
					}
					
					var parameters = [];
					var x;
					for (x in params) {
					    parameters[parameters.length] = x + "=" + encodeURIComponent(params[x]);
					}
					
					var paramString = parameters.join('&');
					
					NS.Log("--->POST: url " + url + " param: " + paramString);
					
					httpRequest.open("POST", url, true);
					httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					httpRequest.send(paramString);
	 	}
 	}
  };

angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
 .factory('Network', function() {
 
 	var gsBaseURL = "http://127.0.0.1/~Mac003/www/server/";
 	
 	return  { 		
     	baseURL : function () { return gsBaseURL; },
	 	loginURL : function() { return gsBaseURL + "login.php";},
	 	post : function(url, params, callback) {
		 		 	var httpRequest = new XMLHttpRequest();
				 	httpRequest.onreadystatechange = function()
				 	{
					 	if (httpRequest.readyState == 4 && httpRequest.status == 200) {
							 	callback(httpRequest.responseText, nil);
							 }else{
								 callback(nil, "An error has occured making the request");
							 }
					}
					
					var parameters = [];
					var x;
					for (x in params) {
					    parameters[parameters.length] = x + "=" + encodeURIComponent(params[x]);
					}
					
					var paramString = parameters.join('&');

					httpRequest.open("POST", url, true);
					httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					httpRequest.send(paramString);
	 	}
 	}
  })

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' },
    { id: 4, name: 'Ash Ketchum' },
    { id: 5, name: 'Ash Ketchum' },
    { id: 6, name: 'Ash Ketchum' },
    { id: 7, name: 'Ash Ketchum' },
    { id: 8, name: 'Ash Ketchum' },
    { id: 9, name: 'Ash Ketchum' },
    { id: 10, name: 'Ash Ketchum' },
    { id: 11, name: 'Ash Ketchum' },
    { id: 12, name: 'Ash Ketchum' },
    { id: 13, name: 'Ash Ketchum' },
    { id: 14, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
