const subItems = document.querySelectorAll(`.menu_sub`);

(function() {
  subItems.forEach(section => {
    section.closest(`.menu__item`).querySelector(`.menu__link`).onclick = openMenu;
  })
}());

function openMenu() {
  if (this.closest(`.menu__item`).querySelector(`.menu_active`)) {
    this.closest(`.menu__item`).querySelector(`.menu_sub`).className = `menu menu_sub`;
  } else {
    this.closest(`.menu__item`).querySelector(`.menu_sub`).className = `menu menu_sub menu_active`;
  } 
    return false;
}