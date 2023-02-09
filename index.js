// Store the API key and weather URL in variables
const apiKey = "5f81365ae536b7da813d034c891315db";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Define the IP geolocation API settings
const geolocationSettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "95d8d32b4dmsh981de6c214c9442p1873d3jsn0bc59b3ac168",
        "X-RapidAPI-Host": "ip-geolocation-ipwhois-io.p.rapidapi.com"
    }
};

// Send the IP geolocation API request
$.ajax(geolocationSettings).done(function (response) {
    // Log the API response to the console
    console.log(response);

    // Extract the city and country code from the response data
    var city = response.city;
    var countryCode = response.country_code;

    // Use the city and country code to create the URL for the weather API request
    var weatherApiUrl = `${weatherUrl}?q=${city},${countryCode}&appid=${apiKey}`;

    // Define the weather API settings
    const weatherSettings = {
        "async": true,
        "crossDomain": true,
        "url": weatherApiUrl,
        "method": "GET"
    };
        // Send the weather API request
        $.ajax(weatherSettings).done(function (weatherResponse) {
            // Log the API response to the console
            console.log(weatherResponse);
    
            // Extract the relevant weather information from the response data
            var weatherDescription = weatherResponse.weather[0].description;
            var temperature = (weatherResponse.main.temp - 273.15).toFixed(1); // convert from Kelvin to Celsius
            var iconId = weatherResponse.weather[0].icon;
            var iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    
            // Create a paragraph element to display the weather information
            const weatherElement = $("<p>").text(`The current weather in ${city} is ${weatherDescription} with a temperature of ${temperature}°C.`);
            // Create an image element to display the weather icon
            const iconElement = $("<img>").attr("src", iconUrl).attr("alt", weatherDescription);
    
            // Append the weather information and weather icon to the body of the HTML page
            $("body").append(weatherElement);
            $("body").append(iconElement);
        });
    });