import { sideContent } from "./utils/sideIllustration.mjs";

// get the index of selected tab
const index = JSON.parse(localStorage.getItem("index"));

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

addSideIllustration();
