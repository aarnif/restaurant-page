const dialog = document.getElementById("modal");

const formItem = (
  labelText,
  inputType,
  inputId,
  inputPlaceholder,
  inputPattern,
  inputRequired
) => {
  const li = document.createElement("li");
  li.className = "w-full flex-col-center items-start py-1 px-0 sm:p-2";

  const label = document.createElement("label");
  label.setAttribute("for", inputId);
  label.className = "form-label";
  label.textContent = labelText;

  const input = document.createElement("input");
  input.setAttribute("id", inputId);
  input.setAttribute("type", inputType);
  input.setAttribute("placeholder", inputPlaceholder);
  input.setAttribute("required", inputRequired);
  if (inputPattern) input.setAttribute("pattern", inputPattern);

  input.className = "form-input";

  li.appendChild(label);
  li.appendChild(input);

  return li;
};

const formRow = (formItems) => {
  const ul = document.createElement("ul");
  ul.className = "w-full flex-col-center lg:flex-row";

  formItems.forEach((formItem) => {
    ul.appendChild(formItem);
  });

  return ul;
};

const formTextArea = (labelText, inputId, inputPlaceholder, inputRequired) => {
  const li = document.createElement("li");
  li.className = "w-full flex-col-center items-start py-2 sm:py-4";

  const label = document.createElement("label");
  label.setAttribute("for", inputId);
  label.className = "form-label";
  label.textContent = labelText;

  const textarea = document.createElement("textarea");
  textarea.className =
    "w-full min-h-[160px] sm:min-h-[250px] max-h-[220px] sm:max-h-[350px] form-text-area";
  textarea.setAttribute("type", "text");
  textarea.id = inputId;
  textarea.setAttribute("placeholder", inputPlaceholder);
  textarea.setAttribute("required", inputRequired);

  li.appendChild(label);
  li.appendChild(textarea);

  return li;
};

const ContactForm = () => {
  const contactFormContainer = document.createElement("div");
  contactFormContainer.className =
    "max-w-[1400px] flex-grow flex justify-center items-center px-4 sm:px-8";

  const form = document.createElement("form");
  form.id = "contact-form";
  form.className = "w-full h-full flex-col-center justify-around";

  const h2 = document.createElement("h2");
  h2.className = "w-full header3 mb-4 sm:mb-8 text-center xl:text-left";
  h2.textContent = "Contact Us";

  const formRowOne = formRow([
    formItem(
      "FIRST NAME",
      "text",
      "first-name",
      "Your first name",
      "",
      "",
      true
    ),
    formItem("LAST NAME", "text", "last-name", "Your last name", "", "", true),
  ]);

  const formRowTwo = formRow([
    formItem(
      "EMAIL",
      "email",
      "email",
      "Give a valid email address",
      "",
      "",
      true
    ),
    formItem(
      "PHONE NUMBER",
      "text",
      "phone-number",
      "Give a valid phone number",
      "",
      "",
      true
    ),
  ]);

  const formRowThree = formRow([
    formTextArea(
      "WRITE YOUR MESSAGE BELOW",
      "message",
      "Write your message here",
      true
    ),
  ]);

  form.appendChild(h2);
  form.appendChild(formRowOne);
  form.appendChild(formRowTwo);
  form.appendChild(formRowThree);

  const submitButtonContainer = document.createElement("div");
  submitButtonContainer.className =
    "w-full flex justify-center items-center py-4";

  const submitButton = document.createElement("button");
  submitButton.setAttribute("form", "contact-form");
  submitButton.setAttribute("type", "submit");
  submitButton.className = "button w-full m-0 py-4 text-lg sm:text-xl";
  submitButton.textContent = "Submit";

  submitButtonContainer.appendChild(submitButton);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    dialog.showModal();
  };

  form.addEventListener("submit", (e) => {
    handleFormSubmit(e);
  });

  const modalCloseButton = document.getElementById("close-modal");
  modalCloseButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
  });

  form.appendChild(submitButtonContainer);

  contactFormContainer.appendChild(form);

  return contactFormContainer;
};

const contactFormSection = () => {
  const contactFormContainer = document.createElement("div");
  contactFormContainer.className =
    "w-full flex justify-center items-center mb-8 sm:mb-16 xl:mb-20";

  const contactForm = ContactForm();

  contactFormContainer.appendChild(contactForm);

  return contactFormContainer;
};

export default contactFormSection;
