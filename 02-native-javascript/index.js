function prettyCard(a) {

  let s = a.suit;
  let v = a.value;

  if (1 < v < 10) {
    v = v.toString();
  } else {
    switch (v) {
      case 1:
        v = 'A';
        break;
      case 10:
        v = 'T';
        break;
      case 11:
        v = 'J'
        break;
      case 12:
        v = 'Q';
        break;
      case 13:
        v = 'K';
      return v;
    }
  }

  switch (s) {
    case 'HEARTS':
      s = '\u2665';
      break
    case 'DIAMONDS':
      s = '\u2666';
      break
    case 'CLUBS':
      s = '\u2663';
      break
    case 'SPADES':
      s = '\u2660';
      break

  }
  console.log(typeof(v));
  console.log(typeof(s));
  return v + s
}
console.log(prettyCard({ suit: 'HEARTS', value: 3 }), '3♥')
console.log(prettyCard({ suit: 'SPADES', value: 2 }), '2♠')
console.log(prettyCard({ suit: 'DIAMONDS', value: 5 }), '5♦')
console.log(prettyCard({ suit: 'CLUBS', value: 9 }), '9♣')
