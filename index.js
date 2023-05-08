const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

const linkList = document.querySelector("#linkList");
const initialLink = document.querySelector("#initialLink");

initialLink.addEventListener("click", () => {
  const linkReveal = linkList.getAttribute("data-visible");

  if (linkReveal === "false") {
    linkList.setAttribute("data-visible", true);
    initialLink.setAttribute("aria-expanded", true);
  } else if (linkReveal === "true") {
    linkList.setAttribute("data-visible", false);
    initialLink.setAttribute("aria-expanded", false);
  }
});

// function showLinkList() {
//   var linkList = documnet.getElementById("linkList");
//   if (linkList.style.display === "none") {
//     linkList.style.display = "grid";
//   } else {
//     linkList.style.display = "none";
//   }
// }

// var initialLink = document.getElementById("initialLink");
// initialLink.onclick = showLinkList;


