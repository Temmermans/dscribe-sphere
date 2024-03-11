export default class Company extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "<p>Company Page</p>";
  }
}
