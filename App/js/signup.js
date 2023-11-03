//ToDo: use dataset

const tabsBtn = document.querySelectorAll(".tab__button");
const tabsContainer = document.querySelectorAll(".tab__container");
const btnNext = document.getElementById("next-button");
let prevBtnContext = tabsBtn[0];

const tabImages = {};

tabsBtn.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tab.style.cssText =
      "border-color: var(--royal-blue); background-color: hsl(219, 91%, 96%); color: black;";
    // hide the next button
    btnNext.style.display = tab.id.includes("employee") ? "none" : "block";
    // convert NodeList array like object to array object and get the index
    const prevIndex = [...tabsBtn].indexOf(prevBtnContext);

    // hide the previous tab container and display current one
    tabsContainer[prevIndex].style.display = "none";
    tabsContainer[index].style.display = "flex";
    prevBtnContext = tab;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let tab = document.getElementById("tab-business");
  tab.click();
  tab.focus();
});
