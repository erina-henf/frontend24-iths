// PATCH-anrop med fetch, modda name och/eller population
// id; 4787e794-b3ac-4a63-bba0-03203f78e553

let idEntry = prompt('ange id');
let newCityEntry = prompt('Uppdatera stadens namn');
let populationEntry = Number(prompt('uppdatera befolkningsmängd'))

if(newCityEntry !== null && populationEntry !== 0 ) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry, population: populationEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
}
else if (newCityEntry !== null) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
}
else if (populationEntry !== 0 ){
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({population: populationEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
}


/*
if (newCityEntry === null && populationEntry !== null) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({population: populationEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
} else if (newCityEntry !== null && populationEntry === 0) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
} else {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry, population: populationEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
}


if(newCityEntry === true && populationEntry === true) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry, population: populationEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
} else if (newCityEntry === true && populationEntry === false || populationEntry === null) {
  fetch(`https://avancera.app/cities/${idEntry}`, {
    body: JSON.stringify({name: newCityEntry}),
    headers: {'Content-type': 'application/json'},
    method: 'PATCH'
  })
}
*/


// PATCH-anrop med fetch
/*
let idEntry = prompt('ange id');
let newCityEntry = prompt('nytt namn på stad?');

fetch(`https://avancera.app/cities/${idEntry}`, {
  body: JSON.stringify({name: newCityEntry}),
  headers: {'Content-type': 'application/json'},
  method: 'PATCH'
})
*/


// DELETE-anrop med fetch
/*
let idEntry = prompt('ange id för att ta bort objekt')

fetch(`https://avancera.app/cities/${idEntry}`, {method: 'DELETE'})
*/


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
