// const section = () => {
//     const tagsection = document.createElement('section');
//     tagsection.className = "products"
//     tagsection.innerHTML = 
// `    <div class="container">
//         <div class="products__row">
//             <div class="col-3"></div>
//             <div class="col-3"></div>
//             <div class="col-3"></div>
//             <div class="col-3"></div>
//         </div>
//     </div>`;
//     document.body.append(tagsection);
//     return tagsection;
// };
// section;
import Products from './productsmenu.js'
import Product from './product1.js'
import Product2 from './product2.js'
import Product3 from './product3.js'

  const Section = () => {
    const tagSection = document.createElement('Section')
    tagSection.className = "products"
    tagSection.innerHTML = `    
    <div class="container">
        <div class="products__row">
        <div class="col-3">${Products}</div>
        <div class="col-3">${Product} </div>
        <div class="col-3">${Product2}</div>
        <div class="col-3">${Product3}</div>
        </div>
    </div>`;
        document.body.append(tagSection);
        return tagSection;
};
Section();