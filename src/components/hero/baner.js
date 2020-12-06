const banner = () => {
    const div = document.createElement('div');
    div.className =  "banner"
    div.innerHTML = `
    <img class="banner__images" src="../src/img/hero.svg" alt"hero">
    <a href="#" class="banner__link">
    <span class="banner__suptitle">Banner subfocus</span>
    <h4 class="banner__title">Space for heading</h4>
    </a>
    <button class="banner__button">Read recepies</button>
    `
    return div.outerHTML;
};

export default banner();