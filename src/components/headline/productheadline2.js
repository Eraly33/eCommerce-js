const Productheadline1 = () => {
    const div = document.createElement('div');
    div.className = "headline__product"
    div.innerHTML = `    
    <img class="headline__images" alt="" src="https://www.restoclub.ru/uploads/newsinner_thumbnail_big/2/b/a/6/2ba6c6203c350f2a538d9f437dc4e13c.jpg">
    <h3 class="headline__product-title">Product Title</h3>
    <p class="headline__description">Space for a small product description </p>
    <div class="headline__price">
        <span class="headline__newprice">1.48 USD</span>
        <a href="#" class="product-button">Buy now</a>
    </div>`
    return div.outerHTML;
};

export default Productheadline1();