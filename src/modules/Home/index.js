import Hero from "../hero";
import pizzaOven from "../../assets/images/pizza-oven.png";
import terrace from "../../assets/images/terrace.png";

const sectionContent = [
  {
    title: "Where Every Slice is a Taste of Elegance.",
    text: [
      "We are passionate about sharing the true taste of Italy right here, through our traditional, mouth-watering pizzas. Each pizza is handcrafted with love, using only the freshest ingredients imported directly from Italy, and baked to perfection in our wood-fired oven.",
      "Our menu is a delightful journey through the diverse regions of Italy, each pizza telling its own unique story. Whether you're craving a classic Margherita or an adventurous gourmet creation, we have something to satisfy every pizza lover. So, sit back, relax, and let us take your taste buds on an unforgettable Italian journey. Welcome to our pizzeria, where every slice is a slice of Italy.",
    ],
    imageUrl: pizzaOven,
  },
  {
    title: "Our Story",
    text: [
      "Our journey began in the heart of Naples, Italy, where our founder, Luigi, grew up in the bustling kitchen of his Nonna's trattoria. From her, he learned the art of pizza making, the importance of using the freshest ingredients and the love that goes into every single pie.",
      "In 1990, Luigi decided to bring the rich flavors of his homeland to this side of the world. He packed his bags, his recipes, and his passion for pizza, and set off to start his own pizzeria. His dream was to recreate the warm, inviting atmosphere of his Nonna's kitchen and share the authentic taste of Italian pizza with everyone.",
      "Since then, our pizzeria has become a beloved local gem, known for its traditional flavors and friendly service. We're proud to continue Luigi's legacy, serving handcrafted pizzas that bring a piece of Italy to your plate. We invite you to join us and experience the love and tradition that goes into each and every slice. Welcome to our family, welcome to our pizzeria!",
    ],
    imageUrl: terrace,
  },
];

const Section = (index, content) => {
  const isEven = index % 2 === 0;
  const section = document.createElement("section");
  section.className = isEven
    ? "w-full py-8 sm:py-12 xl:py-16 flex justify-center items-center bg-section-one"
    : "w-full py-8 sm:py-12 xl:py-16 flex justify-center items-center bg-section-two";

  const div = document.createElement("div");
  div.className = isEven
    ? "xl:max-w-[1600px] xl:h-[600px] px-4 sm:px-8 flex-grow flex flex-col flex-col-reverse xl:flex-row items-center gap-4 sm:gap-8"
    : "xl:max-w-[1600px] xl:h-[600px] px-4 sm:px-8 flex-grow flex flex-col flex-col-reverse xl:flex-row-reverse items-center gap-4 sm:gap-8";

  const textContainer = textSection(content.title, content.text);
  const imageContainer = imageSection(content.imageUrl);

  div.appendChild(textContainer);
  div.appendChild(imageContainer);

  section.appendChild(div);

  return section;
};

const textBox = (textHeader, textArray) => {
  const textBox = document.createElement("div");
  const textBoxHeader = document.createElement("h2");
  textBoxHeader.className = "my-4 sm:my-8 header2 text-center";
  textBoxHeader.textContent = textHeader;

  textBox.appendChild(textBoxHeader);
  textArray.forEach((text) => {
    const p = document.createElement("p");
    p.className =
      "my-4 body-text text-base sm:text-xl text-center sm:text-left";
    p.textContent = text;
    textBox.appendChild(p);
  });
  return textBox;
};

const textSection = (textHeader, textArray) => {
  const textContainer = document.createElement("div");
  textContainer.className = "basis-[46%] flex-row-center items-start";
  const textContent = textBox(textHeader, textArray);
  textContainer.appendChild(textContent);

  return textContainer;
};

const imageSection = (imageUrl) => {
  const imageContainer = document.createElement("div");
  imageContainer.className =
    "basis-[54%] w-full h-full flex justify-center items-start rounded-md shadow-xl";
  const image = document.createElement("img");
  image.className = `w-full h-full object-cover`;
  image.src = imageUrl;
  imageContainer.appendChild(image);
  return imageContainer;
};

const Home = () => {
  console.log("Loading home page!");
  const homePage = document.createElement("div");
  homePage.id = "home-page";
  homePage.className = "w-full flex-col-center animate-shade";

  const heroImageDiv = Hero("A slice of Italy in every bite.");

  homePage.appendChild(heroImageDiv);

  sectionContent.forEach((section, index) => {
    const backgroundColor =
      index % 2 === 0 ? "bg-section-one" : "bg-section-two";
    const newSection = Section(index, section, backgroundColor);
    homePage.appendChild(newSection);
  });

  return homePage;
};

export default Home;
