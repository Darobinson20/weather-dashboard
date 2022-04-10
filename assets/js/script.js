var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");

//API Key
const APIKey = "5a2115b1ceabbd9cda28fba660eafa25"


    
fetch('https://api.openweathermap.org/data/2.5/weather?q=city&appid=5a2115b1ceabbd9cda28fba660eafa25')
.then(res => res.json())
.then(data => console.log(data))

function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("city-name");
    const nameEl = document.getElementById("current-pic")
    const currentTemp = document.getElementById("Temp:")
     

    
}