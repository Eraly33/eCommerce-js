const Cotegory = () => {
    const CategoryMenu = document.createElement('div')
    CategoryMenu.className =  "hero__menu"
    CategoryMenu.innerHTML = 
`    <ul class="hero__list">
        <h3 class="hero__title">Category menu</h3>
        <li class="hero__item"><a class="hero__link">Bakery</a></li>
        <li class="hero__item"><a class="hero__link">Fruit and vegetables</a></li>
        <li class="hero__item"><a class="hero__link">Meat and fish</a></li>
        <li class="hero__item"><a class="hero__link">Drinks</a></li>
        <li class="hero__item"><a class="hero__link">Kitchen</a></li>
        </ul>
        <button class="button">More categories</button>`
  
    return CategoryMenu.outerHTML;
};

export default Cotegory();