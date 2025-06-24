import { createProductCard } from './createProductCard.js'
import { createHorizantalProductCard } from './createHorizantalProductCard.js'
import { findProductInCart } from './utils/findProductInCart.js'
let cartContainer = document.getElementById("cart")
let cart = JSON.parse(localStorage.getItem("cart")) || []
cartContainer.addEventListener("click",(event)=>{
    cart = cart.filter(({_id})=> _id != event.target.dataset.id)
    cartContainer.innerHTML=""
    createHorizantalProductCard(cart,cartContainer)
    localStorage.setItem("cart",JSON.stringify(cart))  
})
createHorizantalProductCard(cart,cartContainer)