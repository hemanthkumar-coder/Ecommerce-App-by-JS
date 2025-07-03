import { createProductCard } from "./createProductCard.js";
import { createHorizantalProductCard } from "./createHorizantalProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";
let cartContainer = document.getElementById("cart");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartContainer.addEventListener("click", (event) => {
  cart = cart.filter(({ _id }) => _id != event.target.dataset.id);
  cartContainer.innerHTML = "";
  createHorizantalProductCard(cart, cartContainer);
  localStorage.setItem("cart", JSON.stringify(cart));
});
createHorizantalProductCard(cart, cartContainer);

let totalPrice = 0;
let discountedPrice = 0;
for (let item of cart) {
  totalPrice += item.oldPrice;
  discountedPrice += item.newPrice;
}
const itemCount = cart.length
const discount = totalPrice-discountedPrice
const originalPrice = discountedPrice+150
const totalPriceEle = document.getElementById("totalPrice")
const discountPriceEle = document.getElementById("discountPrice")
const priceElement = document.getElementById("price")
const count = document.getElementById("count")
totalPriceEle.innerText = `Rs.${totalPrice}`
discountPriceEle.innerText = `Rs.${discountedPrice}`
priceElement.innerText = `Rs.${originalPrice}`
count.innerText = itemCount
