import { createProductCard } from "./createProductCard.js";
import { createWishlistProduct } from "./utils/createWishlistProductCard.js";
import { findProductInCart } from "./utils/findProductInCart.js";
import { findProductInWishList } from "./utils/findProductInWishList.js";

const wishlistContainer = document.getElementById("wishlist");
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
wishlistContainer.addEventListener("click", (event) => {
  const isProductInWishlist = findProductInWishList(
    wishlist,
    event.target.dataset.id
  );
  const isRemoveBtnClicked = event.target.dataset.id != undefined;
  const isProductInCart = findProductInCart(cart, event.target.dataset.cart);
  const isAddToCartBtnClicked = event.target.dataset.cart != undefined;
  if (isProductInWishlist && isRemoveBtnClicked) {
    wishlist = wishlist.filter(({ _id }) => _id != event.target.dataset.id);
    wishlistContainer.innerHTML = "";
    createWishlistProduct(wishlist, wishlistContainer);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else if (isProductInCart && isAddToCartBtnClicked) {
    location.href = "./cart.html";
  } else if (!isProductInCart && isAddToCartBtnClicked) {
    const addToCartItem = wishlist.find(
      ({ _id }) => _id == event.target.dataset.cart
    );
    
    cart = [...cart, addToCartItem];
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(wishlist);
    event.target.innerText="Go To Cart"
  }
});

createWishlistProduct(wishlist, wishlistContainer);
