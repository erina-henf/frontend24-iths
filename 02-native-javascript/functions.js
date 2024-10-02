function sum(...args) {
  let total = 0;
  for(let i of args) {
    total += i;
  } return total;
}
console.log(sum());

/*
function repeat(a, b) {
  list = []
  for(i = 0; i < b; i++) {
    list.push(a);
  }
  return list
}
console.log(repeat('hum', 5));

function reverse(a) {
  revList = [];
  for(i = a.length-1; i >= 0; i--) {
    revList.push(a[i])
  }
  return revList
}
console.log(reverse([1, 2, 3, 4]))
*/


/*

let lookup = function(o, s) {
  console.log(o[s]);
}
lookup({ a: 1, b: 2, c: 3 }, 'c')

let logLength =  function(a) {
  console.log(a.length);
}
logLength([])
logLength([1, 2, 3])
logLength(['hejsan', 'svejsan'])

let concatenateAndLog = function(a, b) {
  console.log(a + b);
}
console.log(concatenateAndLog("Hello ", "World!"));
console.log(concatenateAndLog("abc", "def"));

let displayDialogBox = function(text) {
  alert(text)
}
displayDialogBox("Hello")
displayDialogBox("World")
*/
