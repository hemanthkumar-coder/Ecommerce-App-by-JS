export const findProductInCart=(cart,productId)=>{
    const isProductInCart = cart && cart.length>0 && cart.some(({_id})=> _id == productId)
    return isProductInCart
}