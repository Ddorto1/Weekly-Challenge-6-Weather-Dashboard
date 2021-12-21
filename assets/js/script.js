// GIVEN a weather dashboard with form inputs
// WHEN I search for a city

var search = document.getElementbyID ("searchBtn");
var apiKey = "a645f2ef56d8f9246b6d07b17d34b65d";


 function searchCity() {
     //variable to get user search input
var userInput= document.getElementbyID ("input").val();
    // variables to get current weather and 5 day forecast
var currentWeather= "https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&appid="+ apiKey;
var forecastWeather= "https://api.openweathermap.org/data/2.5/forecast?q="+ userInput + "&appid="+ apiKey;

}

 search.addEventListener ("onClick", searchCity);

// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
