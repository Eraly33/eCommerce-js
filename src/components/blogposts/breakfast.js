const Breakfast = () => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const data = document.createElement('span');

    div.className = "breakfast"
    img.className = "breakfast__images"
    a.className = "breakfast__btn"
    p.className = "breakfast__description"
    span.className = "breakfast__author"
    data.className = "breakfast__data"

    div.append(img);
    div.append(a);
    div.append(p);
    div.append(span);
    div.append(data);

    img.src = './src/img/Breakfast.png'
    img.alt="Breakfast"
    a.innerText = 'Vegetable';
    a.href="#"
    p.innerText = 'Which vegetable your family will love and want’s eat each day'
    span.innerText = 'Gordon Ramsay'
    data.innerText = '15. 6. 2020'

    return div.outerHTML;
};

export default Breakfast();