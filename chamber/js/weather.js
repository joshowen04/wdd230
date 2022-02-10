/*
window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
  selector: ".weatherWidget",
  apiKey: "QED3FC7NRFDX6TQVK3MHY77LA", //Sign up for your personal key
  location: "Las Condes, Chile", //Enter an address
  unitGroup: "metric", //"us" or "metric"
  forecastDays: 1, //how many days forecast to show
  title: "Las Condes, Chile", //optional title to show in the
  showTitle: true,
  showConditions: true,
});

(function () {
  var d = document,
    s = d.createElement("script");
  s.src =
    "https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
*/



let seconds = new Date().getTime() / 1000;

let weather = "";
let current = "";
let hight = "";
let low = "";
let icon;
let timeofday;
fetch("https://api.openweathermap.org/data/2.5/weather?lat=-33.4250618&lon=-70.5525557&units=imperial&appid=46987a429fccce36bf013c9455dc421d").then((response) => response.json())
        .then((data) => {
          weather = data;
          current = Math.round(weather.main.temp);
          high = Math.round(weather.main.temp_max);
          low = weather.main.temp_min;
          humidity = weather.main.humidity;
          wind = weather.wind.speed;
          conditions = weather.weather[0].main;
          conDesc = weather.weather[0].description;
          icon = weather.weather[0].icon;
          sunrise = weather.sys.sunrise;
          sunset = weather.sys.sunset;
          if (seconds <= sunrise){
            timeofday = "earlymorning"
            icon = "images/clearskymoon.png"
          }
          if (seconds > sunrise && seconds < sunset){
            timeofday = "daytime"
            icon = "images/clearsky1.png"

          }
          if (seconds >= sunset) {
            timeofday = "nighttime"
            icon = "images/clearskymoon.png"
          }
          let weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.setAttribute("src",icon);
          let currentSky = document.querySelector(".currentSky");
          currentSky.textContent = conditions;


          let currentTemp = document.querySelector(".currentTemp");
          let highTemp = document.querySelector(".highTemp");
          let lowTemp = document.querySelector(".lowTemp");
          let windSpeed = document.querySelector(".windSpeed");
          let windChill = document.querySelector(".windChill");
          currentTemp.textContent = current;
          /*
          highTemp.textContent = `${high} deg`;
          lowTemp.textContent = `${low} deg`;
          */
          windSpeed.textContent = wind;
          windChill.textContent = "";
          windchill(current,wind);


          console.log(timeofday,weather)});
