import { html, render } from "lit-html";

export class NavBarButton extends HTMLElement {
  image: string;
  route: string;
  constructor() {
    super();
    this.image = this.dataset.image
      ? this.dataset.image
      : "http://www.w3.org/2000/svg";
    this.route = this.dataset.route ? this.dataset.route : "";
  }

  connectedCallback() {
    render(this.template(), this);
  }

  fireOnClick = () => {
    const event = new CustomEvent("on-click", {
      detail: { route: this.route },
    });
    this.dispatchEvent(event);
  };

  template() {
    return html`
      <a @click=${this.fireOnClick} class="app-sidebar-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-home"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </a>
    `;
  }
}
