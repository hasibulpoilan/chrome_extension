const db = require("../backend/models");
const Profile = db.profile;


exports.create = async (req, res) => {
  try {
    const { name, url, about, bio, location, follower_count, connection_count } = req.body;

    if (!name || !url) {
      return res.status(400).send({ message: "Name and URL cannot be empty!" });
    }

    const profile = await Profile.create({
      name,
      url,
      about,
      bio,
      location,
      follower_count: follower_count || 0,
      connection_count: connection_count || 0
    });

    res.send(profile);
  } catch (error) {
    res.status(500).send({ message: error.message || "Some error occurred while creating the profile." });
  }
};
