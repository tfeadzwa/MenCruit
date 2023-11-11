import { sideContent } from "./utils/sideIllustration.mjs";

// get the index of selected tab
const index = JSON.parse(localStorage.getItem("index"));

addSideIllustration();

function addSideIllustration() {
  // change color, h2, h4, and image content

  const sideIllContainer = document.querySelector(".side-ill-container");
  const signupLogo = document.querySelector(".signup__logo");
  const h2Content = document.querySelector(".h2-content");
  const h4Content = document.querySelector(".h4-content");
  const imgContent = document.querySelector(".img-content");

  const ill = sideContent[index];

  sideIllContainer.style.backgroundColor = ill.bgColor;
  signupLogo.style.color = ill.color;

  h2Content.innerHTML = ill.h2Content;
  h2Content.style.color = ill.color;
  h4Content.innerHTML = ill.h4Content;
  h4Content.style.color = ill.color;
  imgContent.src = ill.imgContent;
}

// check selected option from dropdown items
const optionsList = document.querySelectorAll(".dropdown-menu li");

optionsList.forEach((option) => {
  function handler(e) {
    checkSelectedOption();
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

function checkSelectedOption() {
  const selected = document.querySelector(".selected-value").textContent.trim();
  const explainField = document.querySelector(".field-explain");
  // const sourceField = document.querySelector(".field-source");

  // display Others field
  if (selected === "Other") {
    explainField.setAttribute("is-visible", "true");
  } else {
    explainField.setAttribute("is-visible", "false");
  }

  // ToDo: display Referred field
  if (selected === "Referred/Recommended") {
    // const sourceField = document.querySelector(".field-source");
    // sourceField.setAttribute("is-visible", "true");
  } else {
    // sourceField.setAttribute("is-visible", "false");
  }
}
