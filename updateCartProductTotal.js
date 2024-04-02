import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal= (()=>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalPriceOfAllProduct= localCartProducts.reduce((acuum,curElem)=>
    {debugger;
        let productPrice = parseInt(curElem.productPrice) || 0;
        return acuum+productPrice;
    },initialValue);
  console.log(totalPriceOfAllProduct) ;
  productSubTotal.textContent = `₹${totalPriceOfAllProduct}`;
  productFinalTotal.textContent = `₹${totalPriceOfAllProduct+(totalPriceOfAllProduct * 0.18)}`;
});