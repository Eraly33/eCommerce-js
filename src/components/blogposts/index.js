import Dinner from './Dinner.js'
import Breakfast from './breakfast.js'
import dinner2 from './dinner2.js'

const Blogposts = () => {
    const section = document.createElement('section');
    section.className = "blogposts"
    section.innerHTML = `
    <div class="container">
     <div class="blogposts__top">
         <h3 class="blogposts__title">Read our Blog posts</h3>
         <a href="#" class="blogposts__button">Go to Blog</a>
        </div>
       <div class="blogposts__row">
            <div class="col-5">
            ${Dinner}
            </div>
            <div class="col-3">
            ${Breakfast}
            </div>
            <div class="col-4">
            ${dinner2}
            </div>
         </div>
    </div>
    `;

    document.body.append(section);
    return section;
}

Blogposts();