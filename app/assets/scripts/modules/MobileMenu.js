class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.menuContent = document.querySelector(".header__menu-content");
    this.header = document.querySelector(".header");
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMobileNav());
  }

  toggleMobileNav() {
    this.menuContent.classList.toggle("header__menu-content--visible");
    this.menuIcon.classList.toggle("header__menu-icon--close");
    this.header.classList.toggle("header--visible");
  }
}

export default MobileMenu;
