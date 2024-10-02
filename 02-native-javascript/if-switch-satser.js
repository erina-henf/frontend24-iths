/*
let age = prompt("Ange din ålder")

if (age >= 18) {
  alert("Vuxen")
} else {
  alert("Ungdom")
}


const userName = prompt("Användarnamn")
const password = prompt("Lösenord")

if (userName === "alice" && password === "secret") {
  alert("Inloggad!")
} else {
  alert("Fel användarnamn eller lösenord!")
}

let number = prompt("Ange ett nummer");

switch (number) {
  case '1': {
    alert("ett");
    break

  } case '2': {
    alert("två");
    break

  } case '3': {
    alert("tre");
    break

  } case '4': {
    alert("fyra");
    break

  } case '5': {
    alert("fem");
    break

  } case '6': {
    alert("sex");
    break

  } case '7': {
    alert("sju");
    break

  } case '8': {
    alert("åtta");
    break

  } case '9': {
    alert("nio");
    break

  } case '10': {
    alert("tio");
    break

  } case '11': {
    alert("elva");
    break

  } case '12': {
    alert("tolv");
    break

  } default: {
    alert(number);
  }
}

*/



let belopp = prompt("Vg skriv belopp");
let sum = belopp * 0.8;
console.log(Boolean(belopp))


if (belopp !== null) {
  if (isNaN(belopp)) {
    console.log("det är inte ett nummer");
    console.log(isNaN(belopp));
    alert("Du skrev inte in ett nummer.")
  } else {
    console.log("det är ett nummer");
    alert (sum);
  }
} else {
  console.log("hejdå");
}
