import category from './category.js';
import banner from './banner.js';
import baner from './baner.js'
const Section = () => {
    const tagSection = document.createElement('Section')
    tagSection.className = "hero"
    tagSection.innerHTML = `    
    <div class="container">
        <div class="hero__row">
        <div class="col-3">
        ${category}
        </div>
        <div class="col-4">
         ${banner}
        </div>
        <div class="col-4">
        ${baner}
        </div>
        </div>
    </div>`;
        document.body.append(tagSection);
        return tagSection;
};
Section();