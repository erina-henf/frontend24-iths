let o = {
  a: [
    1, 2, {v: [1, {w: {x: 5}}]}],
  b: [4, 5, 6],
  c: [7, 8, 9]
}

console.log(o.a[2].v[1].w.x === 5);
/*
let a = [
  ["a"],
  ["b", "c"]
]

console.log('a.length', a.length);
console.log('a[0].length', a[0].length);
console.log('a.flat()', a.flat());


let a = [
  {a: 1, b:2, c: 3},
  {d: 1, e:2, f: 3},
  {g: 1, h:2, i: 3}
]


for (let i = 0; i < o.a.length || i < o.b.length || i < o.c.length; i++) {
  console.log(o.a[i]);
  console.log(o.b[i]);
  console.log(o.c[i]);
}
let a = [1, 2, 3]
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
*/
