const fieldSelect = document.querySelector(".field-select");
const selectButton = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".dropdown-menu li");

selectButton.addEventListener("click", () => {
  fieldSelect.classList.toggle("field-select__active");
  selectButton.setAttribute(
    "aria-expanded",
    selectButton.getAttribute("aria-expanded") === true ? "false" : "true"
  );
});

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.textContent;
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
    }
    fieldSelect.classList.remove("field-select__active");
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
