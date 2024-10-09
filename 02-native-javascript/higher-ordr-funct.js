function filter(a, f) {
  let newA = []
  for(i = 0; i < a.length; i++) {
    if (f(a[i]) === true) {
      newA.push(a[i]);
    }
  }
  return newA;
}

console.log(filter([5, 10, 15], value => value === 5));

/*
function find(a, f) {
  for(i = 0; i < a.length; i++) {
    if (f(a[i]) === true) {
      return a[i]
    }
  }
}
console.log(find([1, 2, 3], function (n) { return n > 2 })) // 3
console.log(find(['Hej', 'Hejdå'], s => s.length === 5)) // Hejdå


function forEach(a, f) {
  for(i = 0; i < a.length; i++) {
    f(a[i]);
  }
}
forEach([1, 2, 3], alert)

function f() {
  let fa = () => 'Hello World!'
  return fa;
}
let g = f()
console.log(typeof g) // function
console.log(g()) // Hello World!


function call(a) {
  a('ruta');
}
call(prompt)
let a = [1, 2, 3, 4]
console.log(a.find(element => element > 3));

*/
