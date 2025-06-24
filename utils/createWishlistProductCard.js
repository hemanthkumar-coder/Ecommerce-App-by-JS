import { findProductInCart } from "./findProductInCart.js";
let cart = JSON.parse(localStorage.getItem("cart"));
export const createWishlistProduct = (wishlist, parentContainer) => {
  for (let product of wishlist) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-horizontal", "d-flex", "shadow");

    /** Image Container */
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("card-hori-image-container", "relative");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src", product.img);
    image.setAttribute("alt", product.name);

    imageContainer.appendChild(image);
    cardContainer.appendChild(imageContainer);

    /** Card Details Container */
    const cardDetailsContainer = document.createElement("div");
    cardDetailsContainer.classList.add(
      "card-details",
      "d-flex",
      "direction-column"
    );

    const brandContainer = document.createElement("div");
    brandContainer.classList.add("card-title");
    brandContainer.innerText = product.brand;
    cardDetailsContainer.appendChild(brandContainer);

    /** Card Description Container */
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("card-description");

    /** Product Name */
    const name = document.createElement("p");
    name.classList.add("card-des");
    name.innerText = product.name;
    descriptionContainer.appendChild(name);

    /** Product Price */
    const price = document.createElement("p");
    price.classList.add("card-price");
    price.innerText = `Rs. ${product.newPrice}`;

    const oldPrice = document.createElement("span");
    oldPrice.classList.add("price-strike-through");
    oldPrice.innerText = `Rs. ${product.oldPrice}`;
    price.appendChild(oldPrice);

    const discount = document.createElement("span");
    discount.classList.add("discount", "padding-all-8");
    discount.innerText = `(${product.discount}% OFF)`;
    price.appendChild(discount);
    descriptionContainer.appendChild(price);
    cardDetailsContainer.appendChild(descriptionContainer);

    /** CTA Button */
    const ctaButton = document.createElement("div");
    ctaButton.classList.add("cta-btn", "d-flex", "gap");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add(
      "button",
      "hori-btn",
      "btn-primary",
      "btn-icon",
      "d-flex",
      "align-center",
      "justify-center",
      "gap",
      "cursor",
      "btn-margin"
    );
    removeBtn.setAttribute("data-id", product._id);
    removeBtn.innerText = "Remove";

    const goToCartBtn = document.createElement("button");
    goToCartBtn.classList.add(
      "button",
      "hori-btn",
      "btn-primary",
      "btn-icon",
      "d-flex",
      "align-center",
      "justify-center",
      "gap",
      "cursor",
      "btn-margin"
    );
    goToCartBtn.setAttribute("data-cart", product._id);
    const isProductInCart = findProductInCart(cart, product._id);

    goToCartBtn.innerText = isProductInCart ? "Go To Cart" : "Add To Cart";
    ctaButton.appendChild(removeBtn);
    ctaButton.appendChild(goToCartBtn);
    cardDetailsContainer.appendChild(ctaButton);

    cardContainer.appendChild(cardDetailsContainer);

    parentContainer.appendChild(cardContainer);
  }
};
