const requestURL = "https://joshowen04.github.io/wdd230/chamber/data/data.json";
const spotlight1 = document.querySelector("#spotlight1");
const spotlight2 = document.querySelector("#spotlight2");
const spotlight3 = document.querySelector("#spotlight3");
let counter = 0;
let index;
let displayed = [];
/*
<h2 class="spotlight_headers">Domus Tech</h2>
<a href="https://domustech.cl/"><img src="images/rsz_1domustech.png"
        alt="Domus Tech Instagram discount image"></a>
<a href="https://domustech.cl/">https://domustech.cl/</a>
<p>Av. Pedro de Valdivia 0193, Of. 71, Providencia</p>
*/

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["businesses"];
    /*businesses.forEach(displaybusinesses);*/
    while (counter < 3) {
        index = Math.floor((Math.random() * (businesses.length -1)) + 1);
        if (displayed.includes(index) === false){
            displayed.push(index)
            displaybusinesses(businesses[index])
        };
    };
    console.log(displayed)
  });

function displaybusinesses(businesses) {
  //get variables
  let memberLevel = businesses.membership;
  let name = businesses.name;
  console.log(counter,name, memberLevel)
  if (counter < 3){
    if (memberLevel === "gold" || memberLevel === "silver") {

        counter ++
        
        let cards = document.querySelector(`#spotlight${counter}`)
        let name = businesses.name;
        let address = businesses.address;
        let phone = businesses.telephone;
        let url = businesses.url;
        let logosource = businesses.logoname;
        //setup html
        let card = document.createElement("div");
        //create the image
        let logo = document.createElement("img");
        logo.setAttribute("src", `directory/images/${logosource}`);
        logo.setAttribute("alt", `logo of ${name}`);
        logo.setAttribute("loading", "lazy");
        //setup the text
        let nameLine = document.createElement("h2");
        nameLine.innerHTML = name;
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
    };
  };
}
