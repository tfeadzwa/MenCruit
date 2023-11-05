// get side illustration array from local storage
const ill = JSON.parse(localStorage.getItem("ill"));

function addSideIllustration() {
  // change color, h2, h4, and image content
  const h2Content = document.querySelector(".h2-content");
  const h4Content = document.querySelector(".h4-content");
  const imgContent = document.querySelector(".img-content");
  // save side illustration to local storage
  localStorage.setItem("ill", JSON.stringify(ill));

  // set background color
  document.querySelector(".side-ill-container").style.backgroundColor =
    ill.bgColor;

  // set logo color
  document.querySelector(".signup__logo").style.color = ill.color;

  // set text content
  h2Content.innerHTML = ill.h2Content;
  h2Content.style.color = ill.color;

  h4Content.innerHTML = ill.h4Content;
  h4Content.style.color = ill.color;

  imgContent.src = ill.imgContent;
}

addSideIllustration();
