const Home = () => {
  console.log("Loading home page!");
  const homePageContainer = document.createElement("div");
  homePageContainer.setAttribute("id", "home-page");
  homePageContainer.textContent = "Home";

  return homePageContainer;
};

export default Home;
