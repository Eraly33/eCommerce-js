const Products = () => {
    const ProductsMenu = document.createElement('div');
    ProductsMenu.innerHTML = `  
    <ul class="products__list">
       <a><h4 class="products__title">Best selling products</h4></a>
        <li class="products__item"><a href="#" class="products__link">Kitchen</a></li>
        <li class="products__item"><a href="#" class="products__link">Meat and fish</a></li>
        <li class="products__item"><a href="#" class="products__link">Special nutrition</a></li>
        <li class="products__item"><a href="#" class="products__link">Pharmacy</a></li>
        <li class="products__item"><a href="#" class="products__link">Baby</a></li>
    </ul>
    <button class="button">More products<button>
    `;

    return ProductsMenu.outerHTML;
};
export default Products();