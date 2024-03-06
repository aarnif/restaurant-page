const Section = (textOrImageOne, textOrImageTwo, backgroundColor) => {
  console.log(textOrImageOne, textOrImageTwo);
  const section = document.createElement("section");
  section.className = `w-full flex-row-center p-20 bg-section ${backgroundColor}`;

  const div = document.createElement("div");
  div.className = "max-w-[1500px] flex-grow flex-row-center";

  const containerLeft = document.createElement("div");
  containerLeft.className =
    "flex-grow max-w-[750px] h-[600px] flex-row-center items-start";
  containerLeft.appendChild(textOrImageOne);
  div.appendChild(containerLeft);

  const containerRight = document.createElement("div");
  containerRight.className =
    "max-w-[750px] h-[600px] flex-grow flex-row-center items-start";
  containerRight.appendChild(textOrImageTwo);
  div.appendChild(containerRight);

  section.appendChild(div);

  return section;
};

const textBox = (textHeader, textArray) => {
  const textBox = document.createElement("div");
  const textBoxHeader = document.createElement("h2");
  textBoxHeader.className = "h-[100px] pt-4 sub-header-text text-center";
  textBoxHeader.textContent = textHeader;

  textBox.appendChild(textBoxHeader);
  textArray.forEach((text) => {
    const p = document.createElement("p");
    p.className = "py-4 px-10 body-text";
    p.textContent = text;
    textBox.appendChild(p);
  });
  return textBox;
};

const imageBox = (backGround) => {
  const imageBox = document.createElement("div");
  imageBox.className = `w-full h-full flex-row-center ${backGround} sub-header-text`;
  imageBox.textContent = "Image";
  return imageBox;
};

const Home = () => {
  console.log("Loading home page!");
  const homePage = document.createElement("div");
  homePage.id = "home-page";
  homePage.className = "w-full flex-col-center animate-shade";

  const heroImageDiv = document.createElement("div");
  heroImageDiv.className =
    "relative w-full h-[700px] flex-row-center bg-hero shadow-2xl header-text";
  heroImageDiv.textContent = "Hero Image";
  homePage.appendChild(heroImageDiv);

  const firstSectionText = [
    "We are passionate about sharing the true taste of Italy right here, through our traditional, mouth-watering pizzas. Each pizza is handcrafted with love, using only the freshest ingredients imported directly from Italy, and baked to perfection in our wood-fired oven.",
    "Our menu is a delightful journey through the diverse regions of Italy, each pizza telling its own unique story. Whether you're craving a classic Margherita or an adventurous gourmet creation, we have something to satisfy every pizza lover. So, sit back, relax, and let us take your taste buds on an unforgettable Italian journey. Welcome to our pizzeria, where every slice is a slice of Italy.",
  ];

  const secondSectionText = [
    "Our journey began in the heart of Naples, Italy, where our founder, Luigi, grew up in the bustling kitchen of his Nonna's trattoria. From her, he learned the art of pizza making, the importance of using the freshest ingredients and the love that goes into every single pie.",
    "In 1990, Luigi decided to bring the rich flavors of his homeland to this side of the world. He packed his bags, his recipes, and his passion for pizza, and set off to start his own pizzeria. His dream was to recreate the warm, inviting atmosphere of his Nonna's kitchen and share the authentic taste of Italian pizza with everyone.",
    "Since then, our pizzeria has become a beloved local gem, known for its traditional flavors and friendly service. We're proud to continue Luigi's legacy, serving handcrafted pizzas that bring a piece of Italy to your plate. We invite you to join us and experience the love and tradition that goes into each and every slice. Welcome to our family, welcome to our pizzeria!",
  ];

  const sections = [
    [
      textBox("Savor the Moonlit Magic with Every Slice!", firstSectionText),
      imageBox("bg-image"),
    ],
    [imageBox("bg-image"), textBox("Our Story", secondSectionText)],
  ];

  sections.forEach((section, i) => {
    const backgroundColor = i % 2 === 0 ? "bg-section-one" : "bg-section-two";
    const newSection = Section(section[0], section[1], backgroundColor);
    homePage.appendChild(newSection);
  });

  return homePage;
};

export default Home;
