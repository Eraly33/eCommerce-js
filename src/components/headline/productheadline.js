const Productheadline = () => {
    const div = document.createElement('div');
    div.className = "headline__product"
    div.innerHTML = `    
    <img class="headline__images" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQft_Z99WSN6ocVRKy5sYWdmZ1vRH2NGPQZ2A&usqp=CAU">
    <h3 class="headline__product-title">Product Title</h3>
    <p class="headline__description">Space for a small product description </p>
    <div class="headline__price">
        <span class="headline__newprice">3.26 USD</span>
        <a href="#" class="product-button">Buy now</a>
    </div>`
    return div.outerHTML;
};

export default Productheadline();