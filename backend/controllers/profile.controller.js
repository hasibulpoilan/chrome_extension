const db = require('../models');
const Profile = db.profile; // Assuming profile.model.js defines the Profile model

// POST controller to create a new profile
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const profile = {
    name: req.body.name,
    url: req.body.url,
    about: req.body.about,
    bio: req.body.bio,
    location: req.body.location,
    followerCount: req.body.followerCount,
    connectionCount: req.body.connectionCount,
  };

  Profile.create(profile)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the profile." });
    });
};
