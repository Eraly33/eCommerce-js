const Farmers = () => {
    const FarmersMenu = document.createElement('div');
    FarmersMenu.innerHTML = `  
    <ul class="farmers__list">
       <a><h4 class="farmers__title">Best from Farmers</h4></a>
        <li class="farmers__item"><a href="#" class="farmers__link">Carrots</a></li>
        <li class="farmers__item"><a href="#" class="farmers__link">Tomatoes</a></li>
        <li class="farmers__item"><a href="#" class="farmers__link">Potatoes</a></li>
        <li class="farmers__item"><a href="#" class="farmers__link">Chicken</a></li>
        <li class="farmers__item"><a href="#" class="farmers__link">Pork</a></li>
    </ul>
    <button class="button">More products<button>
    `;

    return FarmersMenu.outerHTML;
};
export default Farmers();