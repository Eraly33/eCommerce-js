import category from './category.js';

const Section = () => {
    const tagSection = document.createElement('Section')
    tagSection.className = "hero"
    tagSection.innerHTML = `    
    <div class="container">
        <div clas="hero__row">
        <div clas="col-4">
        ${category}
        </div>
        <div clas="col-4"></div>
        <div clas="col-4"></div>
        </div>
    </div>`;
        document.body.append(tagSection);
        return tagSection;
};
Section();