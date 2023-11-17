import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import Reveal from "./modules/Reveal";
import StickyHeader from "./modules/StickyHeader";

new Reveal(document.querySelectorAll(".feature"), 75);
new Reveal(document.querySelectorAll(".testimonial"), 60);
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
