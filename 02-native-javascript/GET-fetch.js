let cities = prompt('cities submit:');
let population = prompt('pop submit:');

fetch(`https://avancera.app/cities/?name=${cities}&minPopulation=${population}`)
  .then(Response => Response.json())
  .then(data => {console.log(data)})

/*
fetch(`https://avancera.app/cities/?name=${prompt('cities submit:')}&minPopulation=${prompt('pop submit:')}`)
  .then(Response => Response.json())
  .then(data => console.log(data))

let id = prompt('id submit:');

if(id.length > 10) {
  fetch(`https://avancera.app/cities/${id}`)
  .then(Response => Response.json())
  .then(result => {
    console.log(result);
  })
} else {
  alert('Too short id')
}

let promise = fetch('https://avancera.app/cities/');

promise
  .then(response => {
    console.log(response);

    let someOtherPromise = response.json();
    return someOtherPromise;
  })
  .then(result => {
    console.log(result);
  })
*/
