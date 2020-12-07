import Farmers from './farmersmenu.js'
import FarmersProduct from './farmersproduct.js'
  const Section = () => {
    const tagSection = document.createElement('Section')
    tagSection.className = "farmers"
    tagSection.innerHTML = `    
    <div class="container">
        <div class="farmers__row">
        <div class="col-3">${Farmers}</div>
        <div class="col-3">${FarmersProduct}</div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        </div>
    </div>`;
        document.body.append(tagSection);
        return tagSection;
};
Section();