// Problem: We need a simple way to look at a user's badge count and Javascript points.
// Solution: Use node.js to connect to Treehouses API to get profile information to print out.

var http = require("http");
var username = "chalkers";

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
	console.log(message);
}

// Connect to the API URL (http://teamtreehouse.com/username.json)

var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
	console.log(response.statusCode);

	// Read the data
	// Parse the data
	// Print the data out


	// Print out error details
	request.on("error", function(error){
		console.error('Boy. You fucked up on the request for ' + error.message);
	});

});

