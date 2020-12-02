const nav = () => {
  const contactList = document.createElement("nav");
  contactList.innerHTML = `
    <li><a href="#">Blog</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Careersm</a></li>
    `;
  return contactList;
};
export default nav;
