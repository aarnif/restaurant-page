import Hero from "../hero";
import {
  classicPizzas,
  seafoodPizzas,
  meatPizzas,
  vegetarianPizzas,
  drinks,
} from "./data.js";

const MenuItem = (name, ingredients, price, backgroundColor) => {
  const menuItem = document.createElement("li");
  menuItem.className = `w-full flex-row-center p-8 ${backgroundColor}`;
  const menuItemContainer = document.createElement("div");
  menuItemContainer.className = "max-w-[800px] flex-grow flex-row-between";

  const menuItemContainerOne = document.createElement("div");
  menuItemContainerOne.className = "flex-grow";

  const menuItemHeader = document.createElement("h2");
  menuItemHeader.className = "header3 border-b-2 border-slate-700 w-full";
  menuItemHeader.textContent = name;

  menuItemContainerOne.appendChild(menuItemHeader);

  const menuItemIngredients = document.createElement("p");
  menuItemIngredients.className = "body-text";
  menuItemIngredients.textContent = `${ingredients}`;
  menuItemContainerOne.appendChild(menuItemIngredients);

  menuItemContainer.appendChild(menuItemContainerOne);

  const menuItemContainerTwo = document.createElement("div");
  menuItemContainerTwo.className = "min-w-[100px] mx-8";

  const menuItemPrice = document.createElement("p");
  menuItemPrice.className = "header2";
  menuItemPrice.textContent = `${price}`;
  menuItemContainerTwo.appendChild(menuItemPrice);

  menuItemContainer.appendChild(menuItemContainerTwo);

  menuItem.appendChild(menuItemContainer);

  return menuItem;
};

const MenuItems = (header, menuItems) => {
  const menuSection = document.createElement("section");
  menuSection.className = "w-full flex-row-center bg-section-one";

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.className = "w-full flex-col-center py-20";

  const menuItemsHeader = document.createElement("h1");
  menuItemsHeader.className = "w-full py-10 header2 text-center";
  menuItemsHeader.textContent = header;

  menuItemsContainer.appendChild(menuItemsHeader);

  const menuItemsList = document.createElement("ul");
  menuItemsList.className = "w-full flex-col-center";

  menuItems.forEach((item, i) => {
    const menuItem = MenuItem(
      item.name,
      item?.ingredients ? item.ingredients : item.type,
      item.price,
      i % 2 === 0 ? "bg-section-one" : "bg-section-two"
    );
    menuItemsList.appendChild(menuItem);
  });

  menuItemsContainer.appendChild(menuItemsList);
  menuSection.appendChild(menuItemsContainer);

  return menuSection;
};

const Menu = () => {
  console.log("Loading menu page!");
  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menu-page");
  menuPage.className = "w-full flex-col-center animate-shade";

  const heroImageDiv = Hero();
  menuPage.appendChild(heroImageDiv);

  const menuContent = document.createElement("div");
  menuContent.className = "w-full flex-col-center";

  const menuItemsClassicPizzas = MenuItems("Classic Pizzas", classicPizzas);
  const menuItemsSeaFoodPizzas = MenuItems("Sea food Pizzas", seafoodPizzas);
  const menuItemsMeatPizzas = MenuItems("Meat Pizzas", meatPizzas);
  const menuItemsVegetarianPizzas = MenuItems(
    "Vegetarian Pizzas",
    vegetarianPizzas
  );
  const menuItemsDrinks = MenuItems("Drinks", drinks);

  menuContent.appendChild(menuItemsClassicPizzas);
  menuContent.appendChild(menuItemsSeaFoodPizzas);
  menuContent.appendChild(menuItemsMeatPizzas);
  menuContent.appendChild(menuItemsVegetarianPizzas);
  menuContent.appendChild(menuItemsDrinks);

  menuPage.appendChild(menuContent);

  return menuPage;
};

export default Menu;
