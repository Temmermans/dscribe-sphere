import { html, render } from "lit-html";
import Router from "../services/router";

export class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  toggleActive() {
    const navElements = this.querySelectorAll("nav-bar-button");

    navElements.forEach((navElement: any) => {
      const a = navElement.querySelector("a");
      if (window.location.pathname.includes(navElement.route)) {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }

  connectedCallback() {
    render(this.template(), this);
    this.toggleActive();
    this.querySelectorAll("nav-bar-button").forEach((element) => {
      element.addEventListener("on-click", (e: any) => {
        e.preventDefault();
        Router.go(e.detail.route);
        this.toggleActive();
      });
    });
  }

  template() {
    return html`<div class="app-sidebar">
      <nav-bar-button data-image="http://www.w3.org/2000/svg" data-route="/company"></nav-bar-button>
      <nav-bar-button data-image="http://www.w3.org/2000/svg" data-route="/user"></nav-bar-button>
    </div>`;
  }
}
