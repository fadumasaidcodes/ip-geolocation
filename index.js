// Define the API settings
const settings = {
	"async": true, // Whether the request should be asynchronous or not
	"crossDomain": true, // Whether the request is cross-domain or not
	"url": "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/", // API endpoint
	"method": "GET", // HTTP request method
	"headers": { // API headers
		"X-RapidAPI-Key": "95d8d32b4dmsh981de6c214c9442p1873d3jsn0bc59b3ac168", // API key
		"X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com" // API host
	}
};

// Send the API request
$.ajax(settings).done(function (response) {
	// Log the API response to the console
	console.log(response);
    const ip = response.ip;

	// Create a paragraph element to display the IP address
	const ipElement = $("<p>").text(`Your IP address is: ${ip}`);

	// Append the paragraph element to the body of the HTML page
	$("body").append(ipElement)
});