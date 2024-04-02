import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart=(id)=>
{
    
    let cartProducts = getCartProductFromLS();  
    cartProducts=cartProducts.filter((curProd)=>curProd.id !==id);
    localStorage.setItem("cardProductLocalstorage", JSON.stringify(cartProducts));
    
  //   to remove the div onclick
  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

  }

  updateCartValue(cartProducts);
}
