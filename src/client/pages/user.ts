export default class User extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "<p>User Page</p>";
  }
}
