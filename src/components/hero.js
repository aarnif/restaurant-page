const Hero = () => {
  const heroImageDiv = document.createElement("div");
  heroImageDiv.className =
    "relative w-full h-[700px] flex-row-center bg-hero shadow-2xl header-text";
  heroImageDiv.textContent = "Hero Image";
  return heroImageDiv;
};

export default Hero;
