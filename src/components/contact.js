const Contact = () => {
  console.log("Loading contact page!");
  const contactPageContainer = document.createElement("div");
  contactPageContainer.setAttribute("id", "contact-page");
  contactPageContainer.textContent = "Contact";

  return contactPageContainer;
};

export default Contact;
