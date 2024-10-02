/*
let b = 0;

while (b < 3) {
  console.log(b);
  ++b
}

for (let b = 0; b < 3; ++b) {
  console.log(b);
}
*/
let number;

console.log(number);
console.log(isNaN(number));
console.log(typeof(number));

/* AVBRYT
null
false
object
*/

/* SIFFROR
4 (ex)
false
string
*/

/* TEXT
sge (ex)
true
string
*/

while (number === undefined || number === null || isNaN(number) === true ) {
  number = prompt("Ange nummer");
  for (number; number > 0; --number) {
    alert(number);
  }
}


/*
while (number === null || isNaN(number) === true) {
  number = 1;
  alert(number);
}


if (isNaN(number) === false) {
  number = 0;
  for (number; number > 0; --number) {

  }
}
while (number )

while (isNaN(number) === false) {
  number = 0;
}
*/
/*
for (number; isNaN(number) === true; )
while (isNaN(number) === false && number > 0) {
  alert(number);
  --number;
}

while (number > 0) {
  alert(number);
  --number;
}

for (number; number > 0; --number) {
  alert(number);
}
*/
