/*
false
o.hasOwnProperty('a')

true
Object.values(Object.assign(o, { a: 1 }, { b: 2 })).length === 5
*/
let o = {e: "a", d: 2, c: true}

/*

console.log(o.hasOwnProperty('a'));
console.log(Object.values(o));
console.log(Object.values(Object.assign(o, { a: 1 }, { b: 2 })).length === 5);
console.log(o);

console.log(Object.values(o)[0] === 'a' && Object.keys(o)[0] === 'b');
let n = 'name'
let person = {
  name: 'Erina',
  age: 38,
  gender: 'female'
}
console.log(person[n])
*/
