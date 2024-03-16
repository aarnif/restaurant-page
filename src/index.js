import "./styles.css";
import Home from "./components/Home/index.js";
import Menu from "./components/Menu/index.js";
import Contact from "./components/Contact/index.js";

console.log("Loading index.js!");

const content = document.getElementById("content");
const homePage = document.getElementById("home");
const menuPage = document.getElementById("menu");
const contactPage = document.getElementById("contact");

const emptyContentDiv = () => {
  content.innerHTML = "";
};

const appendToContentDiv = (element) => {
  emptyContentDiv();
  content.appendChild(element);
};

homePage.addEventListener("click", () => {
  console.log("Clicked home page link.");
  const homeContent = Home();
  appendToContentDiv(homeContent);
});

menuPage.addEventListener("click", () => {
  console.log("Clicked menu page link.");
  const menuContent = Menu();
  appendToContentDiv(menuContent);
});

contactPage.addEventListener("click", () => {
  console.log("Clicked contact page link.");
  const contactContent = Contact();
  appendToContentDiv(contactContent);
});

window.onload = () => {
  console.log("Window loaded!");
  const homeContent = Contact();
  appendToContentDiv(homeContent);
};
