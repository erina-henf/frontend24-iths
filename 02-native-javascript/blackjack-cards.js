function prettyCard(card) {
  let cardSuit = card.suit;
  let cardValue = card.value;

  switch (cardValue) {
    case 1:
      cardValue = 'A';
      break;
    case 10:
      cardValue = 'T';
      break;
    case 11:
      cardValue = 'J'
      break;
    case 12:
      cardValue = 'Q';
      break;
    case 13:
      cardValue = 'K';
  }
  switch (cardSuit) {
    case 'HEARTS':
      cardSuit = '\u2665';
      break
    case 'DIAMONDS':
      cardSuit = '\u2666';
      break
    case 'CLUBS':
      cardSuit = '\u2663';
      break
    case 'SPADES':
      cardSuit = '\u2660';
      break
  }
  let cardString = cardValue + cardSuit;
  console.log(typeof(cardString));
  return cardString
}
console.log(prettyCard({ suit: 'HEARTS', value: 1 }), 'A♥')
console.log(prettyCard({ suit: 'SPADES', value: 2 }), '2♠')
console.log(prettyCard({ suit: 'DIAMONDS', value: 5 }), '5♦')
console.log(prettyCard({ suit: 'CLUBS', value: 12 }), 'Q♣')
