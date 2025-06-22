import {products} from './db/product.js'
import { findProductInCart } from './utils/findProductInCart.js'
import { createProductCard } from './createProductCard.js'
const mainContainer = document.getElementById("main")
let cart = JSON.parse(localStorage.getItem("cart")) || []
let isProductInCart;
// for (let product of products) {
//     //Get Main container by Id
    
//     //Create card Container
//     const cardContainer = document.createElement("div")
//     cardContainer.classList.add("card", "card-vertical", "d-flex", "direction-column", "relative", "shadow")

//     //Create card image container 
//     const cardImgContainer = document.createElement("div")
//     cardImgContainer.classList.add("card-image-container")

//     //Create image and append to cardImg Container
//     const imgElement = document.createElement("img")
//     imgElement.classList.add("card-image")
//     imgElement.setAttribute("src",`${product.img}`)
//     imgElement.setAttribute("alt",`${product.name}`)
//     cardImgContainer.appendChild(imgElement)

//     //Create Card Details Container
//     const cardDetailsContainer = document.createElement("div")
//     cardDetailsContainer.classList.add("card-details")

//     //Create card Title Container and Appending to card Details Container
//     const cardTitleContainer = document.createElement("div")
//     cardTitleContainer.classList.add("card-title")
//     cardTitleContainer.innerText=`${product.brand}`
//     cardDetailsContainer.appendChild(cardTitleContainer)

//     //Create card Description Container
//     const cardDescriptionContainer = document.createElement("div")
//     cardDescriptionContainer.classList.add("card-description")

//     //Create product title
//     const productTitle = document.createElement("p")
//     productTitle.classList.add("card-des")

//     //Create New Price
//     const newPrice = document.createElement("p")
//     newPrice.innerText=`${product.newPrice}`
//     newPrice.classList.add("card-price")

//     //Create old Price 
//     const oldPrice = document.createElement("span")
//     oldPrice.classList.add("price-strike-through")
//     oldPrice.innerText=` Rs. ${product.oldPrice}`
    
//     //Create discount
//     const discountAmt = document.createElement("span")
//     discountAmt.classList.add("discount")
//     discountAmt.innerText=` (${product.discount}) OFF`

//     const ratings = document.createElement("p");
//     ratings.classList.add("d-flex", "align-center");

//     const rating = document.createElement("span");
//     rating.innerText = product.rating;
//     ratings.appendChild(rating);

//     const star = document.createElement("span");
//     star.classList.add("material-icons-outlined", "star");
//     star.innerText = "star";
//     ratings.appendChild(star);

//     //append old price and discount to new Price
//     newPrice.appendChild(oldPrice)
//     newPrice.appendChild(discountAmt)

//     //Append product title and new price to cardDescription container
//     cardDescriptionContainer.appendChild(productTitle)
//     cardDescriptionContainer.appendChild(newPrice)
//     cardDescriptionContainer.appendChild(ratings)

//     //Create Card Button Container 
//     const btnContainer = document.createElement("div")
//     btnContainer.classList.add("cta-btn")

//     //Create button and button img element
//     const btnElement = document.createElement("button")
//     btnElement.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin")
//     btnElement.setAttribute("data-id",product._id)
//     btnElement.innerText="Add To Cart"
//     const cart = document.createElement("sapn")
//     cart.classList.add("material-symbols-outlined")
//     cart.innerText="shopping_cart"
//     btnElement.appendChild(cart)
//     btnContainer.appendChild(btnElement)

//     //Append all containers to card Container
//     cardDetailsContainer.appendChild(cardDescriptionContainer)
//     cardDetailsContainer.appendChild(btnContainer)
//     cardContainer.appendChild(cardImgContainer)
//     cardContainer.appendChild(cardDetailsContainer)
//     mainContainer.appendChild(cardContainer)

    
// }
mainContainer.addEventListener("click",(event)=>{
    isProductInCart=findProductInCart(cart,event.target.dataset.id)
    if(!isProductInCart){
        const addProductToCart = products.filter(({_id})=> _id == event.target.dataset.id)
        cart=[...cart,...addProductToCart]
        localStorage.setItem("cart",JSON.stringify(cart))
        const cardBtn = event.target
        cardBtn.innerHTML = `Go To Cart <span class="material-icons-outlined">shopping_cart</span>`
    }else{
        location.href = './cart.html'
    }
    
})

createProductCard(products,mainContainer,findProductInCart,"products")