import { html, render } from "lit-html";

export class ProjectStatusItem extends HTMLElement {
  number: number;
  status: string;

  constructor() {
    super();
    this.number = this.dataset.number ? parseInt(this.dataset.number) : 0;
    this.status = this.dataset.status ? this.dataset.status : "no data";
  }

  connectedCallback() {
    render(this.template(), this);
  }

  template() {
    return html`
      <div class="item-status">
        <span class="status-number">${this.number}</span>
        <span class="status-type">${this.status}</span>
      </div>
    `;
  }
}
