

const Slider = () => {
     const section = document.createElement('section')
     section.className = "slider"
     section.innerHTML = `
     <div class="container">
         <div class="customers">
            <span class="customers__title">Our customers says</span>
            <a href="#" class="customers__btn">Button</a>
         </div>
       <div class="slider__row">
         <div class="customers__slider">
             <div class="customers__description">
                <span class="customers__suptitle">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</span>
              </div>
            <p class="customers__name">Name and Surname</p>  	
            <img class="customers__images" src="../src/img/slider.png" alt="">
          </div>
          <div class="customers__slider">
             <div class="customers__description">
                <span class="customers__suptitle">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</span>
              </div>
            <p class="customers__name">Name and Surname</p>  	
            <img class="customers__images" src="../src/img/slider.png" alt="">
          </div>
          <div class="customers__slider">
             <div class="customers__description">
                <span class="customers__suptitle">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</span>
              </div>
            <p class="customers__name">Name and Surname</p>  	
            <img class="customers__images" src="../src/img/slider.png" alt="">
          </div>
       </div>
     </div>
     `;


     document.body.append(section);
     return section;
};



// $('.slider__row').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider__row'
// });
// $('.slider__row').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider__row',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });


Slider();
