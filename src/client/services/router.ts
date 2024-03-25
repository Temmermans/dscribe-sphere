const Router = {
  init: () => {
    // Process initial URL
    Router.go(location.pathname);
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
  },
  go: (route: string | URL | null | undefined, addToHistory = true) => {
    const newAccessToken = new URLSearchParams(window.location.search).get("access_token");

    if (newAccessToken) {
      localStorage.setItem("dscribe_access_token", newAccessToken);
    }

    const access_token = localStorage.getItem("dscribe_access_token");

    if (!access_token) {
      window.location.href =
        "https://identity.dscribedata.com/login?redirectTo=" + encodeURIComponent(window.location.href);
      return;
    }

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
