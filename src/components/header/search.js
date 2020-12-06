const search = () => {
    const tagdiv = document.createElement("div");
    tagdiv.className = "search"
    tagdiv.innerHTML = 
`    <ul class="search__list">
      <h3 class="search__title">All categories</h3>
      <li class="search__item"><a class="search__link" href="#">Random text</a></li>
      <li class="search__item"><a class="search__link" href="#">Random text</a></li>
      <li class="search__item"><a class="search__link" href="#">Random text</a></li>
    </ul>
    <label>
     <input class="search__input" type="text" placeholder="Search Products, categories ..."/>
    </label>
    <button class="search__btn">
      <img class="search=logo" src="./src/img/search.svg"/>
    </button>
    `;
    return tagdiv.outerHTML;
};
export default search();