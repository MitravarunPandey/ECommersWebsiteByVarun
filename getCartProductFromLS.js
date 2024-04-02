import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>
{
let cartProductsAll=localStorage.getItem("cardProductLocalstorage");
if(!cartProductsAll){
    return[];
}
else {
    cartProductsAll=JSON.parse(cartProductsAll);
    updateCartValue(cartProductsAll);

    return cartProductsAll;
}
}