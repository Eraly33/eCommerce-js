const FarmersProduct = () => {
    const tagdiv = document.createElement('div');
    tagdiv.className = "farmers__product"
    tagdiv.innerHTML = `
    <div class="farmers__product-item">  
       <img class="farmers__images" alt="" src="https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg">
        <div class="farmers__productmenu>
            <a href="#" class="farmers__list">
              <h3 class="farmers__title">Product Title</h3>
               <span class="farmers__suptitle">Space for a small product description </span>
             </a>
           <div class="farmers__price-buy-now">
            <div class="farmers__price">
            <p class="farmers__newprice--amount">1.48 USD</p>
            </div>
           <a href="#" class="product-button">Buy now</a>
          </div>
        </div>
    </div>
`
    return tagdiv.outerHTML;
};

export default FarmersProduct();