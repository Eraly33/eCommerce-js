import Contact from './contact.js';
import Nav from "./nav.js";
import img from "./img.js"
import search from "./search.js"
import icon from "./icon.js"
import menu from "./menu.js"
const Header = () => {
    const tagHeader = document.createElement('Header')
    tagHeader.className = "header"
    tagHeader.innerHTML = `
    <div class="container"> 
    <div class="header__top">
      ${Contact}
      ${Nav}
    </div>
    <div class="del"></div>
    <div class="header__middle">
    ${img}
    ${search}
    ${icon}
    </div>
    <div class="header__bottom">
    ${menu}
    </div>
    </div>
    `;
    document.body.append(tagHeader);

    const ul = document.querySelector('.search__list');
    const h4 = document.querySelector('.search__title')

    h4.addEventListener('click', () => {
        ul.classList.toggle('is-active');
    });

    return tagHeader;

};
Header();