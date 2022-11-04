const { USER } = require("../config/db.config");
const db = require("../models");
const MotoGP = db.motogp;
const Op = db.Sequelize.Op;

// Create and Save a new MotoGP
exports.create = (req, res) => {

};

// Retrieve all MotoGPs from the database.
exports.findAll = (req, res) => {

};

// Find a single MotoGP with an id
exports.findOne = (req, res) => {

};

// Update a MotoGP by the id in the request
exports.update = (req, res) => {

};

// Delete a MotoGP with the specified id in the request
//exports.delete = (req, res) => {

//};

// Delete all MotoGPs from the database.
exports.deleteAll = (req, res) => {

};

// Find all published MotoGPs
exports.findAllPublished = (req, res) => {

};

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Crear la categoria
  console.log("Create en el ban")
  console.log(req.apellido)
  const motogp = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    categoria: req.body.categoria,
    filename: req.file ? req.file.filename : ""
  }

  // Guardar la categoria en la base de datos

  MotoGP.create(motogp)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurrend while creating the motogp."
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  MotoGP.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MotoGP was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete MotoGP with id=${id}. Maybe MotoGP was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete MotoGP with id=" + id
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  MotoGP.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "MotoGP was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update MotoGP with id=${id}. Maybe MotoGP was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating MotoGP with id=" + id
      });
    });
};
exports.findAll = (req, res) => {
  MotoGP.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurrend while retrieving MotoGP."
      });
    });

  //user.password = bcrypt.hashSync(req.body.password);
  /*User.create(user)
    .then(data => {
      const token = utils.generateToken(data);
      const userObj = utils.getCleanUser(data);

      return res.json({ user: userObk, access_token: token });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error ocurrend while creating the User."
      });
    });*/
};