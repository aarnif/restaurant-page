import "./styles.css";
import Home from "./components/home.js";
import Menu from "./components/menu.js";
import Contact from "./components/contact.js";

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
