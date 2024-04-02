
import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast,js";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, initialStock) => {
    let localStoragedata = getCartProductFromLS();
    const clickedButton = event.target;
    const currentProdElem = document.querySelector(`#card${id}`);
    
    // Get product quantity
    let productQuantity = parseInt(clickedButton.parentElement.querySelector(".productQuantity").innerText);

    // Get product price
    let productPriceText = clickedButton.parentElement.querySelector(".productPrice").innerText;
    let productPrice = parseFloat(productPriceText.replace('₹', '').replace(',', '')); // Remove currency symbol and comma

    let existingProd = localStoragedata.find(
        (curProd) => curProd.id === id
      );
    
      //console.log(existingProd);
    
      if (existingProd && productQuantity > 1) {
        productQuantity = Number(existingProd.productQuantity) + Number(productQuantity);
         // Calculate total price
         productPrice = productQuantity * productPrice;
        let updatedCart = { id, productQuantity, productPrice };
    
        updatedCart = localStoragedata.map((curProd) => {
          return curProd.id === id ? updatedCart : curProd;
        });
      //  console.log(updatedCart);
    
        localStorage.setItem("cardProductLocalstorage", JSON.stringify(updatedCart));
        //show toast when product added to the cart
        showToast("add", id);
      }
    
      if (existingProd) {
       
        return false;
      }
  

      productPrice = Number(productPrice * productQuantity);
      productQuantity = Number(productQuantity);
  

   
    localStoragedata.push({ id, productQuantity, productPrice });

    localStorage.setItem("cardProductLocalstorage", JSON.stringify(localStoragedata));

    // console.log("Product Quantity:", productQuantity);
    // console.log("Product Price:", productPrice);
    // console.log("Total Price:", totalPrice);

  //update the cart button value
  updateCartValue(localStoragedata);
};
