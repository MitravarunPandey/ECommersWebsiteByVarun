// export const homeQuantityToggle = (event, id, stock) => {
//     const currentCardElement = document.querySelector(`#card${id}`);
//     //   console.log(currentCardElement);
  
//     const productQuantity = currentCardElement.querySelector(".productQuantity");
//     //   console.log(productQuantity);
  
//     let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  
//     if (event.target.className === "cartIncrement") {
//       if (quantity < stock) {
//         quantity += 1;
//       } else if (quantity === stock) {
//         quantity = stock;
//       }
//     }
  
//     if (event.target.className === "cartDecrement") {
//       if (quantity > 1) {
//         quantity -= 1;
//       }
//     }
  
    
  
//     productQuantity.innerText = quantity;
//     // console.log(quantity);
//     productQuantity.setAttribute("data-quantity", quantity.toString());
//     return quantity;
//   };
export const homeQuantityToggle = (event, id, initialStock) => {
    const clickedButton = event.target;
    const quantityElement = clickedButton.parentElement.querySelector(".productQuantity");
  
    // Get the current quantity
    let quantity = parseInt(quantityElement.textContent);
  
    if (clickedButton.classList.contains("cartIncrement")) {
      // Increment quantity if there's enough stock available
      if (initialStock > quantity) {
        quantity++;
      } 
    } else if (clickedButton.classList.contains("cartDecrement")) {
      // Decrement quantity if it's greater than 1
      if (quantity > 1) {
        quantity--;
      }
    }
  
    // Update the displayed quantity
    quantityElement.textContent = quantity;
  };
  
  function displayAlert(message) {
    const modal = document.createElement("div");
    modal.classList.add("custom-alert");
    modal.textContent = message;
    document.body.appendChild(modal);
  
    // Center the modal vertically and horizontally
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
  
    // Apply custom styles
    modal.style.background = "#fff";
    modal.style.border = "2px solid #333";
    modal.style.padding = "20px";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  }
  