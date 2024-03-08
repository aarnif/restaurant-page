const Hero = () => {
  const heroImageContainer = document.createElement("div");
  heroImageContainer.className = `relative w-full h-[700px] flex-row-center bg-restaurant bg-center bg-cover shadow-2xl header1`;

  const heroLogoContainer = document.createElement("div");
  heroLogoContainer.className = "flex-grow max-w-[600px]";

  heroImageContainer.appendChild(heroLogoContainer);
  return heroImageContainer;
};

export default Hero;
