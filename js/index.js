// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceText = Number(price.innerText);
  const quantityValue = +quantity.value;
  const subTotal = priceText * quantityValue; 
  const sub = product.querySelector(".subtotal span");
  sub.innerText = subTotal; 
  console.log(product, priceText, quantityValue);
  return subTotal;
}

function calculateAll() {
  let total = 0; 
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach(oneProduct => {
    updateSubtotal(oneProduct)
    total = total + updateSubtotal(oneProduct)
    });
  const totalValue = document.querySelector("h2 span");
  totalValue.innerText = total; 
  return total; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
