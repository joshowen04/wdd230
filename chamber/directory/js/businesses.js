const requestURL = "https://joshowen04.github.io/wdd230/chamber/data/data.json";
const cards = document.querySelector(".cards");

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
    let address = businesses.address;
    let phone = businesses.telephone;
    let url = businesses.url;
    let logosource = businesses.logoname;
    console.log(logosource)
    //setup html
    let card = document.createElement("section");

    //create the image
    let logo = document.createElement("img");
    logo.setAttribute("src", `images/${logosource}`);
    logo.setAttribute("alt",`logo of ${name}`);
    logo.setAttribute("loading", "lazy");

    //setup the text
    let addressLine = document.createElement("p")
    addressLine.innerHTML = address;
    let phoneLine = document.createElement("p")
    phoneLine.innerHTML = phone;
    let urlLine = document.createElement("p")
    urlLine.innerHTML = url;


    card.appendChild(logo);
    card.appendChild(addressLine);
    card.appendChild(phoneLine);
    card.appendChild(urlLine);
    cards.appendChild(card);

}
