import "./styles.css";
import Home from "./modules/Home/index.js";
import Menu from "./modules/Menu/index.js";
import Contact from "./modules/Contact/index.js";

console.log("Loading index.js!");

const content = document.getElementById("content");
const homePage = document.getElementById("home");
const menuPage = document.getElementById("menu");
const contactPage = document.getElementById("contact");

const showHeaderAnimation = () => {
  const header = document.getElementById("header");
  header.classList.add("animate-opacity");
  header.style.opacity = "0";
  setTimeout(() => {
    header.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    header.classList.remove("animate-opacity");
  }, 1200);
};

const emptyContentDiv = () => {
  content.innerHTML = "";
};

const appendToContentDiv = (element) => {
  emptyContentDiv();
  content.appendChild(element);
  showHeaderAnimation();
  window.scrollTo(0, 0);
};

const loadHomePage = () => {
  console.log("Clicked home page link.");
  const homeContent = Home();
  appendToContentDiv(homeContent);
};

const loadMenuPage = () => {
  console.log("Clicked menu page link.");
  const menuContent = Menu();
  appendToContentDiv(menuContent);
};

const loadContactPage = () => {
  console.log("Clicked contact page link.");
  const contactContent = Contact();
  appendToContentDiv(contactContent);
};

homePage.addEventListener("click", loadHomePage);

menuPage.addEventListener("click", loadMenuPage);

contactPage.addEventListener("click", loadContactPage);

window.onload = () => {
  console.log("Window loaded!");
  loadContactPage();
};
