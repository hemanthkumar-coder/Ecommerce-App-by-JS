export const findProductInWishList = (wishlist, productId) => {
  const isProductInWishList =
    wishlist &&
    wishlist.length > 0 &&
    wishlist.some(({ _id }) => _id == productId);
  return isProductInWishList;
};
