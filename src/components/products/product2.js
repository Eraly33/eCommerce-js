const Product2 = () => {
    const tagdiv = document.createElement('div');
    tagdiv.className = "product"
    tagdiv.innerHTML = `
    <div class="product__menu">  
        <p class="product__discount">- 36 %</p>
       <img class="product__images" alt="" src="https://www.goodfood.com.au/content/dam/images/h/1/f/z/e/3/image.related.wideLandscape.460x259.h1fxky.png/1562310580167.jpg">
        <div class="product__menu>
           <a href="#" class="product__list">
            <h3 class="product__title">Product Title</h3>
            <span class="product__suptitle">Space for a small product description </span>
           </a>
           <div class="product__price-buy-now">
           <div class="product__price">
            <p class="product__newprice--amount">0.28 USD</p>
            <p class="product__oldprice--amount">48.56</p>
            </div>
           <a href="#" class="product__button">Buy now</a>
          </div>
          </div>
    </div>
`
    return tagdiv.outerHTML;
};

export default Product2();