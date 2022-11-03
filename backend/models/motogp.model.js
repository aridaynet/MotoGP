module.exports = (sequelize, Sequelize) => {
    const MotoGP = sequelize.define("motogp", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      }
    });
  
    return MotoGP;
  };