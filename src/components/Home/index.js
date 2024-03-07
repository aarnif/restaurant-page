import Hero from "../hero";
import { firstSectionText, secondSectionText } from "./data.js";

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

const imageBox = (backGround) => {
  const imageBox = document.createElement("div");
  imageBox.className = `w-full h-full flex-row-center ${backGround} header2`;
  imageBox.textContent = "Image";
  return imageBox;
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
