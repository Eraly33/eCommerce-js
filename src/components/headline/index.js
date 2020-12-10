import Productheadline from './productheadline.js'
import Productheadline1 from './productheadline2.js'
import Productheadline3 from './productheadline3.js'
import Productheadline4 from './productheadline4.js'
  const Section = () => {
    const tagSection = document.createElement('Section')
    tagSection.className = "headline"
    tagSection.innerHTML = 
`    <div class="container">
        <div class="headline__top">
            <h3 class="headline__title">Section Headline</h3>
            <a href="" class="headline__btn">Button</a>
          </div>
        <div class="headline__row">
          <div class="col-3">
           ${Productheadline}
          </div> 
            <div class="col-3">
            ${Productheadline1}
          </div> 
            <div class="col-3">
            ${Productheadline3}
          </div>  
        <div class="col-3">
           ${Productheadline4}
          </div> 
        </div>
    </div>`;
        document.body.append(tagSection);
        return tagSection;
};
Section();