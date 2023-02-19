let Contador = [];
   // FAZER A CARTA VOLTAR PARA O ESTADO INICIAL


function intervalo() {
  if (Contador.length == 3) {
  
    cardVerso.style.display = "block";
    cardFrente.style.display = "none";

    cardVerso2.style.display = "block";
    cardFrente2.style.display = "none";

    cardVerso3.style.display = "block";
    cardFrente3.style.display = "none";

    cardVerso4.style.display = "block";
    cardFrente4.style.display = "none";

    cardVerso5.style.display = "block";
    cardFrente5.style.display = "none";

    cardVerso6.style.display = "block";
    cardFrente6.style.display = "none";

    cardVerso7.style.display = "block";
    cardFrente7.style.display = "none";

    cardVerso8.style.display = "block";
    cardFrente8.style.display = "none";

    cardVerso9.style.display = "block";
    cardFrente9.style.display = "none";

    cardVerso10.style.display = "block";
    cardFrente10.style.display = "none";


    console.log("ok");
    Contador.splice(0,3)

  } else {
    console.log("Não é igual a 2");
  }
}


  //Nova seção de cards
let cardVerso = document.querySelector("#card");
let cardFrente = document.querySelector("#card-2");
let cardVerso2 = document.querySelector("#card-3");
let cardFrente2 = document.querySelector("#card-4");

function mudarCard() {
  cardVerso.style.display = "none";
  cardFrente.style.display = "block";

  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente.style.display == "block" && cardFrente2.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }

}

function mudarCard2() {
  cardVerso2.style.display = "none";
  cardFrente2.style.display = "block";
  
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente.style.display == "block" && cardFrente2.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
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
    if(cardFrente3.style.display == "block" && cardFrente4.style.display == "block" && Contador.length < 3) {
      Contador.splice(0,3)
    }else{
      intervalo()
    }
}

function mudarCard4() {
    cardVerso4.style.display = "none";
    cardFrente4.style.display = "block";
    let contador = 1;
    console.log(contador);
    Contador.push(contador);
    if(cardFrente3.style.display == "block" && cardFrente4.style.display == "block" && Contador.length < 3) {
      Contador.splice(0,3)
    }else{
      intervalo()
    }
}

//Nova seção de cards

let cardVerso5 = document.querySelector("#card-9");
let cardFrente5 = document.querySelector("#card-10");
let cardVerso6 = document.querySelector("#card-11");
let cardFrente6 = document.querySelector("#card-12");

function mudarCard5() {
  cardVerso5.style.display = "none";
  cardFrente5.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente5.style.display == "block" && cardFrente6.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}

function mudarCard6() {
  cardVerso6.style.display = "none";
  cardFrente6.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente5.style.display == "block" && cardFrente6.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}

//Nova seção de cards

let cardVerso7 = document.querySelector("#card-13");
let cardFrente7 = document.querySelector("#card-14");
let cardVerso8 = document.querySelector("#card-15");
let cardFrente8 = document.querySelector("#card-16");

function mudarCard7() {
  cardVerso7.style.display = "none";
  cardFrente7.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente7.style.display == "block" && cardFrente8.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}

function mudarCard8() {
  cardVerso8.style.display = "none";
  cardFrente8.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente7.style.display == "block" && cardFrente8.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}

//Nova seção de cards

let cardVerso9 = document.querySelector("#card-17");
let cardFrente9 = document.querySelector("#card-18");
let cardVerso10 = document.querySelector("#card-19");
let cardFrente10 = document.querySelector("#card-20");

function mudarCard9() {
  cardVerso9.style.display = "none";
  cardFrente9.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente9.style.display == "block" && cardFrente10.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}

function mudarCard10() {
  cardVerso10.style.display = "none";
  cardFrente10.style.display = "block";
  let contador = 1;
  console.log(contador);
  Contador.push(contador);
  if(cardFrente9.style.display == "block" && cardFrente10.style.display == "block" && Contador.length < 3) {
    Contador.splice(0,3)
  }else{
    intervalo()
  }
}