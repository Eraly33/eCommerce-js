const Productheadline4 = () => {
    const div = document.createElement('div');
    div.className = "headline__product"
    div.innerHTML = ` 
       <p class="product__discount">- 36 %</p>
    <img class="headline__images" alt="" src="https://aif-s3.aif.ru/images/017/924/9786d170b5001c6aba03ce842bc1dc2d.jpg">
    <h3 class="headline__product-title">Product Title</h3>
    <p class="headline__description">Space for a small product description </p>
    <div class="headline__price">
        <span class="headline__newprice">1.12 USD</span>
        <span class="headline__oldprice">48.56</span>
        <a href="#" class="product-button">Buy now</a>
    </div>`
    return div.outerHTML;
};

export default Productheadline4();