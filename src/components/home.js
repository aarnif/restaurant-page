const Home = () => {
  console.log("Loading home page!");
  const homePageContainer = document.createElement("div");
  homePageContainer.setAttribute("id", "home-page");

  homePageContainer.classList.add(
    "w-full",
    "flex-grow",
    "flex",
    "flex-col",
    "items-center"
  );
  const imageContainer = document.createElement("div");
  imageContainer.classList.add(
    "w-full",
    "h-[600px]",
    "flex",
    "justify-center",
    "items-center",
    "bg-gray-200"
  );
  imageContainer.textContent = "Hero image goes here!";

  homePageContainer.appendChild(imageContainer);

  return homePageContainer;
};

export default Home;
