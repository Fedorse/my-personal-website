const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://fedorse.github.io/my-personal-website/",
  },
});
