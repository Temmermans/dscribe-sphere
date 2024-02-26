import {html, render} from 'lit-html'

export class ProfileIcon extends HTMLElement{
 constructor() {
    super()
    }

    connectedCallback() {
        render(this.template(), this);
      }

    
      template() {
        return html`
        <button class="profile-btn">
        <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
        <span>Aybüke C.</span>
      </button>
        `;
      }
} 