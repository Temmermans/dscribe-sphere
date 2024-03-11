import { html, render } from "lit-html";
import { Card } from "./card";

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
        ${this.cards.map((card) => "<overview-card></overview-card>")}
      </div>`,
      this
    );
  };
}
