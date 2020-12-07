const Product = () => {
    const tagdiv = document.createElement('div');
    tagdiv.className = "product"
    tagdiv.innerHTML = `
    <div class="product__menu">  
       <img class="product__images" alt="" src="../src/img/product.png">
        <div class="product__menu>
             <a href="#" class="product__list">
               <h3 class="product__title">Product Title</h3>
               <span class="product__suptitle">Space for a small product description </span>
              </a>
           <div class="product__price-buy-now">
             <p class="product__newprice--amount">1.48 USD</p>
             <a href="#" class="product__button">Buy now</a>
           </div>
       </div>
    </div>
`
    return tagdiv.outerHTML;
};

export default Product();