function createDeck() {
  let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
  let deck = [];

  for(i = 0; i < suits.length; i++) {
    for(j = 1; j < 14; j++) {
      deck.push({suit: suits[i], value: j})
    }
  }
  return deck;
}

const deck = createDeck();

function shuffle(theDeck) {
  let currentIndex = theDeck.length, randomIndex;
  ci = currentIndex;

  while(ci !== 0) { // så länge det finns element kvar i listan(kortleken)
    randomIndex = Math.floor(Math.random() * ci);
    ri = randomIndex;
    ci--;
    [theDeck[ci], theDeck[ri]] = [theDeck[ri], theDeck[ci]];
  }
  console.log(theDeck);
}
shuffle(deck);
