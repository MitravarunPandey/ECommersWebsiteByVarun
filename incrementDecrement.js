import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement=(event,id,stock,price)=>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantityy = currentCardElement.querySelector(".productQuantity");
    const productPricee = currentCardElement.querySelector(".productPrice");
    let productQuantity = 1;
    let localStoragePrice = 0;
    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find((curProd) => curProd.id === id);
    if (existingProd) {
        productQuantity = existingProd.productQuantity;
        localStoragePrice = existingProd.productPrice;
      } else {
        localStoragePrice = productPrice;
         productPrice = productPrice;
      }
      if (event.target.className === "cartIncrement") {
        if (productQuantity < stock) {
            productQuantity += 1;
        } else if (productQuantity === stock) {
            productQuantity = stock;
          localStoragePrice = price * stock;
        }
      }
      if (event.target.className === "cartDecrement") {
        if (productQuantity > 1) {
            productQuantity -= 1;
        }
      }
  //   finally we will update the price in localStorage
  localStoragePrice =productQuantity * price;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id,  productQuantity, productPrice: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
   //  console.log(updatedCart);
  localStorage.setItem("cardProductLocalstorage", JSON.stringify(updatedCart));

  //   also we need to reflect the changes on the screen too
  productQuantityy.innerText =  productQuantity;
  productPricee.innerText = localStoragePrice;

 

  updateCartProductTotal();
}