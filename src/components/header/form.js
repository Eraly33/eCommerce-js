const Form = () => {
  const tagForm = document.createElement("Form");
  tagForm.innerHTML = `
  <select class="">
  <option selected disabled>Date</option>
   <input type="text" placeholder="Search...">
  <div class="search"></div>
  </select>`;
  return tagForm.outerHTML;
};
export default Form();
