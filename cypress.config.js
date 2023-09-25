const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  chromeWebSecurity : false,
  env : {
    CYPRESS_USERNAME : "puputym",
    CYPRESS_PASSWORD : "12345678"
  },
  e2e: {
      specPattern : "cypress/integration",
      //reporter: "mochawesome",
      supportFile : false,
      viewportWidth: 1500,
      viewportHeight: 1000,
      video : true,
      videoUploadOnPasses: false,
      pageLoadTimeout : 30000,
  },
});

