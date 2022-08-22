
const cartWrap = document.querySelector('.cart-wrap')






window.addEventListener('click', function (event){
  let counter;
  
  
  
// счётчик кол-во товаров
   if(event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus'){
      const quan = event.target.closest('.shop__quantity');
      counter = quan.querySelector('[data-counter]');
  }
  if(event.target.dataset.action ==='plus'){ 
      counter.innerText = ++counter.innerText;
  }
  if(event.target.dataset.action ==='minus'){
      if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
      }
    }
  if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrap')){
    totalPrice();
  }
  
 
  
  // сбор информации о товар
  
  if(event.target.hasAttribute('data-cart')){
 
    const item = event.target.closest('.shop__item');
    const itemInfo = {     
      id: item.dataset.id, 
      imgSrc: item.querySelector('.shop__img').getAttribute('src'),
      title: item.querySelector('.shop__title').innerText,
      price: item.querySelector('.shop__price').innerText,
      count: item.querySelector('[data-counter]').innerText,
      
    }
   
    
    // добавление товара в корзину
    const cartItemHtml = `
    <div class="cart-item" data-id="${itemInfo.id}">
    <img class="cart-item__img" src="${itemInfo.imgSrc}" alt="item img"</img>
    <h3 class="cart-item__title">${itemInfo.title}</h3>
    <p class="cart-item__price">${itemInfo.price}</p>
    <div class="shop__quantity">
      <div class="item__control control__btn" data-action="minus">-</div>
      <div class="cart-item__count" data-counter>${itemInfo.count}</div>
      <div class="item__control control__btn"  data-action="plus">+</div>
    </div>
    <button class="cart-item__delete" data-del >
    
    </button>
  </div>`;
    
    const itemInCart = cartWrap.querySelector(`[data-id="${itemInfo.id}"]`);
    
    
  if(itemInCart){
   const cartElem = itemInCart.querySelector('.cart-item__count');
    cartElem.innerText=parseInt(cartElem.innerText) + parseInt(itemInfo.count);
    
  } 
    else{
     cartWrap.insertAdjacentHTML('afterbegin',cartItemHtml);
      //beforeend//
  }
  totalPrice();
   item.querySelector('[data-counter]').innerText = '1';
    
    // отображение статуса корзины. Пустая/полная
    toggleCartStatus(); 
  }
  
    //удаление товара
   if(event.target.hasAttribute('data-del')){
    event.target.closest('.cart-item').remove();
    
  toggleCartStatus(); 

  totalPrice();
  }
  
   
  
  function toggleCartStatus(){
 
    const cartWrap = document.querySelector('.cart-wrap');
    const cartEmpy = document.querySelector('.cart__btn__count');
    const cartR = document.querySelector('.cart__right');
    const cartText = document.querySelector('.cart__text');

    if(cartWrap.children.length > 0){
     cartEmpy.innerText = parseInt(cartWrap.children.length);
      cartEmpy.classList.remove('none');
      cartR.classList.remove('none');
      cartText.classList.add('none');
    } else {
      cartText.classList.remove('none');
      cartR.classList.add('none');
      cartEmpy.classList.add('none');
    }
    
  };

});

