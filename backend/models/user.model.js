module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    password: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.BOOLEAN
    }
  });

  return User;
};