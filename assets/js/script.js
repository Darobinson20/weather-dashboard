var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("city-name");
    const nameEl = document.getElementById("current-pic")
    const currentTempEl = document.getElementById("Temp:")
    const currentwindEl = document.getElementById("Wind:")
    const currenthumidityEl = document.getElementById("Humidity:")
    const currentUVEl = document.getElementById("UV-Index:")
    var todaysweatherEL = document.getElementById("todays-weather")
    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
}

//API Key
const APIKey = "5a2115b1ceabbd9cda28fba660eafa25";

var getWeatherData = function(cityName) {

    var apiUrl= "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

    console.log(something);
    
   
}
