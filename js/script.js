const userKm = 35;
const userAge = 20;
const priceForKm = 0.21;
const totalPrice = userKm * priceForKm;
console.log(totalPrice);
let discount;
let valorDiscount;
let finalPrice;


if (userAge >= 65) {
  discount = 0.4;
  valorDiscount = totalPrice * discount;
  finalPrice = totalPrice - valorDiscount;
  console.log(finalPrice);
} else if (userAge <= 17) {
  discount = 0.2;
  valorDiscount = totalPrice * discount;
  finalPrice = totalPrice - valorDiscount;
  console.log(finalPrice);
} else {
  discount = 0;
  valorDiscount = totalPrice * discount;
  finalPrice = totalPrice - valorDiscount;
  console.log(finalPrice);
}

