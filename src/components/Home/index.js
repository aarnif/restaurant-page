import Hero from "../hero";
import { firstSectionText, secondSectionText } from "./data.js";
import pizzaOven from "../../assets/images/pizza-oven.png";
import terrace from "../../assets/images/terrace.png";

const Section = (
  textOrImageContainerOne,
  textOrImageContainerTwo,
  backgroundColor
) => {
  const section = document.createElement("section");
  section.className = `w-full flex-row-center p-20 ${backgroundColor}`;

  const div = document.createElement("div");
  div.className = "max-w-[1600px] flex-grow flex-row-center";

  div.appendChild(textOrImageContainerOne);
  div.appendChild(textOrImageContainerTwo);

  section.appendChild(div);

  return section;
};

const textBox = (textHeader, textArray) => {
  const textBox = document.createElement("div");
  const textBoxHeader = document.createElement("h2");
  textBoxHeader.className = "h-[100px] pt-4 header2 text-center";
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

const textSection = (textHeader, textArray) => {
  const textContainer = document.createElement("div");
  textContainer.className =
    "flex-grow max-w-[800px] flex-row-center items-start";
  const textContent = textBox(textHeader, textArray);
  textContainer.appendChild(textContent);

  return textContainer;
};

const imageSection = (imageUrl) => {
  const imageContainer = document.createElement("div");
  imageContainer.className =
    "flex-grow max-w-[800px] h-[600px] flex-grow flex-row-center items-start rounded-md shadow-xl overflow-hidden";
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

  const heroImageDiv = Hero();
  homePage.appendChild(heroImageDiv);

  const sections = [
    [
      textSection(
        "Savor the Moonlit Magic with Every Slice!",
        firstSectionText
      ),
      imageSection(pizzaOven),
    ],
    [imageSection(terrace), textSection("Our Story", secondSectionText)],
  ];

  sections.forEach((section, i) => {
    const backgroundColor = i % 2 === 0 ? "bg-section-one" : "bg-section-two";
    const newSection = Section(section[0], section[1], backgroundColor);
    homePage.appendChild(newSection);
  });

  return homePage;
};

export default Home;
