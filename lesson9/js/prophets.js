const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");


function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let figure = document.createElement("figure")
  let figcaption = document.createElement("figcaption")
  let portrait = document.createElement("img");


  figcaption.innerHTML = `<p>Date of Birth: ${prophet.birthdate} </p><p>Place of Birth: ${prophet.birthplace}</p>`;
  figure.appendChild(figcaption);
  figure.appendChild(portrait);
  card.setAttribute("title", `${prophet.name} ${prophet.lastname}`);
  
  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  let number = 0;
  if (prophet.order === 1){
    number = `${prophet.order}st`
  }
  else if (prophet.order === 2){
    number = `${prophet.order}nd`
  }
  else if (prophet.order === 3){
    number = `${prophet.order}rd`
  }
  else {
    number = `${prophet.order}th`
  };

  portrait.setAttribute("src", prophet.imageurl);
  portrait.setAttribute(
    "alt",
    `Portait of ${prophet.name} ${prophet.lastname} - ${number} Latter-Day President`
  );
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);


  
  card.appendChild(figure);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}






fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);

    console.table(prophets);
  });
