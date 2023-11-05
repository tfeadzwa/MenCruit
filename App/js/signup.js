window.onload = () => {
  const tab = document.getElementById("tab-business");
  if (tab) {
    tab.click();
    tab.focus();
  }
};

const sideContent = [
  {
    color: "var(--white)",
    bgColor: "rgb(21, 53, 122)",
    h2Content: "Hire internationally with complete confidence",
    h4Content:
      "We'll handle your worldwide compliance, payroll, and benefits, so you can fast-track your international expansion.",
    imgContent: "/app/assets/icons/business-icon.svg",
  },

  {
    color: "var(--dark-cerulean)",
    bgColor: "rgb(153, 202, 249)",
    h2Content: "Work anywhere and get paid in any currency",
    h4Content:
      "Work compliantly from 150 countries, automate your invoicing, and get paid in any currency, including Crypto.",
    imgContent: "/app/assets/icons/contractor-icon.svg",
  },

  {
    color: "var(--white)",
    bgColor: "rgb(189, 128, 255)",
    h2Content: "One place to manage everything",
    h4Content:
      "Review your contract, access payslips and manage benefits, time off and more in just one place.",
    imgContent: "/app/assets/icons/employee-icon.svg",
  },
];

const tabsBtn = [...document.querySelectorAll(".tab__button")];
const tabsContainer = document.querySelectorAll(".tab__container");
const btnNext = document.getElementById("next-button");
let prevBtnContext = tabsBtn[0];

tabsBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // remove selection style on previous clicked button
    prevBtnContext.classList.remove("selected");
    // remove selection style on active button
    tab.classList.add("selected");

    // hide the (next button)
    btnNext.style.display = tab.id.includes("employee") ? "none" : "block";
    // convert NodeList array like object to array object and get the index
    const prevIndex = tabsBtn.indexOf(prevBtnContext);

    // hide the previous tab container and display current one
    tabsContainer[prevIndex].style.display = "none";
    tabsContainer[index].style.display = "flex";

    // add side illustration
    addSideIllustration(index);

    //update previous tab
    prevBtnContext = tab;
  });
});

//sync tab selection with side illustration
function addSideIllustration(index) {
  // change color, h2, h4, and image content
  const h2Content = document.querySelector(".h2-content");
  const h4Content = document.querySelector(".h4-content");
  const imgContent = document.querySelector(".img-content");

  // get side illustration via index
  const ill = sideContent[index];

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

const nextButton = document.querySelector("#next-button");

if (nextButton) {
  nextButton.addEventListener("click", () => {
    window.open("/app/views/signup-form.html", "_parent");
  });
}

export { addSideIllustration };
