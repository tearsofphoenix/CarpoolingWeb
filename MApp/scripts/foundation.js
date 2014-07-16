var NS = {
	DEBUG : 1,	
	Log : function(arg) {
		if(NS.DEBUG) { console.log(arguments); }
	},
	fetchArgs : function(dict, keys) {
		var result = {};
		for (var i = 0; i < keys.length; ++i) {
			var k = keys[i];
			result[k] = dict[k];
		}
		return result;		
	}	
};

var Network = function() {
 
/*  	var gsBaseURL = "http://127.0.0.1/~Mac003/www/server/"; */
/*  	var gsBaseURL = "http://192.168.1.6/~veritas/CarpoolingWeb/server/"; */
 	var gsBaseURL = "http://jewery.info/carpooling/";
 	
 	return  { 		
     	baseURL : function () { return gsBaseURL; },
	 	loginURL : function() { return gsBaseURL + "account.php";},
	 	pathURL : function() { return gsBaseURL + "path.php";},
	 	
	 	post : function(url, params, callback) {
		 		 	var httpRequest = new XMLHttpRequest();
				 	httpRequest.onreadystatechange = function()
				 	{
					 	if (httpRequest.readyState == 4 && httpRequest.status == 200)
					 	 {
					 	 	var text = httpRequest.responseText;
					 	  	 NS.Log(text);
					 	  	 var obj = null;
					 	  	 try
					 	  	 {
					 	  	 	obj	= JSON.parse(text); 
					 	  	 }catch (error)
					 	  	 {
						 	  	 alert(text);
					 	  	 }
					 	  	 					 	  	 
					 	  	 callback(obj, null);
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
