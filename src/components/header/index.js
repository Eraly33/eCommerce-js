import Contact from './contact.js';
import nav from "./nav.js";

const Header = () => {
    const tagHeader = document.createElement('Header')
    tagHeader.innerHTML = `<div class"container"> 
    <div class"header__top">
      ${Contact().outerHTML}
      ${nav().outerHTML}
    </div>
    <div class"header__middle"></div>
    <div class"header__bottom"></div>
    </div>
    `;
    document.body.appendChild(tagHeader);
    return tagHeader;
};
Header();