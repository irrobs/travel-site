import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import Reveal from "./modules/Reveal";

new Reveal(document.querySelectorAll(".feature"), 75);
new Reveal(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
