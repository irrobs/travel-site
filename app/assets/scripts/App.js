import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import Reveal from "./modules/Reveal";
import StickyHeader from "./modules/StickyHeader";

new Reveal(document.querySelectorAll(".feature"), 75);
new Reveal(document.querySelectorAll(".testimonial"), 60);
const mobileMenu = new MobileMenu();
new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal === "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("problem"));
    } else {
      modal.openTheModal();
    }
  })
);

if (module.hot) {
  module.hot.accept();
}
