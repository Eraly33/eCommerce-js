const img = () => {
  const img = document.createElement("img");
  img.innerHTML = 
  img.src = './src/img/1.svg';
  return img.outerHTML;
};
export default img();
