const templeparent = document.querySelector("#availableTemples");
let templeList = [];
const output = (temples) => {
  //console.log(temple.templeName)
  temples.forEach((temples) => {
    let card = document.createElement("section");
    card.classList.add("templeCard")
    let templeName = document.createElement("h3");

    templeName.innerText = temples.templeName;
    card.appendChild(templeName);

    let location = document.createElement("h4");
    location.innerText = temples.location;
    // let dedicated = document.createElement("h4");
    // dedicated.innerText = temples.dedicated;
    // card.appendChild(dedicated);
    let imageUrl = document.createElement("img");
    imageUrl.src = temples.imageUrl;
    imageUrl.alt = temples.templeName;
    card.appendChild(imageUrl);
    card.appendChild(location);

    templeparent.appendChild(card);
  });
};

function addWeather(card) {
  weatherSection = document.createElement("section");
  weatherSection.classList.add("weatherSection");
  weatherSection.innerText="Weather";
  card.appendChild(weatherSection);
  console.log(card);
}
// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json")
  .then((response) => response.json())
  .then((data) => {
    templeList = data;
    output(templeList);
    let allTemples = document.querySelectorAll(".templeCard");
    
    allTemples = [...allTemples]
    
    allTemples.map(addWeather);

  });

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


/* -- My code */
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
