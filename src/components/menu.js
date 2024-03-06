const Menu = () => {
  console.log("Loading menu page!");
  const menuPageContainer = document.createElement("div");
  menuPageContainer.setAttribute("id", "menu-page");
  menuPageContainer.textContent = "Menu";

  return menuPageContainer;
};

export default Menu;
