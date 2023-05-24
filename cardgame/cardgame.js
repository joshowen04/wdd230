// Card class
class Card {
  constructor(type, imageName, instructions, bonus) {
    this.type = type;
    this.imageName = imageName;
    this.instructions = instructions;
    this.bonus = bonus;
    this.bonusActive = false;
  }

  activateBonus() {
    this.bonusActive = true;
    // Add your bonus activation logic here
    console.log(`Bonus activated for ${this.type} card!`);
  }

  deactivateBonus() {
    this.bonusActive = false;
    // Add your bonus deactivation logic here
    console.log(`Bonus deactivated for ${this.type} card.`);
  }
}

// Create an array of cards
const cards = [
  new Card('Type 1', 'image1.jpg', 'Instructions for Type 1 card', 'Bonus 1'),
  new Card('Type 2', 'image2.jpg', 'Instructions for Type 2 card', 'Bonus 2'),
  // Add more cards with different properties
  // ...
];

// Shuffle function to randomize the array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display a random card
function displayRandomCard() {
  // Get a random card from the array
  const randomIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomIndex];

  // Remove the card from the array
  cards.splice(randomIndex, 1);

  // Shuffle the array to add the card back in a random position
  shuffle(cards);

  // Display the card details in HTML
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = `
    <img src="${randomCard.imageName}" alt="Card Image">
    <h3>${randomCard.type}</h3>
    <p>${randomCard.instructions}</p>
    <p>Bonus: ${randomCard.bonus}</p>
  `;

  // Add a click event listener to the displayed card
  cardContainer.addEventListener('click', function () {
    displayRandomCard();
  });
}

// Add a button to trigger the display of a random card
const button = document.createElement('button');
button.textContent = 'Draw a Card';
button.addEventListener('click', displayRandomCard);

// Append the button to the HTML body
document.body.appendChild(button);
