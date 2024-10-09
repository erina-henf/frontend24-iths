// Url till api:et
// Här definierar vi adressen till servern där all data ligger
const apiURL = "https://avancera.app/cities/";

//Richard hämtar alltid först referenser till sina DOM-element
// Man hämtar alltså alla våra HTML-element och lägger dessa i variabler

//Listan där alla städer kommer visas
const cityList = document.getElementById('cityList');
//formuläret för att lägga till en ny stad
const addCityForm = document.getElementById('addCityForm');
// Inmatningsfält för stadens namn
const cityNameInput = document.getElementById('cityName');
// Inmatningsfält för stadens befolkningen
const cityPopulationInput = document.getElementById('cityPopulation');

// f() för att hämta och visa städer
async function fetchCities() {
  // skicka förfrågan, be om respone
  try {
    const response = await fetch(apiURL);
    if(!response.ok) {
      // vi vill få en status-text
      throw new Error(`Något gick fel med att hämta städer: ${response.status} ${response.statusText}`)
    }
    const cities = await response.json();

    // f() för att rensa listan innan vi lägger till nya städer
    cityList.innerHTML = "";
    // vi går igenom varje stad i den hämtade datan
    cities.forEach(city => {
      const li = document.createElement('li'); // skapa en li för varje stad
      li.className = "city-item"; // skapar classs för framtida styling css
      li.textContent = `Stad: ${city.name}, Befolkning: ${city.population}`// sätter text-innehåll till stadens namn och befolkning

    const delBtn = document.createElement('button'); // skapa knapp för att kunna ta bort städer
    delBtn.textContent = 'Ta bort';
    delBtn.className = 'btn btn-delete'
    // behöver nå id för att kunna ta bort staden (DELETE anrop fetch)
    delBtn.addEventListener('click', () => deleteCity(city.id))

    // lägger till knappen för varje listobjekt
    li.appendChild(delBtn);
    // lägg till ny list-punkt
    cityList.appendChild(li);
    })
  } catch(error) {
    console.log(`Error: `, error);
    alert(`: `)
  }
}

// function för at ta bort en stad
async function deleteCity(id) {
  //fråga användaren om de är säkra på borttagningen
  if(!confirm('Är du säker?')) {
    return;
  }
  try {
    const respone = await fetch(`${apiURL} ${id}`, {method: 'DELETE'});
    // https://avancera.app/cities/(id-nummer), DELETE

    if(!respone.ok) {
      throw new Error('gick ej ta bort');
    }
    fetchCities();
  } catch(error) {

  }
}

//när sidan laddas ska hämta och visa städer
// koden enedanför kommer köras när hela dokumentet har laddats
window.addEventListener('DOMContentLoaded', fetchCities);
