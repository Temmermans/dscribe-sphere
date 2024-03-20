import "./style.css";
import { setup } from "./setup";
import { Toolbar } from "./components/Toolbar";
import { ProfileIcon } from "./components/profileIcon";
import { Toggle } from "./components/viewActions";
import { NavBarButton } from "./components/navBarButton";
import { NavBar } from "./components/navBar";
import Company from "./pages/company";
import User from "./pages/user";
import { ProjectStatusItem } from "./components/projectStatusItem";
import Router from "./services/router";

customElements.define("my-toolbar", Toolbar);
customElements.define("profile-icon", ProfileIcon);
customElements.define("toggle-btn", Toggle);
customElements.define("project-status-item", ProjectStatusItem);
customElements.define("nav-bar-button", NavBarButton);
customElements.define("company-page", Company);
customElements.define("user-page", User);
customElements.define("nav-bar", NavBar);

document.querySelector<HTMLDivElement>("body")!.innerHTML = `
<div class="app-container">
  <div class="app-header">
    <div class="app-header-left">
      <span class="app-icon"></span>
      <p class="app-name">Portfolio</p>
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>
    <div class="app-header-right">
  <my-toolbar></my-toolbar>
  <profile-icon data-user=${JSON.stringify({
    name: "Diva",
    picture: "https://assets.codepen.io/3306515/IMG_2025.jpg",
  })} ></profile-icon>
    </div>
    <button class="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    </button>
  </div>
  <div class="app-content">
  <nav-bar></nav-bar>
  <div class="page-wrapper"><div id="main"></div></div> 
</div> 
`;

setup();
Router.init();
