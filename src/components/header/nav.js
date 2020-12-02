const Nav = () => {
  const tagNav = document.createElement("Nav");
  tagNav.innerHTML = `
    <ul>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Careers</a></li>
    </ul>`;
  return tagNav.outerHTML;
};
export default Nav();







