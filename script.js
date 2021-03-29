let adultsInput = document.getElementById("adults");
let childrenInput = document.getElementById("children");
let durationInput = document.getElementById("duration");

let result = document.getElementById("result");
let container = document.getElementById("container");

function steakQt(duration) {
  if (duration >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function beerQt(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function beverageQt(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

function calculate() {
  let adults = adultsInput.value;
  let children = childrenInput.value;
  let duration = durationInput.value;

  var steak = steakQt(duration) * adults + (steakQt(duration) / 2) * children;
  var beer = beerQt(duration) * adults;
  var beverage =
    beverageQt(duration) * adults + (beverageQt(duration) / 2) * children;

  if (steak >= 1000) {
    steak = steak / 1000 + "kg";
  } else {
    steak = steak + "g";
  }

  if (beer >= 1000) {
    beer = beer / 1000 + "L";
  } else {
    beer = beer + "ml";
  }

  if (beverage >= 1000) {
    beverage = beverage / 1000 + "L";
  } else {
    beverage = beverage + "ml";
  }

  result.innerHTML = `<p class="item"><img src="./img/steak.png" alt="" class="itemIcon">${steak} de Carne</p>
  <p class="item"><img src="./img/beer.png" alt="" class="itemIcon">${beer} de Cerveja</p>
  <p class="item"><img src="./img/softdrinks.png" alt="" class="itemIcon">${beverage} de Bebidas</p>`;

  result.innerHTML += '<button id="reset" onclick="clearScreen()">LIMPAR</button>'
  
}

function clearScreen() {
  result.innerHTML = "";
}
