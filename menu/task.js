const menuItemAboutCompany = document.querySelector(`.menu_sub`);
const menuItemServices = document.querySelector(`body > ul > li:nth-child(3) > .menu_sub`);
const linkAboutCompany = menuItemAboutCompany.closest(`.menu__item`).querySelector(`.menu__link`);
const linkServices = menuItemServices.closest(`.menu__item`).querySelector(`.menu__link`);

linkAboutCompany.onclick = (() => {
  if (menuItemAboutCompany.className === `menu menu_sub menu_active`) {
    menuItemAboutCompany.className = `menu menu_sub`;
    return false
  }
  if (menuItemServices.className === `menu menu_sub menu_active`) {
    menuItemAboutCompany.className = `menu menu_sub menu_active`;
    menuItemServices.className = `menu menu_sub`;
    return false
  }
  menuItemAboutCompany.className = `menu menu_sub menu_active`;
  return false;
});
linkServices.onclick = (() => {
  if (menuItemServices.className === `menu menu_sub menu_active`) {
    menuItemServices.className = `menu menu_sub`;
    return false
  }
  if (menuItemAboutCompany.className === `menu menu_sub menu_active`) {
    menuItemServices.className = `menu menu_sub menu_active`;
    menuItemAboutCompany.className = `menu menu_sub`;
    return false
  }
  menuItemServices.className = `menu menu_sub menu_active`;
  return false;
});

// function showSections(func) {
//   if (this.className === `menu menu_sub menu_active`) {
//     this.className = `menu menu_sub`;
//     return false
//   }
//   if (section.className === `menu menu_sub menu_active`) {
//     this.className = `menu menu_sub menu_active`;
//     section.className = `menu menu_sub`;
//     return false
//   }
//   this.className = `menu menu_sub menu_active`;
//   return false;
// }

// linkAboutCompany.onclick = func.apply(this, [...linkServices]);
// linkServices.onclick = func.apply(this, [...linkAboutCompany]);