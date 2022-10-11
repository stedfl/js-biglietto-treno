const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"))
const priceForKm = 0.21;
const totalPrice = userKm * priceForKm;
console.log(totalPrice);
let discount;
let valorDiscount;
let finalPrice;

if (userAge >= 65) {
  discount = 0.4;
}  else if (userAge <= 17) {
  discount = 0.2;
} else {
  discount = 0; 
}

valorDiscount = totalPrice * discount;
finalPrice = totalPrice - valorDiscount;
finalPriceRounded = finalPrice.toFixed(2);
const output = `
In base alla tua età e ai chilometri che vuoi percorrere, il prezzo del biglietto è di ${finalPriceRounded}€. 
` ;

document.getElementById("price").innerHTML = output;



