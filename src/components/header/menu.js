
const searchBar = () => {
  const div = document.createElement('div');
  const arrayOfTitles = ['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Kitchen', 'Special', 'nutrition', 'Baby', 'Pharmacy'];
  const arrayOflies = ['1', '2', '3', '4'];
  for (let i = 0; i < 8; i++) {
    const ul = document.createElement('ul');
    ul.className = 'bottom__list';
    ul.innerHTML = `
  <h3 class="bottom__title">${arrayOfTitles[i]}</h3>
  <li class="bottom__item"></li>
  <li class="bottom__item"></li>
  <li class="bottom__item"></li>`;
    div.append(ul);
  }
  div.className = 'bottom__menu';

  return div.outerHTML;
};

export default searchBar();