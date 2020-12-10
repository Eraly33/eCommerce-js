const Productheadline3 = () => {
    const div = document.createElement('div');
    div.className = "headline__product"
    div.innerHTML = ` 
       <p class="product__discount">- 36 %</p>
    <img class="headline__images" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkdvyr57_VJtsh8Wawv-nCa2Vx7dEp_HyVA&usqp=CAU">
    <h3 class="headline__product-title">Product Title</h3>
    <p class="headline__description">Space for a small product description </p>
    <div class="headline__price">
        <span class="headline__newprice">0.28 USD</span>
        <span class="headline__oldprice">48.56</span>
        <a href="#" class="product-button">Buy now</a>
    </div>`
    return div.outerHTML;
};

export default Productheadline3();