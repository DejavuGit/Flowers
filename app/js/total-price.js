function totalPrice(){
   
   const cartItem = document.querySelectorAll('.cart-item');
   let totalPrice = 0;
   
   const totalPriceEl = document.querySelector('.cart__price');
   const fullPrice = document.querySelector('.cart__full-price')

   cartItem.forEach(function(item){
     const amountEl = item.querySelector('[data-counter]');
     const priceEl = item.querySelector('.cart-item__price');

     const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
     
     totalPrice += currentPrice; 
    

   })

   totalPriceEl.innerText = totalPrice;
   fullPrice.innerText = totalPrice + 300;

}