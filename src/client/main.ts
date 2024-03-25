import "./style.css";

import { Toolbar } from "./components/Toolbar";
import { ProfileIcon } from "./components/profileIcon";
import { Toggle } from "./components/toggleButton";
import { NavBarButton } from "./components/navBarButton";
import { NavBar } from "./components/navBar";
import Company from "./pages/company";
import User from "./pages/user";
import { ProjectStatusItem } from "./components/projectStatusItem";
import Router from "./services/router";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Search } from "./components/search";
import graphql from "./services/graphql";

customElements.define("my-toolbar", Toolbar);
customElements.define("profile-icon", ProfileIcon);
customElements.define("overview-card", Card);
customElements.define("toggle-btn", Toggle);
customElements.define("project-status-item", ProjectStatusItem);
customElements.define("nav-bar-button", NavBarButton);
customElements.define("company-page", Company);
customElements.define("user-page", User);
customElements.define("nav-bar", NavBar);
customElements.define("app-header", Header);
customElements.define("app-search", Search);

Router.init();

graphql
  .query(
    /* GraphQL */ `
      query ME {
        ME {
          id
          email
          firstname
          lastname
          picture
          permissionset
          teams
          is_superuser
        }
      }
    `
  )
  .then((response) => {
    console.log(response);
  });
