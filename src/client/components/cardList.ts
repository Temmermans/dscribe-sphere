import { html, render } from "lit-html";

export class Cardlist extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    render(
      html`<div class="project-box" style="background-color: #ffd3e2;">
        <div class="project-box-header">
          <span>December 10, 2020</span>
          <div class="more-wrapper">
            <button class="project-btn-more">
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
                class="feather feather-more-vertical"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>`,
      this
    );
  };
}
