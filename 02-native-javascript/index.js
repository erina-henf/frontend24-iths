// DELETE-anrop med fetch



// PUT-anrop med fetch
/*
let idEntry = prompt('ange id')
let cityEntry = prompt('ange stad.');
let populationEntry = Number(prompt('ange befolkningsmängd.'));
// Number(“12ab”) would return NaN.

fetch(`https://avancera.app/cities/${idEntry}`, {
  body: `{"id": "${idEntry}", "name": "${cityEntry}", "population": ${populationEntry}}`,
  headers: {'Content-type': 'application/json'},
  method: 'PUT'
})
  .then(Response => Response.json())
  .then(result => console.log(result))
*/


// POST-anrop med fetch
/*
let cityEntry = prompt('ange stad.');
let populationEntry = Number(prompt('ange befolkningsmängd.'));
// Number(“12ab”) would return NaN.

fetch(`https://avancera.app/cities/`, {
  body: `{"name": "${cityEntry}", "population": ${populationEntry}}`,
  headers: {'Content-type': 'application/json'},
  method: 'POST'
})
  .then(Response => Response.json())
  .then(result => console.log(result))
*/
