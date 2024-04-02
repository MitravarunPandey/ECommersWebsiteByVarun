const cardvalue=document.querySelector("#cartValue");
export const updateCartValue=(cardProductLocalstorage)=>{
return (cardvalue.innerHTML=` <i class="fa-solid fa-cart-shopping"> ${cardProductLocalstorage.length} </i>`);
};



