/*
Flytta ett random kort och lägg det längst bak. pop() kan då användas för att dra sista kortet som ju då är valt random.
*/


// Kortleken
let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
let deck = [];

for(i = 0; i < suits.length; i++) {
  for(j = 1; j < 14; j++) {
    deck.push({suit: suits[i], value: j})
  }
}
// console.log('Sorterad kortlek', deck);

deck.sort(() => Math.random() - 0.5);
// console.log('Blandad kortlek', deck);

function draw(a) {
  return a.pop()
}
console.log(deck.length);

/*
// Skapa kortleken
function createDeck() {
  let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
  let deck = [];

  for(i = 0; i < suits.length; i++) {
    for(j = 1; j < 14; j++) {
      deck.push({suit: suits[i], value: j})
    }
  }
  console.log(deck.length);
  return deck;
}
createDeck();

// console.log(createDeck());

// Skapa random int - funktion

// console.log(randomNumber());


// Skapa dra-kort-funktion

*/
