import Hero from "../hero";
import contactFormSection from "./contactForm";

const address = [
  "Restaurant Row, Times Square",
  "374 W 46th Street",
  "New York, NY 10036",
  "United States",
  "(212) FAKE-PHONE-NUMBER",
  "fake.address@velluto-rosso.com",
];

const socialMedia = [
  { platform: "Facebook", link: "https://www.facebook.com" },
  { platform: "Instagram", link: "https://www.instagram.com" },
  { platform: "Twitter", link: "https://www.twitter.com" },
];

const openingHours = [
  { day: "Sunday", hours: "Closed" },
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9:00 AM - 10:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 10:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 10:00 PM" },
  { day: "Friday", hours: "9:00 AM - 11:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 12:00 PM" },
];

const socialMediaIcons = () => {
  const socialMediaIconsList = document.createElement("ul");
  socialMediaIconsList.className = "w-full flex items-center justify-start";

  socialMedia.forEach((socialMedia) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");

    li.className =
      "mt-4 mx-4 h-12 w-12 flex justify-center items-center rounded-full hover:bg-gray-900 active:scale-95 transition ease-in-out duration-300";
    a.href = socialMedia.link;
    a.target = "_blank";

    i.className = `fa-brands fa-${socialMedia.platform.toLowerCase()} fa-2xl active:scale-95 transition ease-in-out duration-300`;

    a.appendChild(i);
    li.appendChild(a);
    socialMediaIconsList.appendChild(li);
  });

  return socialMediaIconsList;
};

const addressSection = () => {
  const addressContainer = document.createElement("div");
  addressContainer.className =
    "flex-grow w-full h-full flex flex-col justify-start items-center";

  const h2 = document.createElement("h2");

  h2.className = "w-full header3 mb-8 text-center sm:text-left";
  h2.textContent = "Address";

  const ul = document.createElement("ul");
  ul.className = "w-full flex flex-col items-center";

  address.forEach((line) => {
    const li = document.createElement("li");
    li.className = "w-full flex justify-center sm:justify-start items-center";
    const addressLine = document.createElement("p");
    addressLine.className = "body-text pr-4";
    addressLine.textContent = line;

    li.appendChild(addressLine);
    ul.appendChild(li);
  });

  addressContainer.appendChild(h2);
  addressContainer.appendChild(ul);
  const socialMediaIconsList = socialMediaIcons();
  // addressContainer.appendChild(socialMediaIconsList);
  return addressContainer;
};

const openingHoursSection = () => {
  const openingHoursContainer = document.createElement("div");
  openingHoursContainer.className =
    "w-full flex-grow flex flex-col items-center";

  const h2 = document.createElement("h2");

  h2.className =
    "w-full header3 mt-8 mb-8 sm:mt-0 xl:my-8 text-center sm:text-left";
  h2.textContent = "Opening Hours";

  const ul = document.createElement("ul");
  ul.className = "w-full flex flex-col items-center";

  openingHours.forEach((openingHour) => {
    const li = document.createElement("li");
    li.className = "w-full flex justify-between items-center";
    const openingDay = document.createElement("p");
    openingDay.className = "body-text pr-4";
    openingDay.textContent = `${openingHour.day}:`;

    const openingHours = document.createElement("p");
    openingHours.className = "body-text";
    openingHours.textContent = openingHour.hours;

    li.appendChild(openingDay);
    li.appendChild(openingHours);
    ul.appendChild(li);
  });

  openingHoursContainer.appendChild(h2);
  openingHoursContainer.appendChild(ul);

  return openingHoursContainer;
};

const locationSection = () => {
  const locationBoxContainer = document.createElement("div");
  locationBoxContainer.className =
    "relative h-[300px] sm:h-[500px] w-full flex-grow flex justify-between items-center border-2 border-slate-400 rounded-md overflow-hidden";

  const iframe = document.createElement("iframe");
  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0462357975734!2d-73.99540980460759!3d40.76100779760812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594bcb26fb9f%3A0x4d572344598e7d0d!2sRestaurant%20Row!5e0!3m2!1sen!2suk!4v1709798306497!5m2!1sen!2suk";
  iframe.className = "absolute w-full h-full";
  iframe.style.border = "0";
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

  locationBoxContainer.appendChild(iframe);

  const warningSignContainer = document.createElement("div");
  warningSignContainer.className =
    "absolute w-full flex justify-center items-center";

  const warningSign = document.createElement("span");
  warningSign.className = "text-xl sm:text-2xl xl:text-4xl";
  warningSign.textContent = "THIS RESTAURANT DOES NOT EXIST!";

  warningSignContainer.appendChild(warningSign);

  locationBoxContainer.appendChild(warningSignContainer);

  return locationBoxContainer;
};

const contactDetailsSection = () => {
  const contactDetailsContainer = document.createElement("div");
  contactDetailsContainer.className =
    "h-full w-full flex-grow flex flex-col justify-start items-start mb-8 xl:mb-0 sm:flex-row xl:flex-col xl:max-w-[400px]";

  const addressContainer = addressSection();
  const openingHoursContainer = openingHoursSection();

  contactDetailsContainer.appendChild(addressContainer);
  contactDetailsContainer.appendChild(openingHoursContainer);

  return contactDetailsContainer;
};

const contactDetailsAndLocationSection = () => {
  const contactDetailsAndLocationContainer = document.createElement("div");
  contactDetailsAndLocationContainer.className =
    "w-full flex justify-center items-center my-8 sm:my-16 xl:my-20";

  const contactDetailsAndLocationContent = document.createElement("div");
  contactDetailsAndLocationContent.className =
    "px-4 sm:px-8 flex-grow max-w-[1400px] flex flex-col flex-col-reverse items-center xl:flex-row gap-8";

  const contactDetailsContainer = contactDetailsSection();

  const locationBoxContainer = locationSection();

  contactDetailsAndLocationContent.appendChild(contactDetailsContainer);
  contactDetailsAndLocationContent.appendChild(locationBoxContainer);

  contactDetailsAndLocationContainer.appendChild(
    contactDetailsAndLocationContent
  );

  return contactDetailsAndLocationContainer;
};

const Contact = () => {
  console.log("Loading contact page!");
  const contactPage = document.createElement("div");
  contactPage.setAttribute("id", "contact-page");
  contactPage.className =
    "w-full flex flex-col items-center bg-section-one animate-shade";

  const heroImageDiv = Hero("Contact");
  contactPage.appendChild(heroImageDiv);

  const contactDetailsAndLocationContainer = contactDetailsAndLocationSection();

  contactPage.appendChild(contactDetailsAndLocationContainer);

  const contactFormContainer = contactFormSection();

  contactPage.appendChild(contactFormContainer);

  return contactPage;
};

export default Contact;
