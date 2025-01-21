const Hero = (heroText) => {
  const heroImageContainer = document.createElement("div");
  heroImageContainer.className = `w-full h-[100px] sm:h-[500px] xl:h-[700px] flex flex-col items-center bg-restaurant bg-center bg-cover shadow-2xl header1`;

  const heroTextContainer = document.createElement("div");
  heroTextContainer.className =
    "max-w-[800px] flex-grow hidden sm:flex justify-center items-center";

  const heroTitle = document.createElement("h1");
  heroTitle.textContent = heroText;

  heroTextContainer.appendChild(heroTitle);
  heroImageContainer.appendChild(heroTextContainer);

  return heroImageContainer;
};

export default Hero;
