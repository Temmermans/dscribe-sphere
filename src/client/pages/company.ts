export default class Company extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="projects-section-header">
        <p>Projects</p>
        <p class="time">December, 12</p>
      </div>
      <div class="projects-section-line">
        <div class="projects-status">
          <project-status-item data-status="In Progress" data-number="45"></project-status-item>
          <project-status-item data-status="Upcoming" data-number="24"></project-status-item>
          <project-status-item data-status="Total Projects" data-number="62"></project-status-item>
        </div>
        <view-actions></view-actions>
        <overview-card></overview-card>
      </div>
`;
  }
}
