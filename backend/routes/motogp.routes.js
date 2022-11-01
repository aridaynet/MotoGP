module.exports = app => {
    const motogp = require("../controllers/motogp.controller.js");
    var router = require("express").Router();

    //Create a new motogp
    router.post("/", motogp.create);
    //Retrive all Motogp
    router.get("/", motogp.findAll);
    // Retrieve a single Motogp with id
    router.get("/:id", motogp.findOne);
    //Update a Motogp with id
    router.put("/:id", motogp.update);
    // Delete a Motogp with id
    router.delete("/:id", motogp.delete);
    app.use('/api/motogp', router);
};