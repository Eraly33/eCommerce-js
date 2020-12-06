const Cotegory = () => {
    const CategoryMenu = document.createElement('div')
    CategoryMenu.className =  "hero__menu"
    CategoryMenu.innerHTML = 
`    <ul class="hero__list">
        <h3 class="hero__title">Category menu</h3>
        <li class="hero__item"><a class="hero__list"></a></li>
        <li class="hero__item"><a class="hero__list"></a></li>
        <li class="hero__item"><a class="hero__list"></a></li>
    </ul>`
    return CategoryMenu.outerHTML;
};

export default Cotegory();