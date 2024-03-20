const Router = {
  init: () => {
    // Process initial URL
    Router.go(location.pathname);
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
  },
  go: (route: string | URL | null | undefined, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;

    switch (route) {
      case "/company":
        pageElement = document.createElement("company-page");
        break;
      case "/user":
        pageElement = document.createElement("user-page");
        break;
      default:
        break;
    }
    if (pageElement) {
      document.querySelector("#main")!.innerHTML = "";
      document.querySelector("#main")!.appendChild(pageElement);
    }
    window.scrollX = 0;
  },
};
export default Router;
