var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");


fetch('https://api.openweathermap.org/data/2.5/weather?q=city&appid=5a2115b1ceabbd9cda28fba660eafa25')
.then(res => res.json())
.then(data => console.log(data))