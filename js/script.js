
const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"))
const priceForKm = 0.21;
const totalPrice = userKm * priceForKm;
let discount;
let valorDiscount;
let finalPrice;
let visualDiscount;

if (userAge >= 65) {
  discount = 0.4;
  visualDiscount = `Essendo tu non più giovanissimo, hai diritto ad uno sconto del <span class=bg-success>40%</span>.`;
}  else if (userAge <= 17) {
  discount = 0.2;
  visualDiscount = `Essendo tu molto giovane, hai diritto ad uno sconto del <span class=bg-success>20%</span>.`;
} else {
  discount = 0; 
  visualDiscount = "";
}

valorDiscount = totalPrice * discount;
finalPrice = totalPrice - valorDiscount;
finalPriceRounded = finalPrice.toFixed(2);

const age = `
Ciao, oggi hai scelto di percorrere ${userKm}Km per raggiungere il posto dei tuoi sogni.
`;

const output = `
In base alla tua età e ai chilometri che vuoi percorrere, il prezzo del biglietto è di <strong>${finalPriceRounded}€</strong>. 
` ;

document.getElementById("hello").innerHTML = age;
document.getElementById("discounting").innerHTML = visualDiscount;
document.getElementById("price").innerHTML = output;



