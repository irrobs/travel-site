import Axios from "axios";

class ClientArea {
  constructor() {
    this.injectHTML();
    this.form = document.querySelector(".client-area__form");
    this.field = document.querySelector(".client-area__input");
    this.contentArea = document.querySelector(".client-are__content-area");

    this.events();
  }

  events() {
    this.form.addEventListener("submite", (e) => {
      e.preventDefault();
      this.sendRequest();
    });
  }

  sendRequest() {
    Axios.post(
      "https://serene-sopapillas-e14518.netlify.app/.netlify/functions/secret-area",
      { password: this.field.value }
    )
      .then((response) => {
        this.form.remove();
        this.contentArea.innerHTML = response.data;
      })
      .catch(() => {
        this.contentArea.innerHTML = `<p class="client-area__error > Wrong password</p>`;
      });
    this.field.value = "";
    this.field.focus();
  }

  injectHTML() {
    document.body.insertAdjacentElement(
      "beforeend",
      `
      <div class="client-area">
       <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">Secret Client Area</h2>
        <form class="client-area__form" action="">
          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
          <button class="btn btn--orange">Submit</button>
        </form>
          <div class="client-area__content-area"></div>
        </div>
      </div>
    `
    );
  }
}

export default ClientArea;
