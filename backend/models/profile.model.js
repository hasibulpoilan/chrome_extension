module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define("profile", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    about: {
      type: Sequelize.TEXT,
    },
    bio: {
      type: Sequelize.TEXT,
    },
    location: {
      type: Sequelize.STRING,
    },
    follower_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    connection_count: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });
  return Profile;
};
