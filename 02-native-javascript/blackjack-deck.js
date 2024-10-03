let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS'];
let deck = []

for(i = 0; i < suits.length; i++) {
   for (j = 1; j < 14; j++) {
    deck.push({suit: suits[i], value: j});
   }
}

console.log(deck);

/*
Tilldela en tom array till en variabel/konstant, deck, som ska representera samtliga kort i en kortlek, och lägg in 52 objekt i denna array (med push-instruktionen). Det ska finnas ett objekt för varje kort i en kortlek.

Ex.
let a = [
a[0]  {suits: 'HEARTS', value: 1},
a[1]  {suits: 'HEARTS', value: 2},
a[2]  {suits: 'HEARTS', value: 3}
]
*/
