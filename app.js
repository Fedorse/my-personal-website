import langArr from "./langArr.js";

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.querySelector("#languageSelect");
  const enButton = document.querySelector("#enButton");
  const ruButton = document.querySelector("#ruButton");

  languageSelect.addEventListener("change", () => {
    currentLang = languageSelect.value;
    updateLanguage();
  });

  enButton.addEventListener("click", () => {
    currentLang = "en";
    updateLanguage();
  });

  ruButton.addEventListener("click", () => {
    currentLang = "ru";
    updateLanguage();
  });

  let currentLang = "en";

  const getString = (key) => {
    if (currentLang === "ru") {
      return langArr.ru[key];
    } else {
      return langArr.en[key];
    }
  };

  const updateLanguage = () => {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach((element) => {
      const key = element.dataset.lang;
      element.textContent = getString(key);
    });
  };

  updateLanguage();
});
