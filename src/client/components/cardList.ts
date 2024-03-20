import { html, render } from "lit-html";

export class CardList extends HTMLElement {
  cards: any[];
  constructor() {
    super();
    this.cards = [];
  }
  connectedCallback() {
    this.render();
  }

  render = () => {
    render(
      html`<div class="overview-card-grid">
        ${this.cards.map((_card) => "<overview-card></overview-card>")}
      </div>`,
      this
    );
  };
}
