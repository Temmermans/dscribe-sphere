import { html, render } from "lit-html";

export class Toggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  rightButton = () => {
    var listView = this.shadowRoot?.querySelector(".left-button");
    var gridView = this.shadowRoot?.querySelector(".right-button");
    const rightContent: HTMLDivElement =
      this.shadowRoot?.querySelector("#right-content")!;
    const leftContent: HTMLDivElement =
      this.shadowRoot?.querySelector("#left-content")!;

    rightContent.style.display = "block";
    leftContent.style.display = "none";

    listView?.classList.remove("active");
    gridView?.classList.add("active");
  };

  leftButton = () => {
    var listView = this.shadowRoot?.querySelector(".left-button");
    var gridView = this.shadowRoot?.querySelector(".right-button");
    const rightContent: HTMLDivElement =
      this.shadowRoot?.querySelector("#right-content")!;
    const leftContent: HTMLDivElement =
      this.shadowRoot?.querySelector("#left-content")!;

    rightContent.style.display = "none";
    leftContent.style.display = "block";

    gridView?.classList.remove("active");
    listView?.classList.add("active");
  };

  render = () => {
    render(
      html`
        <style>
          .toggle {
            display: flex;
            align-items: center;
          }
          .toggle-btn {
            width: 36px;
            height: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 6px;
            border-radius: 4px;
            background-color: transparent;
            border: none;
            color: var(--main-color);
            margin-left: 8px;
            transition: 0.2s;
          }
          .toggle-btn.active {
            background-color: var(--link-color-active-bg);
            color: var(--link-color-active);
          }
          .toggle-btn:not(.active):hover {
            background-color: var(--link-color-hover);
            color: var(--link-color-active);
          }
        </style>
        <div class="toggle">
          <button
            @click=${this.leftButton}
            class="toggle-btn left-button active"
          >
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
              class="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>

          <button @click=${this.rightButton} class="toggle-btn right-button ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
        <div id="left-content">
          <slot name="left-content"></slot>
        </div>
        <div id="right-content" style="display:none">
          <slot name="right-content"></slot>
        </div>
      `,
      this.shadowRoot!
    );
  };
}
