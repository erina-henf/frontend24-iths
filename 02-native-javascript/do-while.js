let x;

do {
  x = prompt('namn?');
} while (x === null)

console.log(x);
console.log(isNaN(x));
console.log(typeof(x));

/*
OK-knappen
  console.log(x); BLANK
  console.log(isNaN(x)); FALSE
  console.log(typeof(x)); STRING

avbryt-knappen
  prompt fortsätter loopa eftersom x = null
*/
