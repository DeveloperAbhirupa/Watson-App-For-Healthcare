// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://gateway-lon.watsonplatform.net/personality-insights/api', true);

request.onload = function () {
 // Begin accessing JSON data here
 }
}

// Send request
request.send();
