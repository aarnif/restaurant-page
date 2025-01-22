import Hero from "../hero";
import pizzaMenu from "./pizzaMenu.js";

const handlePizzaMenuUpdate = (item) => {
  item.showItems = !item.showItems;
  updatePizzaMenu();
};

const navMenuItem = (item) => {
  const { title, showItems } = item;
  const menuItemContainer = document.createElement("li");
  menuItemContainer.className = "flex justify-center items-center";

  const menuItemButton = document.createElement("button");
  menuItemButton.className = "button menu-item";
  menuItemButton.id = title;
  menuItemButton.textContent = item.title;

  if (showItems) {
    menuItemButton.classList.add("menu-item-show");
  }

  menuItemButton.addEventListener("click", () => {
    console.log(`Toggle ${title} menu!`);
    menuItemButton.classList.toggle("menu-item-show");
    handlePizzaMenuUpdate(item);
  });

  menuItemContainer.appendChild(menuItemButton);

  return menuItemContainer;
};

const navMenu = () => {
  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.className = "w-full flex justify-center items-center";
  const menuItems = document.createElement("ul");
  menuItems.className =
    "flex-wrap flex-grow max-w-[1000px] flex justify-around items-center";

  pizzaMenu.forEach((item) => {
    const menuItemContainer = navMenuItem(item);
    menuItems.appendChild(menuItemContainer);
  });

  menuItemsContainer.appendChild(menuItems);

  return menuItemsContainer;
};

const MenuItem = (name, ingredients, price, backgroundColor) => {
  const menuItem = document.createElement("li");
  menuItem.className = `w-full flex justify-center items-center`;
  const menuItemContainer = document.createElement("div");
  menuItemContainer.className = `max-w-[1000px] flex-grow flex-row-between px-4 py-2 sm:p-8 ${backgroundColor}`;

  const menuItemContainerOne = document.createElement("div");
  menuItemContainerOne.className = "flex-grow";

  const menuItemHeader = document.createElement("h2");
  menuItemHeader.className = "header4 border-b-2 border-slate-700 w-full";
  menuItemHeader.textContent = name;

  menuItemContainerOne.appendChild(menuItemHeader);

  const menuItemIngredients = document.createElement("p");
  menuItemIngredients.className = "body-text text-base sm:text-lg xl:text-xl";
  menuItemIngredients.textContent = `${ingredients}`;
  menuItemContainerOne.appendChild(menuItemIngredients);

  menuItemContainer.appendChild(menuItemContainerOne);

  const menuItemContainerTwo = document.createElement("div");
  menuItemContainerTwo.className = "min-w-[80px] sm:min-w-[130px]";

  const menuItemPrice = document.createElement("p");
  menuItemPrice.className = "w-full header2 text-right";
  menuItemPrice.textContent = `${price}`;
  menuItemContainerTwo.appendChild(menuItemPrice);

  menuItemContainer.appendChild(menuItemContainerTwo);

  menuItem.appendChild(menuItemContainer);

  return menuItem;
};

const MenuItems = (header, menuItems) => {
  const menuSection = document.createElement("section");
  menuSection.className =
    "w-full flex justify-center items-center bg-section-one";

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.className =
    "w-full flex flex-col items-center py-4 sm:py-8";

  const menuItemsHeader = document.createElement("h1");
  menuItemsHeader.className =
    "w-full py-2 sm:py-6 xl:py-10 header2 text-center";
  menuItemsHeader.textContent = header;

  menuItemsContainer.appendChild(menuItemsHeader);

  const menuItemsList = document.createElement("ul");
  menuItemsList.className = "w-full flex flex-col items-center";

  menuItems.forEach((item, i) => {
    const menuItem = MenuItem(
      item.name,
      item?.ingredients ? item.ingredients : item.type,
      item.price,
      i % 2 === 0 ? "" : "bg-section-two"
    );
    menuItemsList.appendChild(menuItem);
  });

  menuItemsContainer.appendChild(menuItemsList);
  menuSection.appendChild(menuItemsContainer);

  return menuSection;
};

const updatePizzaMenu = () => {
  const pizzaMenuContainer = document.getElementById("pizza-menu");
  pizzaMenuContainer.innerHTML = "";
  addPizzaMenuItems(pizzaMenuContainer);
};

const addPizzaMenuItems = (pizzaMenuContainer) => {
  const checkIfShownPizzaMenuItems = pizzaMenu.filter(
    (menuItems) => menuItems.showItems
  );

  if (checkIfShownPizzaMenuItems.length === 0) {
    console.log("No pizza menu items are shown!");
    const noMenuItems = document.createElement("h2");
    noMenuItems.className = "header2 py-8 sm:py-20 text-center";
    noMenuItems.textContent = "Click on the menu items to view the pizzas!";
    pizzaMenuContainer.appendChild(noMenuItems);
    return;
  }

  pizzaMenu.forEach((menuItems) => {
    if (menuItems.showItems) {
      const subMenuItems = MenuItems(menuItems.title, menuItems.items);
      pizzaMenuContainer.appendChild(subMenuItems);
    }
  });
};

const addPizzaMenu = () => {
  const pizzaMenuContainer = document.createElement("div");
  pizzaMenuContainer.className = "w-full flex flex-col items-center";
  pizzaMenuContainer.id = "pizza-menu";

  addPizzaMenuItems(pizzaMenuContainer);

  return pizzaMenuContainer;
};

const Menu = () => {
  console.log("Loading menu page!");
  const menuPage = document.createElement("div");
  menuPage.id = "menu-page";
  menuPage.className =
    "w-full flex flex-col items-center flex-grow animate-shade bg-section-one pb-8 sm:pb-12 xl:pb-20";

  const heroImageDiv = Hero("Menu");
  menuPage.appendChild(heroImageDiv);

  const menuContent = document.createElement("div");
  menuContent.id = "menu-content";
  menuContent.className = "w-full flex flex-col items-center";

  const menuHeader = document.createElement("h1");
  menuHeader.className = "header1 py-4 sm:py-8 xl:py-12";
  menuHeader.textContent = "Pizzas";

  menuContent.appendChild(menuHeader);

  const menuItemsElement = navMenu();
  menuContent.appendChild(menuItemsElement);

  const pizzaMenuContainer = addPizzaMenu();
  menuContent.appendChild(pizzaMenuContainer);

  menuPage.appendChild(menuContent);

  return menuPage;
};

export default Menu;
