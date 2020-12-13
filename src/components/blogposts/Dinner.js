const Dinner = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const author = document.createElement('img');
    const h6 = document.createElement('h6');
    const data = document.createElement('h6'); 

    div.className = 'blogposts__item';
    img.className = 'blogposts__image';
    a.className = 'blogposts__btn';
    p.className = 'blogposts__description';
    author.className = 'blogposts__author-img';
    h6.className = 'blogposts__author';
    data.className = 'blogposts__data' 

    a.innerText = 'Dinner tips'
    img.src = './src/img/blogposts.png';
    p.innerText = 'Our chef tips for a great and tasty dinner ready in 20 minutes'
    author.src = './src/img/author.jfif'
    h6.innerText = 'Gordon Ramsay'
    data.innerText = '17. 6. 2020'

    div.append(img);
    div.append(a);
    div.append(p);
    div.append(author);
    div.append(h6);
    div.append(data);


    return div.outerHTML;
};

export default Dinner();