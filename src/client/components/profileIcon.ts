import {html, render} from 'lit-html'

interface User{
    name: string
    picture: string
}

export class ProfileIcon extends HTMLElement{
    user: User;
    
 constructor() {
    super();
    this.user = (this.dataset.user) ? JSON.parse(this.dataset.user) : {name:"Julie", picture: "https://assets.codepen.io/3306515/IMG_2025.jpg"};
    }

    connectedCallback() {
        render(this.template(), this);
      }

    
      template() {
        return html`
        <button class="profile-btn">
        <img src=${this.user.picture} />
        <span>${this.user.name}</span>
      </button>
        `;
      }
} 