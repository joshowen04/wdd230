let seconds = new Date().getTime() / 1000;

let weather = "";
let current = "";
let hight = "";
let low = "";
let icon;
let timeofday;
let desc;
fetch("https://api.openweathermap.org/data/2.5/weather?lat=-33.4250618&lon=-70.5525557&units=imperial&appid=46987a429fccce36bf013c9455dc421d").then((response) => response.json())
        .then((data) => {
          weather = data;
          
          console.log(icon);
          current = Math.round(weather.main.temp);
          high = Math.round(weather.main.temp_max);
          low = weather.main.temp_min;
          humidity = weather.main.humidity;
          wind = weather.wind.speed;
          conditions = weather.weather[0].main;
          conDesc = weather.weather[0].description;
          icon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
          sunrise = weather.sys.sunrise;
          sunset = weather.sys.sunset;
          // if (seconds <= sunrise){
          //   timeofday = "earlymorning"
          //   icon = "images/clearskymoon.png"
          // }
          // if (seconds > sunrise && seconds < sunset){
          //   timeofday = "daytime"
          //   icon = "images/clearsky1.png"

          // }
          // if (seconds >= sunset) {
          //   timeofday = "nighttime"
          //   icon = "images/clearskymoon.png"
          // }
          let weatherIcon = document.querySelector(".weatherIcon");
          weatherIcon.setAttribute("src",icon);
          weatherIcon.setAttribute("alt",conDesc);
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
