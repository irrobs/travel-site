import { throttle } from "lodash";
import debounce from "lodash/debounce";

class StickyHeader {
  constructor() {
    this.header = document.querySelector(".header");
    this.pageSection = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      "resize",
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  runOnScroll() {
    this.determineScrollDirection();

    if (window.scrollY > 60) {
      this.header.classList.add("header--dark");
    } else {
      this.header.classList.remove("header--dark");
    }

    this.pageSection.forEach((el) => this.calcSection(el));
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previousScrollY = window.scrollY;
  }

  calcSection(el) {
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY + this.browserHeight < el.offsetTop + el.offsetHeight
    ) {
      const scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (
        (scrollPercent > 18 &&
          scrollPercent > 0.1 &&
          this.scrollDirection === "down") ||
        (scrollPercent < 33 && this.scrollDirection === "up")
      ) {
        const matchingLink = el.getAttribute("data-matching-link");
        console.log(matchingLink);
        document
          .querySelectorAll(`.primary-nav a:not(${matchingLink})`)
          .forEach((el) => el.classList.remove("current-link"));
        document.querySelector(matchingLink).classList.add("current-link");
      }
    }
  }
}

export default StickyHeader;
