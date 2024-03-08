const Hero = (heroText) => {
  const heroImageContainer = document.createElement("div");
  heroImageContainer.className = `relative w-full h-[700px] flex-row-center bg-restaurant bg-center bg-cover shadow-2xl header1`;

  const heroTextContainer = document.createElement("div");
  heroTextContainer.className = "max-w-[800px] flex-grow flex-row-center";
  heroTextContainer.textContent = heroText;

  heroImageContainer.appendChild(heroTextContainer);

  return heroImageContainer;
};

export default Hero;
