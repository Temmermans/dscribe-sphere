import { html, render } from "lit-html";

export class ViewActions extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  ViewAction = () => {
    var listView = document.querySelector(".list-view");
    var gridView = document.querySelector(".grid-view");
    var projectsList = document.querySelector(".project-boxes");

    gridView?.classList.remove("active");
    listView?.classList.add("active");
    projectsList?.classList.remove("jsGridView");
    projectsList?.classList.add("jsListView");

    gridView?.classList.add("active");
    listView?.classList.remove("active");
    projectsList?.classList.remove("jsListView");
    projectsList?.classList.add("jsGridView");
  };

  render = () => {
    render(
      html` <div class="view-actions">
      <button @click=${this.ViewAction} class="view-btn list-view">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
      </button>
      <button @click=${this.ViewAction} class="view-btn grid-view active"">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" /></svg>
      </button>
    </div>
  </div>
  `,
      this
    );
  };
}
