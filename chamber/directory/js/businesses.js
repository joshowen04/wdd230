const requestURL = "https://joshowen04.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");
const listView = document.querySelector("#listButton");
const tileView = document.querySelector("#tilesButton");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];
    businesses.forEach(displaybusinesses);
  });

function displaybusinesses(businesses) {
  //get variables
  let name = businesses.name;
  console.log(name);
  let address = businesses.address;
  let phone = businesses.telephone;
  let url = businesses.url;
  let logosource = businesses.logoname;
  //setup html
  let card = document.createElement("section");
  //create the image
  let logo = document.createElement("img");
  logo.setAttribute("src", `images/${logosource}`);
  logo.setAttribute("alt", `logo of ${name}`);
  logo.setAttribute("loading", "lazy");
  logo.classList.add("logos");
  //setup the text
  let nameLine = document.createElement("p");
  nameLine.innerHTML = name;
  nameLine.classList.add("businessName");
  let addressLine = document.createElement("p");
  addressLine.innerHTML = address;
  let phoneLine = document.createElement("p");
  phoneLine.innerHTML = phone;
  let link = document.createElement("a");
  link.href = url;
  link.innerText = url;

  card.appendChild(logo);
  card.appendChild(nameLine);
  card.appendChild(addressLine);
  card.appendChild(phoneLine);
  card.appendChild(link);
  cards.appendChild(card);
}

listView.addEventListener("click", function () {
  cards.style.display = "block";
  let logo = document.querySelectorAll(".logos");
  logo.forEach((x) => (x.style.display = "none"));

  let card = document.querySelectorAll("section");
  let intViewportWidth = window.innerWidth;
  if (intViewportWidth > 600) {
    card.forEach(function (x) {
      x.style.display = "grid";
      x.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    });
  } else {
    card.forEach((x) => (x.style.textAlign = "left"));
  }
  card.forEach(function (x) {
      x.style.borderRadius = "0";
      x.style.boxShadow = "none";
      x.style.backgroundColor = "transparent";
  });
  let even = document.querySelectorAll(".cards section:nth-child(even)")
  even.forEach(function (x) {
    x.style.backgroundColor = "rgb(53, 53, 53)";
  });
  let odds = document.querySelectorAll(".cards section:nth-child(odd)")
  odds.forEach(function (x) {
    x.style.backgroundColor = "rgb(36, 123, 160)";
  });

  let businessName = document.querySelectorAll(".businessName");
  businessName.forEach((x) => (x.style.display = "inline"));
});



tileView.addEventListener("click", function () {
  cards.style.display = "grid";
  let logo = document.querySelectorAll(".logos");
  logo.forEach((x) => (x.style.display = "inline"));

  let card = document.querySelectorAll("section");
  card.forEach(function (x) {
    x.style.display = "block";
    x.style.textAlign = "center";
    x.style.borderRadius = "5px";
    x.style.boxShadow = "2px 2px 2px var(--accent-color3)";
    x.style.backgroundColor = "rgb(36, 123, 160)"
});
  let businessName = document.querySelectorAll(".businessName");
  businessName.forEach((x) => (x.style.display = "none"));
});
