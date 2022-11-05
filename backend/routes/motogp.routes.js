module.exports = app => {
    const motogp = require("../controllers/motogp.controller.js");
    var router = require("express").Router();
    var upload = require('../multer/upload');
    const auth = require("../controllers/auth.js");

    // Create a new MotoGP
    router.post("/", upload.single('file'), motogp.create);
    //Create a new motogp
    router.post("/", motogp.create);
    //Retrive all Motogp
    router.get("/", motogp.findAll); //auth.isAuthenticated
    // Retrieve a single Motogp with id
    router.get("/:id", motogp.findOne);
    //Update a Motogp with id
    router.put("/:id", motogp.update);
    // Delete a Motogp with id
    router.delete("/:id", motogp.delete);
    // Sign in
    //router.post("/signin", auth.signin);

    app.use('/api/motogp', router);
};