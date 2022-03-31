const requestURL =
  "https://joshowen04.github.io/wdd230/TempleInnAndSuites/data/temples.json";
let slideIndex = 1;

const templeparent = document.querySelector(".templeCards");
let templeList = [];
const output = (temples) => {
  //console.log(temple.templeName)
  temples.forEach((temples) => {
    let card = document.createElement("section");
    card.classList.add("templeCard");
    card.classList.add("mySlides");
    card.classList.add("fade");
    let templeName = document.createElement("h3");
    //let link = temples.link;
    templeName.innerText = temples.templeName;
    console.log(temples.templeName);
    templeName.classList.add("text");

    card.appendChild(templeName);


    let imageUrl = document.createElement("img");
    imageUrl.src = temples.imageUrl;
    imageUrl.alt = temples.templeName;
    card.appendChild(imageUrl);



    let location = document.createElement("h4");
    location.innerText = `Located in: ${temples.address}`;
    card.appendChild(location);

    let number = document.createElement("h4");
    number.innerText = `Phone Number: ${temples.number}`;
    card.appendChild(number);

    let ordinance = document.createElement("h4");
    ordinance.innerHTML = `Link to External Site to Schedule Ordinances: <a href=${temples.ordinance}>Here</a>`;
    card.appendChild(ordinance);

    let dedicated = document.createElement("h4");
    dedicated.innerText = `Dedicated: ${temples.dedicated}`;
    card.appendChild(dedicated);
    
    let services = document.createElement("div");
    services.classList.add("servicesDiv");
    let availableServices = temples.services;
    let servicesText = "<h4>Available Services:</h4>";
    availableServices = availableServices.split(" / ");
    for (let i = 0; i < availableServices.length; i++) { 
      servicesText += `<p>${availableServices[i]}</p>`;
    
    }
    services.innerHTML = servicesText;
    card.appendChild(services);

    let closures = document.createElement("div");
    closures.classList.add("closuresDiv");
    let currentClosures = temples.closure;
    let closuresText = "<h4>Closures 2022:</h4>";
    currentClosures = currentClosures.split(" / ");
    for (let i = 0; i < currentClosures.length; i++) { 
      closuresText += `<p>${currentClosures[i]}</p>`;
    
    }
    closures.innerHTML = closuresText;
    card.appendChild(closures);
    let lat = temples.lat;
    let lon = temples.lon;
    // fetch(
    //   `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=46987a429fccce36bf013c9455dc421d`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     weather = data;
    //     let alerts = weather.alerts;
    //     if (alerts) {
    //       alert(`${alerts.event} advisory for ${temples.location}\n${alerts.description} `);
    //     }
    //     console.log(weather);
    //     let weatherinfo = document.createElement("div");

    //     /* Current Temp */
    //     let temp = weather.current.temp;
    //     let conditions = weather.current.weather[0].main;
    //     let conDesc = weather.current.weather[0].description;
    //     let humidity = weather.current.humidity;
    //     let icon = `https://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`;

    //     /*future dates */

    //     let one = parseInt(`${weather.daily[1].dt}000`);
    //     let oneFullDate = new Date(one);

    //     let oneRefinedDate = `${oneFullDate.getDate()}/${
    //       oneFullDate.getMonth() + 1
    //     }/${oneFullDate.getFullYear()}`;

    //     let two = parseInt(`${weather.daily[2].dt}000`);
    //     let twoFullDate = new Date(two);

    //     let twoRefinedDate = `${twoFullDate.getDate()}/${
    //       twoFullDate.getMonth() + 1
    //     }/${twoFullDate.getFullYear()}`;

    //     let three = parseInt(`${weather.daily[3].dt}000`);
    //     let threeFullDate = new Date(three);

    //     let threeRefinedDate = `${threeFullDate.getDate()}/${
    //       threeFullDate.getMonth() + 1
    //     }/${threeFullDate.getFullYear()}`;

    //     /*future temps*/
    //     let oneTemp = weather.daily[1].temp.day;
    //     let twoTemp = weather.daily[2].temp.day;
    //     let threeTemp = weather.daily[3].temp.day;

    //     let currentConditions = document.createElement("div");
    //     currentConditions.innerText = `Current: ${conDesc}, ${temp}\u00B0 F and ${humidity}% Humidity`;

    //     let oneWeather = document.createElement("div");
    //     oneWeather.innerHTML = `<h4>${oneRefinedDate}</h4><p>${oneTemp}\u00B0 F</p>`;
    //     let twoWeather = document.createElement("div");
    //     twoWeather.innerHTML = `<h4>${twoRefinedDate}</h4><p>${twoTemp}\u00B0 F</p>`;
    //     let threeWeather = document.createElement("div");
    //     threeWeather.innerHTML = `<h4>${threeRefinedDate}</h4><p>${threeTemp}\u00B0 F</p>`;

    //     let forecast = document.createElement("div");
    //     forecast.append(oneWeather, twoWeather, threeWeather);

    //     weatherinfo.append(currentConditions, forecast);
    //     weatherinfo.classList.add("weatherinfo");
    //     forecast.classList.add("weatherForecast");

    //     card.appendChild(weatherinfo);
    //     templeparent.appendChild(card);
    //     showSlides(slideIndex);
    //   });
    templeparent.appendChild(card);
    showSlides(slideIndex);
  });
};

fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    templeList = data;
    output(templeList);
  });

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //console.log(`slides  -  ${slides[0]}`);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

/*

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples



function reset() {
  let articleElements = document.querySelectorAll("#temples article");
  for (const element of articleElements) {
    // console.log(element)
    templeparent.removeChild(element);
  }
}

function sortBy() {
  reset();
  let sortOption = document.querySelector("#sortBy").value;
  console.log(sortOption);

  if (sortOption === "templeNameAscending") {
    output(templeList.sort((t1, t2) => (t1.templeName < t2.templeName ? -1 : 1)));
    console.log(templeList);
  } else if (sortOption === "templeNameDescending") {
    output(
      templeList.sort((t1, t2) => (t1.templeName > t2.templeName ? -1 : 1))
    );
    console.log(templeList);

  }
};

const filterBy = () => {
    reset();

    let filter = document.querySelector('#filterBy').value;

    switch (filter) {
        case 'before2000':
            
            output(templeList.filter(temple => temple.dedicated.indexOf(' 20') === -1 ));
            break;
        case 'after2000':
            output(templeList.filter(temple => temple.dedicated.indexOf(' 20') !== -1 ));
            break;
    }
}



document.querySelector("#sortBy").addEventListener("change", sortBy);
document.querySelector("#filterBy").addEventListener("change", filterBy);
*/
