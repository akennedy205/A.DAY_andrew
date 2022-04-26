const main = document.querySelector("main");

const publicRoutes = ["#", "#login", "#register"];
const privateRoutes = ["#feed", "#profile"];

window.addEventListener("hashchange", updateContent);

function updateMain(path) {
  main.innerHTML = "";
  if (path) {
    switch (path) {
      case "#login":
        renderLoginForm();
        break;
      case "#register":
        renderRegisterForm();
        break;
      case "#feed":
        renderFeed();
        break;
      case "#profile":
        renderProfile();
        break;
      default:
        render404();
        break;
    }
  } else {
    // something needs to go here to tell browser where to go if cant go to those above
    // renderHomepage();
  }
}

function updateContent() {
  const path = window.location.hash;
  if (privateRoutes.includes(path) && !currentUser()) {
    window.location.hash = "#";
  } else if (!privateRoutes.includes(path) && currentUser()) {
    window.location.hash = "#feed";
  } else {
    // updateNav();
    updateMain(path);
  }
}

updateContent();
