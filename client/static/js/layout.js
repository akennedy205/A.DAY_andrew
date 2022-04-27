const main = document.querySelector("main");

const publicRoutes = ["#", "#login"];
const privateRoutes = ["#feed", "#profile"];

window.addEventListener("hashchange", updateContent);

function updateMain(path) {
  main.innerHTML = "";
  if (path) {
    switch (path) {
      case "#":
        window.location.href = "index.html";
      case "#login":
        window.location.href = "login.html";
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
    // tells the browser where to go if cant go to those above
    window.location.hash = "#";
  }
}

function updateContent() {
  const path = window.location.hash;
  if (privateRoutes.includes(path) && !currentUser()) {
    window.location.hash = "#";
  } else if (!privateRoutes.includes(path) && currentUser()) {
    window.location.hash = "#feed";
  } else {
    updateMain(path);
  }
}

updateContent();
