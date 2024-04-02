import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS = (id, productPrice) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let productQuantity = 1;

  if (existingProduct) {
    productQuantity = existingProduct.productQuantity;
    productPrice = existingProduct.productPrice;
  }

  return { productQuantity, productPrice };
};