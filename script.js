
let cardVerso = document.querySelector("#card");
let cardFrente = document.querySelector("#card-2");
let cardVerso2 = document.querySelector("#card-3");
let cardFrente2 = document.querySelector("#card-4");

let Contador = [];

function mudarCard() {
  cardVerso.style.display = "none";
  cardFrente.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
}

function mudarCard2() {
  cardVerso2.style.display = "none";
  cardFrente2.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente.style.display == "block" && cardFrente2.style.display == "block") {
    
  }
}

function intervalo() {
  if (Contador.length >= 2) {
    cardVerso.style.display = "block";
    cardFrente.style.display = "none";
    cardVerso2.style.display = "block";
    cardFrente2.style.display = "none";
    cardFrente3.style.display = "none";
    cardVerso3.style.display = "block";
    cardVerso4.style.display = "block";
    cardFrente4.style.display = "none";
    console.log("ok");
    Contador.splice(0,2)
  } else {
    console.log("Não é igual a 2");
  }
}

//Nova seção de cards

let cardVerso3 = document.querySelector("#card-5");
let cardFrente3 = document.querySelector("#card-6");
let cardVerso4 = document.querySelector("#card-7");
let cardFrente4 = document.querySelector("#card-8");


function mudarCard3() {
    cardVerso3.style.display = "none";
    cardFrente3.style.display = "block";
    let contador = 1;
    console.log(contador);
    Contador.push(contador);
}

function mudarCard4() {
    cardVerso4.style.display = "none";
    cardFrente4.style.display = "block";
    let contador = 1;
    console.log(contador);
    Contador.push(contador);
}