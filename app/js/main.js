$(function () {




  const menuList = document.querySelector('.menu__list').cloneNode(1);
  const nav = document.querySelector('.menu-nav');


document.querySelectorAll('.menu__btn').forEach(function(listitem){
  listitem.addEventListener('click', function(){
   this.classList.toggle('menu__btn--active');
      nav.appendChild(menuList);
  });
});


  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;
  
  const scrollAnimation =()=>{
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    
  }
  
  
  window.addEventListener('scroll', ()=>{
    let scrollDistance = window.scrollY;
    
    
    if(scrollDistance >= headerHeight){
      header.classList.add('header-fixed');
      document.querySelector('main').style.marginTop =`${headerHeight}px`;
    } else{
       header.classList.remove('header-fixed');
      document.querySelector('main').style.marginTop =null;
    }
    
    lastScrollTop = scrollDistance;
  });







  const swiperMian = new Swiper('.main-swiper', {
    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
        
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
    
    
  });


  const swiperProduct = new Swiper('.product-slider', {
    
    
    
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    speed: 700,
   
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
    
        
      },
      570: {
        slidesPerView: 3,
     
      }

    }
   
  });

  const swiperRecomend = new Swiper('.recomend-slider', {
    slidesPerView: 4,
    spaceBetween: 15,
    slidesPerGroup: 2,
    speed: 800,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
    
        
      },
      540: {
        slidesPerView: 2,
     
      },
      767: {
        slidesPerView: 3,
     
      },
      1024: {
        slidesPerView: 4,
      
      }
    }
  });

  const swiperStart = new Swiper('.start-slider', {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // // when window width is >= 480px
    
      1024: {
        slidesPerView: 3,
        spaceBetween: 35
      },
      // when window width is >= 640px
      1440: {
        spaceBetween: 40
      }
    }
  });



  const loginBtn = document.getElementById('login');
  const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});





});