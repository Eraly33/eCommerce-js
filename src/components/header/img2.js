const img = () => {
  const img = document.createElement("img");
  img.innerHTML = `<div>
 "img.src = "./src/img/icon1.svg"
  </div>`;
  return img.outerHTML;
};
export default img();
