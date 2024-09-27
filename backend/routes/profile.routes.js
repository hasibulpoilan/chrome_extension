module.exports = app => {
  const profile = require('../controllers/profile.controller');

  app.post("/api/profiles", profile.create);
};
