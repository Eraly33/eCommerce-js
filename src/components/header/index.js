import Contact from './contact.js';
import Nav from "./nav.js";
import img from "./img.js"
import Form from "./form.js"
import img2 from "./img2.js"
const Header = () => {
    const tagHeader = document.createElement('Header')
    tagHeader.innerHTML = `
    <div class="container"> 
    <div class="header__top">
      ${Contact}
      ${Nav}
    </div>
    <div class="header__middle">
    ${img}
    ${Form}
    ${img2}
    </div>
    <div class="header__bottom"></div>
    </div>
    `;
    document.body.appendChild(tagHeader);
    return tagHeader;
};
Header();