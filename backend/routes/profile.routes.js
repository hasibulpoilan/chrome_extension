module.exports = app => {
  const profile = require("../../controllers/profile.controller.js");


  app.post("/api/profiles", profile.create);
};
