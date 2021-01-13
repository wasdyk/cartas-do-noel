module.exports = app => {
  const cartas = require("../controllers/carta.controller.js");

  var router = require("express").Router();

  // Create a new carta
  router.post("/", cartas.create);

  // Retrieve all Tutorials
  router.get("/", cartas.findAll);

  // Retrieve a single Tutorial with name
  router.get("/:name", cartas.findOne);

  //app.use('/api/cartas', router);
};
